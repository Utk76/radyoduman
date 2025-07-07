import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart, Share2, Radio, Loader2 } from 'lucide-react';

interface TrackInfo {
  title: string;
  artist: string;
  program: string;
  host: string;
}

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<TrackInfo>({
    title: 'Radyo Duman',
    artist: 'Canlı Yayın',
    program: 'Sabah Kahvesi',
    host: 'Ayşe Demir'
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fetchIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch current track info with multiple API attempts
  const fetchCurrentTrack = useCallback(async () => {
    const apis = [
      'http://radyo.yayini.net:8012/7.html',
      'http://radyo.yayini.net:8012/stats?json=1',
      'http://radyo.yayini.net:8012/status-json.xsl',
      'http://radyo.yayini.net:8012/played.html?type=json',
      'http://radyo.yayini.net:8012/currentsong?sid=1'
    ];

    for (const apiUrl of apis) {
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json, text/html, text/plain, */*',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          },
          mode: 'cors'
        });
        
        if (!response.ok) {
          console.log(`API ${apiUrl} returned ${response.status}`);
          continue;
        }
        
        const contentType = response.headers.get('content-type');
        let data;
        
        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
        } else {
          // HTML response için
          const text = await response.text();
          console.log(`API Response from ${apiUrl}:`, text);
          
          // 7.html formatı: sadece şarkı bilgisi
          if (apiUrl.includes('7.html')) {
            const songInfo = text.trim();
            if (songInfo && songInfo !== 'undefined' && songInfo !== '') {
              let title = 'Bilinmiyor';
              let artist = 'Bilinmiyor';
              
              if (songInfo.includes(' - ')) {
                const parts = songInfo.split(' - ');
                artist = parts[0].trim();
                title = parts[1].trim();
              } else {
                title = songInfo;
              }
              
              setCurrentTrack({
                title,
                artist,
                program: 'Sabah Kahvesi',
                host: 'Ayşe Demir'
              });
              
              console.log('Track updated from 7.html:', { title, artist });
              return; // Başarılı olduğunda döngüyü kır
            }
          }
          
          // currentsong formatı
          if (apiUrl.includes('currentsong')) {
            const songInfo = text.trim();
            if (songInfo && songInfo !== 'undefined' && songInfo !== '') {
              setCurrentTrack({
                title: songInfo,
                artist: 'Canlı Yayın',
                program: 'Sabah Kahvesi',
                host: 'Ayşe Demir'
              });
              
              console.log('Track updated from currentsong:', songInfo);
              return;
            }
          }
          
          continue;
        }
        
        // JSON response
        let trackInfo = null;
        
        if (data.icestats?.source) {
          trackInfo = data.icestats.source;
        } else if (data.source) {
          trackInfo = data.source;
        } else if (data.title || data.artist) {
          trackInfo = data;
        }
        
        if (trackInfo) {
          const title = trackInfo.title || trackInfo.songtitle || trackInfo.yayintitle || 'Bilinmiyor';
          const artist = trackInfo.artist || trackInfo.songartist || 'Bilinmiyor';
          
          // Parse "Artist - Title" format if needed
          let finalTitle = title;
          let finalArtist = artist;
          
          if (title.includes(' - ') && artist === 'Bilinmiyor') {
            const parts = title.split(' - ');
            finalArtist = parts[0].trim();
            finalTitle = parts[1].trim();
          }
          
          setCurrentTrack({
            title: finalTitle,
            artist: finalArtist,
            program: 'Sabah Kahvesi',
            host: 'Ayşe Demir'
          });
          
          console.log('Track info updated from JSON:', { title: finalTitle, artist: finalArtist });
          return;
        }
      } catch (error) {
        console.error(`API error for ${apiUrl}:`, error);
        continue;
      }
    }
    
    // Eğer hiç API çalışmazsa
    console.log('No APIs worked, keeping current track info');
  }, []);

  // Initialize audio and fetch track info
  useEffect(() => {
    fetchCurrentTrack();
    
    // Set up interval for fetching track info
    fetchIntervalRef.current = setInterval(fetchCurrentTrack, 10000); // 10 seconds
    
    // Auto-start after 2 seconds if user hasn't interacted
    const autoStartTimer = setTimeout(() => {
      if (!isUserInteracted) {
        setIsUserInteracted(true);
        setIsPlaying(true);
      }
    }, 2000);
    
    return () => {
      if (fetchIntervalRef.current) {
        clearInterval(fetchIntervalRef.current);
      }
      clearTimeout(autoStartTimer);
    };
  }, [fetchCurrentTrack]);

  // Handle audio element setup
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      
      // Set initial volume
      audio.volume = volume / 100;
      audio.muted = isMuted;
      
      // Audio event listeners
      const handleLoadStart = () => {
        console.log("Audio loading started");
        setIsLoading(true);
      };
      
      const handleCanPlay = () => {
        console.log("Audio can play");
        setIsLoading(false);
      };
      
      const handlePlaying = () => {
        console.log("Audio is playing");
        setIsLoading(false);
      };
      
      const handleError = (e: Event) => {
        console.error('Audio error:', e);
        setIsLoading(false);
        setIsPlaying(false);
      };
      
      const handleWaiting = () => {
        console.log("Audio is waiting");
        setIsLoading(true);
      };
      
      audio.addEventListener('loadstart', handleLoadStart);
      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('playing', handlePlaying);
      audio.addEventListener('waiting', handleWaiting);
      audio.addEventListener('error', handleError);
      
      return () => {
        audio.removeEventListener('loadstart', handleLoadStart);
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('playing', handlePlaying);
        audio.removeEventListener('waiting', handleWaiting);
        audio.removeEventListener('error', handleError);
      };
    }
  }, [volume, isMuted]);

  // Handle play/pause
  useEffect(() => {
    if (!audioRef.current) return;
    
    const audio = audioRef.current;
    
    if (isPlaying && isUserInteracted) {
      setIsLoading(true);
      
      // Force reload the audio source
      audio.load();
      
      // Add a small delay to ensure the audio is ready
      setTimeout(() => {
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsLoading(false);
              console.log("Audio started playing successfully");
            })
            .catch((error) => {
              console.error("Play error:", error);
              setIsLoading(false);
              
              // Browser might block autoplay, try user interaction approach
              if (error.name === 'NotAllowedError') {
                console.log("Autoplay blocked by browser");
                setIsPlaying(false);
                setIsUserInteracted(false);
              } else {
                // Try alternative approach
                setTimeout(() => {
                  audio.load();
                  const retryPromise = audio.play();
                  if (retryPromise !== undefined) {
                    retryPromise.catch(e => {
                      console.error("Retry failed:", e);
                      setIsPlaying(false);
                    });
                  }
                }, 1000);
              }
            });
        }
      }, 200);
    } else if (!isPlaying) {
      audio.pause();
      setIsLoading(false);
    }
  }, [isPlaying, isUserInteracted]);

  // Timer for live stream
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlayPause = () => {
    setIsUserInteracted(true);
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    
    if (newVolume > 0) {
      setIsMuted(false);
    }
    
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
      audioRef.current.muted = newVolume === 0;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black via-black/95 to-black/90 backdrop-blur-sm border-t border-yellow-500/30">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Currently Playing Info */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Radio 
                  className="h-8 w-8 text-yellow-500 animate-pulse"
                  style={{
                    filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.5))'
                  }}
                />
                {isPlaying && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                )}
              </div>
              
              <div className="hidden sm:block">
                <div className="flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                    CANLI
                  </span>
                  <span className="text-yellow-400 text-sm font-medium">{currentTrack.program}</span>
                </div>
                <div className="text-yellow-300 text-xs">Sunucu: {currentTrack.host}</div>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-yellow-400 font-medium truncate text-sm sm:text-base">
                {currentTrack.title}
              </div>
              <div className="text-yellow-300 text-xs sm:text-sm truncate">
                {currentTrack.artist}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2 sm:space-x-4 mx-2 sm:mx-8">
            <button
              onClick={togglePlayPause}
              disabled={isLoading}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black p-2 sm:p-3 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 sm:h-6 sm:w-6 animate-spin" />
              ) : isPlaying ? (
                <Pause className="h-4 w-4 sm:h-6 sm:w-6" />
              ) : (
                <Play className="h-4 w-4 sm:h-6 sm:w-6" />
              )}
            </button>

            <div className="hidden sm:flex items-center space-x-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full transition-colors ${
                  isLiked ? 'text-yellow-500' : 'text-yellow-300 hover:text-yellow-400'
                }`}
              >
                <Heart className={`h-4 w-4 sm:h-5 sm:w-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>

              <button className="p-2 text-yellow-300 hover:text-yellow-400 transition-colors">
                <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* Volume and Time */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-1 justify-end">
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className="p-2 text-yellow-300 hover:text-yellow-400 transition-colors"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="h-4 w-4 lg:h-5 lg:w-5" />
                ) : (
                  <Volume2 className="h-4 w-4 lg:h-5 lg:w-5" />
                )}
              </button>

              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-16 lg:w-20 accent-yellow-500"
              />
            </div>

            <div className="text-yellow-400 text-xs sm:text-sm font-mono">
              {formatTime(currentTime)}
            </div>
          </div>
        </div>
      </div>

      {/* Audio Player Element */}
      <audio 
        ref={audioRef} 
        preload="metadata"
        crossOrigin="anonymous"
      >
        <source src="http://radyo.yayini.net:8012/stream" type="audio/mpeg" />
        <source src="https://radyo.yayini.net:8012/stream" type="audio/mpeg" />
        <source src="http://radyo.yayini.net:8012/" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
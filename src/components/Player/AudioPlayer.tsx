import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart, Share2 } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Simulate current playing info
  const currentTrack = {
    title: 'Yalnızlık Senfonisi',
    artist: 'Sezen Aksu',
    program: 'Sabah Kahvesi',
    host: 'Ayşe Demir'
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-t border-yellow-500/30">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Currently Playing Info */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <img 
                src="/Radyoduman_Logo.png" 
                alt="Radyo Duman Logo" 
                className="h-8 w-auto animate-pulse"
                style={{
                  filter: 'drop-shadow(0 0 5px rgba(255, 215, 0, 0.5))'
                }}
              />
              <div className="hidden sm:block">
                <div className="flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-2 py-1 rounded text-xs font-bold">CANLI</span>
                  <span className="text-yellow-400 text-sm font-medium">{currentTrack.program}</span>
                </div>
                <div className="text-yellow-300 text-xs">Sunucu: {currentTrack.host}</div>
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="text-yellow-400 font-medium truncate text-sm sm:text-base">{currentTrack.title}</div>
              <div className="text-yellow-300 text-xs sm:text-sm truncate">{currentTrack.artist}</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-2 sm:space-x-4 mx-2 sm:mx-8">
            <button
              onClick={togglePlayPause}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black p-2 sm:p-3 rounded-full transition-all duration-300"
            >
              {isPlaying ? <Pause className="h-4 w-4 sm:h-6 sm:w-6" /> : <Play className="h-4 w-4 sm:h-6 sm:w-6" />}
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
                {isMuted || volume === 0 ? <VolumeX className="h-4 w-4 lg:h-5 lg:w-5" /> : <Volume2 className="h-4 w-4 lg:h-5 lg:w-5" />}
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
    </div>
  );
};

export default AudioPlayer;
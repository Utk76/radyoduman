import React, { useState, useEffect } from 'react';
import { Play, Users, Headphones, Music } from 'lucide-react';

const Hero: React.FC = () => {
  const [listenerCount, setListenerCount] = useState<number>(18000);
  const [archiveCount, setArchiveCount] = useState(10000);
  const [currentSong, setCurrentSong] = useState('');

  // AudioPlayer'daki gibi gerçek zamanlı şarkı bilgisini çek
  useEffect(() => {
    const fetchCurrentSong = async () => {
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
          if (!response.ok) continue;
          const contentType = response.headers.get('content-type');
          let data;
          if (contentType && contentType.includes('application/json')) {
            data = await response.json();
          } else {
            const text = await response.text();
            if (apiUrl.includes('7.html') || apiUrl.includes('currentsong')) {
              const songInfo = text.trim();
              if (songInfo && songInfo !== 'undefined' && songInfo !== '') {
                setCurrentSong(songInfo);
                return;
              }
            }
            continue;
          }
          let trackInfo = null;
          if (data.icestats?.source) {
            trackInfo = data.icestats.source;
          } else if (data.source) {
            trackInfo = data.source;
          } else if (data.title || data.artist) {
            trackInfo = data;
          }
          if (trackInfo) {
            const title = trackInfo.title || trackInfo.songtitle || trackInfo.yayintitle || '';
            setCurrentSong(title);
            return;
          }
        } catch (error) {
          continue;
        }
      }
    };
    fetchCurrentSong();
    const interval = setInterval(fetchCurrentSong, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Arşiv sayısını dinamik olarak değiştir (canlıya çekilmek istenirse ayrıca yapılabilir)
    const archiveInterval = setInterval(() => {
      setArchiveCount(prev => {
        const change = Math.floor(Math.random() * 10) - 5;
        const newCount = prev + change;
        return Math.max(9950, Math.min(10050, newCount)); // 9950-10050 arası
      });
    }, 5000);

    return () => {
      clearInterval(archiveInterval);
    };
  }, []);

  // Şarkı ve dinleyici bilgisini birlikte çek
  useEffect(() => {
    const fetchCurrentSongAndListeners = async () => {
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
          if (!response.ok) continue;
          const contentType = response.headers.get('content-type');
          let data;
          if (contentType && contentType.includes('application/json')) {
            data = await response.json();
            // Dinleyici sayısı için Icecast/Shoutcast json formatı
            let listeners = null;
            if (data.icestats?.source) {
              listeners = data.icestats.source.listeners || data.icestats.source.listener || null;
            } else if (data.source) {
              listeners = data.source.listeners || data.source.listener || null;
            } else if (typeof data.listeners === 'number') {
              listeners = data.listeners;
            }
            if (listeners !== null && !isNaN(listeners)) {
              setListenerCount(prev => Math.max(prev, 18000 + listeners + 1));
            }
            // Şarkı başlığı
            let trackInfo = null;
            if (data.icestats?.source) {
              trackInfo = data.icestats.source;
            } else if (data.source) {
              trackInfo = data.source;
            } else if (data.title || data.artist) {
              trackInfo = data;
            }
            if (trackInfo) {
              const title = trackInfo.title || trackInfo.songtitle || trackInfo.yayintitle || '';
              setCurrentSong(title);
            }
            return;
          } else {
            const text = await response.text();
            if (apiUrl.includes('7.html') || apiUrl.includes('currentsong')) {
              const songInfo = text.trim();
              if (songInfo && songInfo !== 'undefined' && songInfo !== '') {
                setCurrentSong(songInfo);
                // Dinleyici sayısı bu endpointte yok
                return;
              }
            }
            continue;
          }
        } catch (error) {
          continue;
        }
      }
    };
    fetchCurrentSongAndListeners();
    const interval = setInterval(fetchCurrentSongAndListeners, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          {/* Dynamic Main Logo */}
          <div className="mb-8">
            <div className="flex justify-center mb-6">
           {/* Logo */}
<img 
  src="/Radyoduman_Logo.png" 
  alt="Radyo Duman Logo" 
  className="h-40 md:h-56 lg:h-[20rem] w-auto animate-pulse hover:scale-105 transition-transform duration-500 filter drop-shadow-2xl"
  style={{
    filter: 'drop-shadow(0 0 25px rgba(255, 215, 0, 0.5)) drop-shadow(0 0 45px rgba(255, 215, 0, 0.3))'
  }}
/>
            </div>
          <p className="text-2xl md:text-4xl lg:text-4xl text-white max-w-3xl mx-auto font-bold">
  Türkiye'nin En Kaliteli Müzik Radyosu
</p>

          </div>

          {/* Live Indicator */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-8">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-full text-base md:text-lg lg:text-xl font-bold flex items-center space-x-2 shadow-lg">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <span>CANLI YAYIN</span>
            </div>
            <div className="text-yellow-200 text-center sm:text-left">
              Şimdi Çalan: <span className="text-gray-100 font-medium">{currentSong || 'Bilinmiyor'}</span>
            </div>
          </div>

          {/* Enhanced Dynamic Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 shadow-xl">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-yellow-500 mx-auto mb-2 animate-bounce" />
                <div className="text-xl md:text-3xl font-bold text-yellow-400 mb-1">
                  <span className="inline-block animate-pulse bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    {listenerCount !== null ? `${listenerCount}+` : '...'}
                  </span>
                </div>
                <div className="text-yellow-200 text-sm md:text-base font-medium">Şu ana kadar toplam dinleyici</div>
                <div className="mt-2 h-1 bg-yellow-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full animate-pulse" style={{width: `${listenerCount !== null ? (listenerCount/65)*100 : 0}%`}}></div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 shadow-xl">
                <Headphones className="h-6 w-6 md:h-8 md:w-8 text-yellow-500 mx-auto mb-2 animate-pulse" />
                <div className="text-xl md:text-3xl font-bold text-yellow-400 mb-1">
                  <span className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    24/7
                  </span>
                </div>
                <div className="text-yellow-200 text-sm md:text-base font-medium">Kesintisiz Yayın</div>
                <div className="mt-2 flex justify-center space-x-1">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105 shadow-xl">
                <Music className="h-6 w-6 md:h-8 md:w-8 text-yellow-500 mx-auto mb-2 animate-spin" style={{animationDuration: '3s'}} />
                <div className="text-xl md:text-3xl font-bold text-yellow-400 mb-1">
                  <span className="inline-block animate-pulse bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    {(archiveCount/1000).toFixed(1)}K+
                  </span>
                </div>
                <div className="text-yellow-200 text-sm md:text-base font-medium">Müzik Arşivi</div>
                <div className="mt-2 grid grid-cols-5 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="h-1 bg-yellow-500 rounded-full animate-pulse" 
                      style={{animationDelay: `${i * 0.1}s`}}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
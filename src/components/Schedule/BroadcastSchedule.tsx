import React from 'react';
import { Clock, Radio, Users } from 'lucide-react';

const BroadcastSchedule: React.FC = () => {
  const schedule = [
    { time: '06:00 - 20:00', program: 'Oto Yayın', host: 'Otomatik Yayın', type: 'auto', days: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'] },
    { time: '20:00 - 22:00', program: 'Fatih Yayında', host: 'Fatih', type: 'live', days: ['Pazartesi', 'Salı', 'Cuma'] },
    { time: '22:00 - 24:00', program: 'Türkülere Yolcoluk', host: 'Cihan Güman', type: 'auto', days: ['Pazartesi'] },
    { time: '12:00 - 14:00', program: 'Oto Yayın', host: 'Otomatik Yayın', type: 'live', days: ['Salı', 'Perşembe'] },
    { time: '14:00 - 16:00', program: 'Öğleden Sonra', host: 'Müzik Arşivi', type: 'auto', days: ['Çarşamba', 'Perşembe'] },
    { time: '16:00 - 18:00', program: 'Oto Yayın', host: 'Otomatik Yayın', type: 'live', days: ['Çarşamba'] },
    { time: '18:00 - 20:00', program: 'Oto Yayın', host: 'Otomatik Yayın', type: 'live', days: ['Çarşamba', 'Perşembe', 'Cuma'] },
    { time: '20:00 - 22:00', program: 'Kum Saati', host: 'Meryem Özbay', type: 'live', days: ['Çarşamba', 'Perşembe'] },
    { time: '20:00 - 22:00', program: 'Oto Yayın', host: 'Müzik Arşivi', type: 'auto', days: ['Cumartesi'] },
    { time: '22:00 - 02:00', program: 'Oto Yayın', host: 'Can Yılmaz', type: 'live', days: ['Perşembe', 'Cuma'] },
    { time: '02:00 - 06:00', program: 'Oto Yayın', host: 'Otomatik Yayın', type: 'auto', days: ['Pazar'] }
  ];

  const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
  const todayIndex = new Date().getDay();
  const currentHour = new Date().getHours();

  // Haftada pazar = 0 olduğu için bizim dizimizde 6, diğer günleri 1 eksik alıyoruz
  const currentDayName = todayIndex === 0 ? 'Pazar' : days[todayIndex - 1];

  // Şu anki yayını bul
  const getCurrentProgram = () => {
    return schedule.find(slot => {
      if (!slot.days.includes(currentDayName)) return false;

      const [startStr, endStr] = slot.time.split(' - ');
      const [startHour] = startStr.split(':').map(Number);
      const [endHour] = endStr.split(':').map(Number);

      if (endHour < startHour) { // Gece programı (ör. 22:00 - 02:00)
        return currentHour >= startHour || currentHour < endHour;
      }
      return currentHour >= startHour && currentHour < endHour;
    });
  };

  const currentProgram = getCurrentProgram();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            YAYIN AKIŞI
          </h1>
          <p className="text-gray-400 text-lg">
            Radyo Duman günlük yayın programı
          </p>
        </div>

        {/* Şu anki program */}
        {currentProgram && (
          <div className="bg-red-500/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-red-500/30">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Radio className="h-6 w-6 text-red-500 animate-pulse" />
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  ŞİMDİ YAYIN
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{currentProgram.program}</h2>
              <p className="text-gray-300">
                {currentProgram.host} • {currentProgram.time}
              </p>
            </div>
          </div>
        )}

        {/* Haftalık program tablosu */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Haftalık Program</h2>

            {/* Gün başlıkları */}
            <div className="grid grid-cols-8 gap-2 mb-4">
              <div className="text-center text-gray-400 font-medium">Saat</div>
              {days.map((day, index) => (
                <div
                  key={day}
                  className={`text-center text-sm font-medium p-2 rounded ${
                    index === (todayIndex === 0 ? 6 : todayIndex - 1)
                      ? 'bg-red-500 text-white'
                      : 'text-gray-400'
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Program saatleri ve gün bazlı gösterim */}
            <div className="space-y-2">
              {schedule.map((slot, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-8 gap-2 p-3 rounded-lg ${
                    slot === currentProgram
                      ? 'bg-red-500/20 border border-red-500/30'
                      : 'bg-gray-700/50 hover:bg-gray-600/50'
                  } transition-colors`}
                >
                  <div className="text-center text-sm text-gray-400 font-mono">{slot.time}</div>
                  {days.map((day) => (
                    <div key={day} className="text-center p-2">
                      {slot.days.includes(day) ? (
                        <>
                          <div className={`text-sm font-medium ${slot.type === 'live' ? 'text-white' : 'text-gray-400'}`}>
                            {slot.program}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{slot.host}</div>
                        </>
                      ) : (
                        // Yayın olmayan günlerde otomatik yayın gösteriliyor:
                        <div className="text-sm font-medium text-gray-400">
                          Oto Yayın
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Program türleri açıklaması */}
            <div className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Program Türleri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Radio className="h-5 w-5 text-red-500" />
                  <span className="text-white font-medium">Canlı Yayın</span>
                  <span className="text-gray-400">- Sunucu eşliğinde</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-white font-medium">Otomatik Yayın</span>
                  <span className="text-gray-400">- Müzik arşivi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadcastSchedule;

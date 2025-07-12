import React from 'react';
import { Clock, User, Radio } from 'lucide-react';
import { programs } from '../../data/mockData';

const FeaturedPrograms: React.FC = () => {
  // Haftalık program ve şu anki yayını tespit eden fonksiyon (BroadcastSchedule'dan alınan mantık)
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
    { time: '22:00 - 02:00', program: 'Oto Yayın', host: 'Otomatik Yayın', type: 'auto', days: ['Perşembe', 'Cuma'] },
    { time: '02:00 - 06:00', program: 'Oto Yayın', host: 'Otomatik Yayın', type: 'auto', days: ['Pazar'] }
  ];
  const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
  const todayIndex = new Date().getDay();
  const currentHour = new Date().getHours();
  const currentDayName = todayIndex === 0 ? 'Pazar' : days[todayIndex - 1];
  const getCurrentProgram = () => {
    return schedule.find(slot => {
      if (!slot.days.includes(currentDayName)) return false;
      const [startStr, endStr] = slot.time.split(' - ');
      const [startHour] = startStr.split(':').map(Number);
      const [endHour] = endStr.split(':').map(Number);
      if (endHour < startHour) {
        return currentHour >= startHour || currentHour < endHour;
      }
      return currentHour >= startHour && currentHour < endHour;
    });
  };
  const currentProgram = getCurrentProgram();

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <Radio className="inline h-8 w-8 text-red-500 mr-2" />
            ÖZEL PROGRAMLAR
          </h2>
          <p className="text-gray-400 text-lg">En sevilen program ve sunucularımız</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group border-2 border-yellow-500 w-full max-w-xs mx-auto min-h-[340px] sm:min-h-[400px] md:min-h-[480px] flex flex-col"
            >
              <div className="relative overflow-hidden rounded-t-2xl bg-black flex items-center justify-center h-48 sm:h-56 md:h-64">
                <img
                  src={program.image}
                  alt={program.title}
                  className="max-h-full max-w-full object-contain border-b-2 border-yellow-500"
                />
                {currentProgram && currentProgram.program === program.title && (
                  <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
                    <span className={`flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold shadow-lg border border-yellow-300 ${currentProgram.type === 'live' ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-yellow-300'}`}>
                      {currentProgram.type === 'live' ? (
                        <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse mr-0.5"></span>
                      ) : (
                        <span className="w-1 h-1 bg-yellow-400 rounded-full mr-0.5"></span>
                      )}
                      {currentProgram.type === 'live' ? 'CANLI' : 'OTOMATİK'}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors">
                    <Radio className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              <div className="px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 flex-1 flex flex-col justify-end gap-1">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1">{program.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-1 line-clamp-2">{program.description}</p>
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center space-x-1 text-gray-400 text-xs sm:text-sm">
                    <User className="h-4 w-4" />
                    <span>{program.host}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400 text-xs sm:text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{program.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
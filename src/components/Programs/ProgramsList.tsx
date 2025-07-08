import React from 'react';
import { Clock, User, Radio } from 'lucide-react';
import { programs as allPrograms } from '../../data/mockData';

const ProgramsList: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PROGRAMCILAR
          </h1>
          <p className="text-gray-400 text-lg">
            Radyo Duman'ın deneyimli sunucuları ve programları
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPrograms.filter(p => p.title !== 'Oto Yayın').slice(0, 3).map((program) => (
            <div
              key={program.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 transition-colors">
                    <Radio className="h-8 w-8" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                <p className="text-gray-400 mb-4">{program.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <User className="h-5 w-5 text-red-500" />
                    <span className="font-medium">{program.host}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Clock className="h-5 w-5 text-red-500" />
                    <span>{program.time}</span>
                  </div>
                </div>
                
                <button className="mt-6 w-full bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold border border-yellow-300 shadow-lg transition-colors">
                  Program Detayları
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsList;
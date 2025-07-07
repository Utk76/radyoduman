import React from 'react';
import { Clock, User, Radio } from 'lucide-react';
import { programs } from '../../data/mockData';

const FeaturedPrograms: React.FC = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative ">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                {program.isLive && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>CANLI</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors">
                    <Radio className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{program.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <User className="h-4 w-4" />
                    <span>{program.host}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
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
import React from 'react';
import { TrendingUp, Play } from 'lucide-react';
import { topTracks as mockTracks } from '../../data/mockData';

const TopTracks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <TrendingUp className="inline h-8 w-8 text-red-500 mr-2" />
            TOP 10 ÇALAN ŞARKILAR
          </h2>
          <p className="text-gray-400 text-lg">Bu hafta en çok dinlenen şarkılar</p>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8">
          <div className="space-y-4">
            {mockTracks.map((track, index) => (
              <div
                key={track.id}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700/50 transition-colors group"
              >
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    index < 3 ? 'bg-red-500' : 'bg-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium truncate">{track.title}</div>
                  <div className="text-gray-400 text-sm truncate">{track.artist}</div>
                </div>
                <button
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-red-500 hover:text-red-400"
                  onClick={() => window.open(track.listenUrl, '_blank')}
                  aria-label="Dinle"
                  disabled={!track.listenUrl}
                >
                  <Play className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopTracks;
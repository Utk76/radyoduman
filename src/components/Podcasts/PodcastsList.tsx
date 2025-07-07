import React from 'react';
import { Play, Clock, Calendar, Download } from 'lucide-react';
import { podcasts } from '../../data/mockData';

const PodcastsList: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Podcast başlığı + liste tamamen gizlendi */}
        {false && (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                PODCASTLER
              </h1>
              <p className="text-gray-400 text-lg">
                Özel bölümler ve arşiv yayınları
              </p>
            </div>

            <div className="space-y-8">
              {podcasts.map((podcast) => (
                <div
                  key={podcast.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={podcast.image}
                        alt={podcast.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>

                    <div className="md:w-2/3 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">{podcast.title}</h3>
                          <p className="text-gray-400 mb-4">{podcast.description}</p>
                        </div>

                        <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors group-hover:scale-110">
                          <Play className="h-6 w-6" />
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-6 mb-6">
                        <div className="flex items-center space-x-2 text-gray-300">
                          <Clock className="h-5 w-5 text-red-500" />
                          <span>{podcast.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                          <Calendar className="h-5 w-5 text-red-500" />
                          <span>{formatDate(podcast.publishDate)}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
                          <Play className="h-5 w-5" />
                          <span>Dinle</span>
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
                          <Download className="h-5 w-5" />
                          <span>İndir</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PodcastsList;

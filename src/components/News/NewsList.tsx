import React from 'react';
import { Calendar, User, Eye } from 'lucide-react';
import { news } from '../../data/mockData';

const NewsList: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            REKLAMLAR
          </h1>
          <p className="text-yellow-200 text-lg">
            Radyo Duman reklam ve sponsorluk fırsatları
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <article
              key={article.id}
              className="bg-yellow-500/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group border border-yellow-500/20"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black p-3 rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300">
                    <Eye className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-yellow-200 mb-4 line-clamp-3">{article.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-yellow-300 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(article.publishDate)}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-6 py-3 rounded-lg font-bold transition-all duration-300">
                  Devamını Oku
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
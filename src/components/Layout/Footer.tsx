import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onPageChange?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const handleNavigation = (page: string) => {
    if (onPageChange) {
      onPageChange(page);
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white pt-12 pb-24 border-t border-yellow-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/Radyoduman_Logo.png" 
                alt="Radyo Duman Logo" 
                className="h-16 w-auto hover:scale-105 transition-transform duration-300"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.3))'
                }}
              />
            </div>
            <p className="text-yellow-200">
              Türkiye'nin en kaliteli müzik radyosu. 7/24 kesintisiz yayın ile sizlerleyiz.
            </p>
            
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('home')}
                  className="text-white hover:text-yellow-400 transition-colors text-left"
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('programs')}
                  className="text-white hover:text-yellow-400 transition-colors text-left"
                >
                  Programlar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('podcasts')}
                  className="text-white hover:text-yellow-400 transition-colors text-left"
                >
                  Podcastler
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('news')}
                  className="text-white hover:text-yellow-400 transition-colors text-left"
                >
                  Reklamlar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="text-white hover:text-yellow-400 transition-colors text-left"
                >
                  İstek Gönder
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-400">İletişim</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-500" />
                <span className="text-white">0212 123 45 67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-500" />
                <span className="text-white">info@radyoduman.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-500" />
                <span className="text-white">İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-yellow-500/30 text-center text-yellow-300">
          <p>&copy; 2024 RadyoDuman. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

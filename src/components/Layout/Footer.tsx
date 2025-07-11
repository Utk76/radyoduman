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
              <span
                className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,215,0,0.5)]"
                style={{ letterSpacing: '0.05em', textShadow: '0 2px 8px rgba(255,215,0,0.5)' }}
              >
                RADYO DUMAN
              </span>
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
              <a 
                href="https://wa.me/905422984175" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-yellow-500" />
                <span>0542 298 4175</span>
              </a>
              <a 
                href="mailto:info.radyoduman@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-yellow-500" />
                <span>info.radyoduman@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-500" />
                <span className="text-white">İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-yellow-500/30 text-center text-yellow-300">
          <p>&copy;  2014 RadyoDuman. Tüm hakları saklıdır.  
              Web tasarımı ve geliştirme: Efc Dijital Reklam Ajansı.
</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

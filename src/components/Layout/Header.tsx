import React, { useState } from 'react';
import { Menu, X, Play, Search } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'ANA SAYFA' },
    { id: 'programs', label: 'PROGRAMCILAR' },
    { id: 'schedule', label: 'YAYIN AKIŞI' },
    { id: 'news', label: 'REKLAMLAR' },
    { id: 'contact', label: 'İSTEK GÖNDER' }
  ];

  const handleLiveRadio = () => {
    const radioStreamUrl = "https://stream.radyoduman.com/live";
    window.open(radioStreamUrl, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-yellow-500/30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Text */}
          <div className="flex items-center">
            <button 
              onClick={() => onPageChange('home')}
              className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg"
            >
              RADYO DUMAN
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 xl:space-x-10">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`text-sm md:text-base font-semibold transition-colors hover:text-yellow-400 ${
                  currentPage === item.id ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <button className="p-2 text-gray-300 hover:text-yellow-400 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-300 hover:text-yellow-400 transition-colors">
              <Play className="h-5 w-5" />
            </button>
            <button 
              onClick={handleLiveRadio}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-5 py-2 text-sm md:text-base font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:scale-110 rounded-full"
            >
              CANLI DİNLE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-yellow-400 transition-colors"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-yellow-500/30">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-base font-semibold transition-colors hover:text-yellow-400 ${
                    currentPage === item.id ? 'text-yellow-400' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-yellow-500/30">
                <button 
                  onClick={() => {
                    handleLiveRadio();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-5 py-3 rounded-full text-base font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play className="h-5 w-5" />
                  <span>CANLI DİNLE</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

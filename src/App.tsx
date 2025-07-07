import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import AudioPlayer from './components/Player/AudioPlayer';
import Hero from './components/Home/Hero';
import TopTracks from './components/Home/TopTracks';
import FeaturedPrograms from './components/Home/FeaturedPrograms';
import ProgramsList from './components/Programs/ProgramsList';
import PodcastsList from './components/Podcasts/PodcastsList';
import BroadcastSchedule from './components/Schedule/BroadcastSchedule';
import NewsList from './components/News/NewsList';
import ContactForm from './components/Contact/ContactForm';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <TopTracks />
            <FeaturedPrograms />
          </>
        );
      case 'programs':
        return <ProgramsList />;
      case 'podcasts':
        return <PodcastsList />;
      case 'schedule':
        return <BroadcastSchedule />;
      case 'news':
        return <NewsList />;
      case 'contact':
        return <ContactForm />;
      default:
        return (
          <>
            <Hero />
            <TopTracks />
            <FeaturedPrograms />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onPageChange={setCurrentPage} />
      <AudioPlayer />
    </div>
  );
}

export default App;
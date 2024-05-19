import React from 'react';
import Header from './components/Header';
import FeaturedStory from './components/FeaturedStory';
import Footer from './components/Footer';
import './App.css';
import Marquee from './components/Marquee';
import LatestArticles from './components/LatestArticles';
import BookCards from './components/BookCards';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
       
        <Marquee />
        <FeaturedStory />
        <LatestArticles />
        <BookCards/>
      </main>
      <Footer />
    </div>
  );
}

export default App;

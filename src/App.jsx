import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import NftSlider from './components/NftSlider.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <div className="flex-grow">
        {/* Your main content here */}
        <NftSlider/>
      </div>
      <Footer />
    </div>
  );
}

export default App;

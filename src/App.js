import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Welcome from './components/welcome';
import Project from './components/project';
import Flying from './components/flying';
import Footer from './components/footer';

function App() {

  return (
    
    <div>
     <Navbar/>
     <Hero />
     <Welcome />
     <Project />
     <Flying />
     <Footer />
    </div>
  );
}

export default App;

import React from 'react'
import Home from './component/Home'
import Contact from './component/Contact';
import Work from './component/Work';
import Footer from './component/Footer';
import About from './component/About';
import './App.css';
import Testimonial from './component/Testimonial';

function App() {
  return (
    <div className='app'>
<Home/>
<About/>
<Work/>
<Contact/>
<Testimonial/>
<Footer/>
    </div>
  );
};

export default App

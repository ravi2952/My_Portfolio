import React from 'react';
import Navbar from '../components/Navbar';
import Overview from '../components/Overview';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
        <Navbar /> 
        <Overview />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

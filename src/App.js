import React from 'react';
import './App.css';
import ResponsiveAppBar from './Components/navbar';
import ContactForm from './Components/contact';
import ProjectSection from './Components/project';

function App() {
  const scrollToSection = (contact) => {
    const section = document.getElementById(contact);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className="App">
        < ResponsiveAppBar scrollToSection={scrollToSection} />
        <div><ProjectSection /></div>
        <div id="contact"><ContactForm /></div>
        
      </div>
    </>
  );
}

export default App;

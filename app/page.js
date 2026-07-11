"use client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
    
    if (localStorage.language) {
      setLanguage(localStorage.language);
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  useEffect(() => {
    localStorage.language = language;
  }, [language])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} language={language} setLanguage={setLanguage} />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} language={language} />
      <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} language={language} />
      <Services isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} language={language} />
      <Work isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} language={language} />
      <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} language={language} />
      <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} language={language} />
    </>
  );
}

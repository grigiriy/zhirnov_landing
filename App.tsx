
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Marquee from './components/Marquee.tsx';
import Services from './components/Services.tsx';
import Cases from './components/Cases.tsx';
import ContactForm from './components/ContactForm.tsx';

const App: React.FC = () => {
  const baseUrl = "https://cq77457.tmweb.ru/ZHIRNOV/assets/img";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Cases />
        <ContactForm />
      </main>
      
      <footer className="bg-[#1a1a1a] text-white overflow-hidden pt-12 md:pt-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          
          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 md:mb-16">
            
            {/* Logo & Main Nav */}
            <div className="flex items-center justify-between md:justify-start md:gap-24 mb-10 md:mb-0">
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="flex items-center hover:opacity-80 transition-opacity">
                <img src={`${baseUrl}/icons/zhirnov_logo_w.svg`} alt="ZHIRNOV" className="h-6 md:h-8" />
              </a>
              <div className="flex gap-6 md:gap-12 text-[17px] md:text-[18px] font-bold">
                <a href="#services" className="hover:text-gray-400 transition-colors">Услуги</a>
                <a href="#cases" className="hover:text-gray-400 transition-colors">Кейсы</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-[17px] md:text-[18px] font-bold text-center md:text-right">
              <a href="https://t.me/zhirnov_studio" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Телеграм</a>
              <a href="https://vk.com/zhirnov_studio" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Вконтакте</a>
              <a href="mailto:hello@zhirnov.studio" className="hover:text-gray-400 transition-colors tracking-tight">hello@zhirnov.studio</a>
            </div>
          </div>

          {/* Divider */}
          <div className="relative h-[1px] bg-white/10 w-full mb-12 md:mb-10">
            {/* Mobile Scroll-to-Top Button (Centered on line) */}
            <button 
              onClick={scrollToTop}
              className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-[#2a2a2a] border border-white/5 flex items-center justify-center hover:bg-[#333] transition-all active:scale-90 group z-10"
            >
              <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 md:pb-16 text-center md:text-left">
            
            {/* Policy Link */}
            <div className="order-2 md:order-1 mt-20 md:mt-0">
              <a href="#" className="text-[15px] md:text-[18px] font-bold border-b border-white hover:text-gray-400 hover:border-gray-400 transition-all pb-0.5">
                Политика обработки данных
              </a>
            </div>

            {/* Copyright */}
            <div className="order-3 md:order-2 mt-4 md:mt-0 text-[15px] md:text-[18px] font-bold text-gray-500">
              © 2026, ZHIRNOV STUDIO
            </div>

            {/* Desktop Scroll-to-Top Button */}
            <div className="hidden md:flex order-3">
              <button 
                onClick={scrollToTop}
                className="w-16 h-16 rounded-2xl bg-[#2a2a2a] border border-white/5 flex items-center justify-center hover:bg-[#333] transition-all active:scale-95 group"
              >
                <svg className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

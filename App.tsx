
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
      
      <footer className="bg-[#1a1a1a] text-white overflow-hidden font-['Golos_Text']">
        <div className="max-w-[1920px] mx-auto px-6 md:px-10">
          
          {/* Mobile Footer Version (visible below md) */}
          <div className="md:hidden flex flex-col pt-8 pb-10">
            {/* Mobile Top Row */}
            <div className="flex items-center justify-between mb-6">
              <img src={`${baseUrl}/icons/zhirnov_logo_w.svg`} alt="ZHIRNOV" className="h-6" />
              <div className="flex gap-4">
                <a href="#services" className="text-white text-lg font-normal leading-6">Услуги</a>
                <a href="#cases" className="text-white text-lg font-normal leading-6">Кейсы</a>
              </div>
            </div>

            <div className="h-[1px] bg-white/10 w-full mb-8"></div>

            {/* Mobile Socials Block */}
            <div className="flex flex-col items-center gap-6 mb-8">
              <a href="https://t.me/zhirnov_studio" target="_blank" className="text-white text-lg font-normal leading-6">Телеграм</a>
              <a href="https://vk.com/zhirnov_studio" target="_blank" className="text-white text-lg font-normal leading-6">Вконтакте</a>
              <a href="mailto:hello@zhirnov.studio" className="text-white text-lg font-normal leading-6">hello@zhirnov.studio</a>
            </div>

            {/* Mobile Arrow Section with horizontal lines */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] bg-white/10 flex-1"></div>
              <button 
                onClick={scrollToTop}
                className="w-14 h-14 rounded-2xl bg-[#2a2a2a] flex items-center justify-center"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
              <div className="h-[1px] bg-white/10 flex-1"></div>
            </div>

            {/* Mobile Bottom Links */}
            <div className="flex flex-col items-center gap-4">
              <a href="#" className="text-white text-lg font-normal underline leading-6">Политика обработки данных</a>
              <div className="text-white/40 text-lg font-normal leading-6">© 2026, ZHIRNOV STUDIO</div>
            </div>
          </div>

          {/* Desktop Footer Version (visible above md) */}
          <div className="hidden md:block">
            {/* Desktop Row 1: Logo, Nav, Socials */}
            <div className="py-6 border-b border-white/10 grid grid-cols-3 items-center">
              {/* Logo Col (Left) */}
              <div className="flex justify-start">
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
                  <img src={`${baseUrl}/icons/zhirnov_logo_w.svg`} alt="ZHIRNOV" className="h-8" />
                </a>
              </div>

              {/* Nav Col (Center) */}
              <div className="flex justify-center gap-12">
                <a href="#services" className="text-white text-lg font-normal leading-6 hover:opacity-70 transition-opacity">Услуги</a>
                <a href="#cases" className="text-white text-lg font-normal leading-6 hover:opacity-70 transition-opacity">Кейсы</a>
              </div>

              {/* Socials Col (Right) */}
              <div className="flex justify-end gap-10">
                <a href="https://t.me/zhirnov_studio" target="_blank" className="text-white text-lg font-normal leading-6 hover:opacity-70 transition-opacity">Телеграм</a>
                <a href="https://vk.com/zhirnov_studio" target="_blank" className="text-white text-lg font-normal leading-6 hover:opacity-70 transition-opacity">Вконтакте</a>
                <a href="mailto:hello@zhirnov.studio" className="text-white text-lg font-normal leading-6 hover:opacity-70 transition-opacity">hello@zhirnov.studio</a>
              </div>
            </div>

            {/* Desktop Row 2: Policy, Copyright, Arrow */}
            <div className="py-6 grid grid-cols-3 items-center">
              {/* Policy (Left) */}
              <div className="flex justify-start">
                <a href="#" className="text-white text-lg font-normal underline leading-6 hover:opacity-70 transition-opacity">
                  Политика обработки данных
                </a>
              </div>

              {/* Copyright (Center) */}
              <div className="flex justify-center">
                <div className="text-white/50 text-lg font-normal leading-6">
                  © 2026, ZHIRNOV STUDIO
                </div>
              </div>

              {/* Scroll Top (Right) */}
              <div className="flex justify-end">
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

        </div>
      </footer>
    </div>
  );
};

export default App;

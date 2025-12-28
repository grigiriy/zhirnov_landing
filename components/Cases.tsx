import React, { useState } from 'react';

type Category = 'Все кейсы' | 'Брендинг' | 'Сайты' | 'Веб-сервисы' | 'Приложения';

interface CaseItem {
  id: number;
  title: string;
  category: Category;
  color: string;
  badge?: 'telegram' | 'vc';
  image: string;
}

interface CasesProps {
  onCaseClick: () => void;
}

const CASE_DATA: CaseItem[] = [
  {
    id: 1,
    title: "Приложение для электрозарядок и гос. портал Ростелеком — анонс сервиса на Всероссийском форуме",
    category: 'Приложения',
    color: '#2a3441',
    badge: 'telegram',
    image: 'rostelecom.png'
  },
  {
    id: 2,
    title: "Брендинг и редизайн сайта для финансовой группы компаний Кредитор",
    category: 'Брендинг',
    color: '#108a65',
    badge: 'vc',
    image: 'creditor_1.png'
  },
  {
    id: 3,
    title: "Проектирование и разработка личного кабинета для заемщиков и инвесторов для группы компаний Кредитор",
    category: 'Веб-сервисы',
    color: '#0d634d',
    badge: 'vc',
    image: 'creditor_2.png'
  },
  {
    id: 4,
    title: "ПМЭФ 2025 — Кредитор презентовал личный кабинет на экономическом форуме",
    category: 'Сайты',
    color: '#e5e7eb',
    badge: 'telegram',
    image: 'pmef.png'
  },
  {
    id: 5,
    title: "Редизайн корпоративного сайта Flomni",
    category: 'Сайты',
    color: '#3b82f6',
    image: 'flomni.png'
  },
  {
    id: 6,
    title: "UX-аудит интернет-магазина Zolla и поиск точек роста компании",
    category: 'Веб-сервисы',
    color: '#2d2d2d',
    badge: 'telegram',
    image: 'zolla.png'
  },
  {
    id: 7,
    title: "Дизайн сервиса отчетов руководителей CoMagic",
    category: 'Веб-сервисы',
    color: '#94a3b8',
    image: 'comagic.png'
  },
  {
    id: 8,
    title: "Дизайн диалоговой чат-платформы UIS",
    category: 'Веб-сервисы',
    color: '#cbd5e1',
    image: 'uis.png'
  },
  {
    id: 9,
    title: "Дизайн софтфона — приложение для звонков",
    category: 'Веб-сервисы',
    color: '#cbd5e1',
    image: 'softphone.png'
  }
];

const CaseCard: React.FC<CaseItem & { onClick: () => void }> = ({ title, color, badge, image, onClick }) => {
  const baseUrl = "https://cq77457.tmweb.ru/ZHIRNOV/assets/img";
  return (
    <button onClick={onClick} className="flex flex-col w-full text-left group">
      <div 
        className="relative w-full aspect-[591/332] rounded-[32px] overflow-hidden transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundColor: color }}
      >
        {/* Project Image - Responsive and no hover effects */}
        <img 
          src={`${baseUrl}/cases/${image}`} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover" 
        />

        {/* Badge overlay if present - 20px from bottom and right */}
        {badge && (
          <div className="absolute bottom-5 right-5 w-12 h-12 md:w-16 md:h-16 bg-black rounded-2xl md:rounded-[1.25rem] flex items-center justify-center text-white shadow-xl z-10">
            {badge === 'telegram' ? (
              <img src={`${baseUrl}/icons/telegram.svg`} alt="Telegram" className="w-6 h-6 md:w-8 md:h-8" />
            ) : (
              <img src={`${baseUrl}/icons/vcru.svg`} alt="VC.ru" className="w-8 h-8 md:w-10 md:h-10" />
            )}
          </div>
        )}
      </div>
      
      {/* 8px on mobile (mt-2), 16px on desktop (md:mt-4) */}
      <div className="mt-2 md:mt-4 self-stretch justify-center text-neutral-800 text-lg md:text-2xl font-normal leading-6 md:leading-7 line-clamp-3 tracking-[-0.015em]">
        {title}
      </div>
    </button>
  );
};

const Cases: React.FC<CasesProps> = ({ onCaseClick }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('Все кейсы');
  const categories: Category[] = ['Все кейсы', 'Брендинг', 'Сайты', 'Веб-сервисы', 'Приложения'];

  const filteredCases = activeCategory === 'Все кейсы' 
    ? CASE_DATA 
    : CASE_DATA.filter(c => c.category === activeCategory);

  return (
    <section id="cases" className="pb-14 md:pb-[100px] px-6 md:px-10 max-w-[1920px] mx-auto overflow-hidden">
      <div className="flex items-center gap-6 md:gap-10 mb-6 md:mb-10">
        <div className="h-[1px] bg-zinc-100 flex-1"></div>
        <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.05em] text-zinc-800">Кейсы</h2>
        <div className="h-[1px] bg-zinc-100 flex-1"></div>
      </div>

      {/* Filter Tabs - mb-[44px] */}
      <div className="flex flex-wrap items-center md:justify-center gap-2 mb-4 md:mb-[44px]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 pt-3 pb-3.5 rounded-2xl inline-flex justify-center items-center gap-2 overflow-hidden transition-all duration-300 ${
              activeCategory === cat 
                ? 'bg-emerald-600' 
                : 'bg-zinc-100'
            }`}
          >
            <div className={`justify-center text-lg font-normal leading-6 ${
              activeCategory === cat ? 'text-white' : 'text-neutral-800'
            }`}>
              {cat}
            </div>
          </button>
        ))}
        <button className="px-4 pt-3 pb-3.5 bg-zinc-100 rounded-2xl inline-flex justify-center items-center gap-2 overflow-hidden transition-all">
          <div className="justify-center text-neutral-800 text-lg font-normal leading-6 flex items-center gap-2">
            Ещё
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
      </div>

      {/* Grid: 16px horizontal (gap-x-4), 32px vertical (gap-y-8) on desktop. 24px vertical on mobile (gap-y-6). */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-4 md:gap-y-8 max-w-[1214px] mx-auto">
        {filteredCases.map((item) => (
          <CaseCard key={item.id} {...item} onClick={onCaseClick} />
        ))}
      </div>
    </section>
  );
};

export default Cases;
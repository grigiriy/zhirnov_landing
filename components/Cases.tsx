
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
  }
];

const CaseCard: React.FC<CaseItem> = ({ title, color, badge, image }) => {
  const baseUrl = "https://cq77457.tmweb.ru/ZHIRNOV/assets/img";
  return (
    <div className="group cursor-pointer">
      <div 
        className="relative aspect-[16/10] md:aspect-[1.4/1] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[0.98]"
        style={{ backgroundColor: color }}
      >
        {/* Project Image */}
        <img 
          src={`${baseUrl}/cases/${image}`} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />

        {/* Badge overlay if present */}
        {badge && (
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16 bg-black rounded-2xl md:rounded-[1.25rem] flex items-center justify-center text-white shadow-xl transition-transform duration-500 group-hover:translate-y-[-4px] z-10">
            {badge === 'telegram' ? (
              <img src={`${baseUrl}/icons/telegram.svg`} alt="Telegram" className="w-6 h-6 md:w-8 md:h-8" />
            ) : (
              <img src={`${baseUrl}/icons/vcru.svg`} alt="VC.ru" className="w-8 h-8 md:w-10 md:h-10" />
            )}
          </div>
        )}
      </div>
      <h4 className="text-[20px] md:text-[24px] font-bold tracking-tight text-[#1a1a1a] leading-[1.2] group-hover:text-[#108a65] transition-colors">
        {title}
      </h4>
    </div>
  );
};

const Cases: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Все кейсы');
  const categories: Category[] = ['Все кейсы', 'Брендинг', 'Сайты', 'Веб-сервисы', 'Приложения'];

  const filteredCases = activeCategory === 'Все кейсы' 
    ? CASE_DATA 
    : CASE_DATA.filter(c => c.category === activeCategory);

  return (
    <section id="cases" className="py-12 md:py-24 px-6 md:px-10 max-w-[1440px] mx-auto overflow-hidden">
      {/* Section Heading with lines */}
      <div className="flex items-center gap-6 md:gap-10 mb-12 md:mb-20">
        <div className="h-[1px] bg-gray-200 flex-1"></div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#1a1a1a]">Кейсы</h2>
        <div className="h-[1px] bg-gray-200 flex-1"></div>
      </div>

      {/* Filter Tabs - Centered */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 md:mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3.5 rounded-full text-sm font-bold tracking-tight transition-all duration-300 ${
              activeCategory === cat 
                ? 'bg-[#108a65] text-white shadow-lg shadow-[#108a65]/20' 
                : 'bg-[#f5f5f5] text-[#1a1a1a] hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
        <button className="px-6 py-3.5 rounded-full text-sm font-bold tracking-tight bg-[#f5f5f5] text-[#1a1a1a] hover:bg-gray-200 flex items-center gap-2">
          Ещё
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-24">
        {filteredCases.map((item) => (
          <CaseCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Cases;
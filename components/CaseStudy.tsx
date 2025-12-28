
import React, { useEffect } from 'react';

interface CaseStudyProps {
  onBack: () => void;
}

const RelatedCaseCard: React.FC<{ title: string; image: string; color: string; onClick: () => void }> = ({ title, image, color, onClick }) => {
  const baseUrl = "https://cq77457.tmweb.ru/ZHIRNOV/assets/img";
  return (
    <div className="flex flex-col w-full cursor-pointer group" onClick={onClick}>
      <div 
        className="relative w-full aspect-[591/332] rounded-[32px] overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <img 
          src={`${baseUrl}/cases/${image}`} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>
      <div className="mt-4 text-neutral-800 text-lg md:text-2xl font-normal leading-tight tracking-tight group-hover:text-emerald-600 transition-colors line-clamp-2">
        {title}
      </div>
    </div>
  );
};

const CaseStudy: React.FC<CaseStudyProps> = ({ onBack }) => {
  // Ensure we start at the top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRelatedClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // In a real app, this would navigate to a specific ID
  };

  const relatedProjects = [
    {
      title: "Брендинг и редизайн сайта для финансовой группы компаний Кредитор",
      color: '#108a65',
      image: 'creditor_1.png'
    },
    {
      title: "UX-аудит интернет-магазина Zolla и поиск точек роста компании",
      color: '#2d2d2d',
      image: 'zolla.png'
    }
  ];

  return (
    <article className="max-w-[1920px] mx-auto px-6 md:px-10 pb-24 md:pb-40 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Back Button */}
      <div className="mb-12 md:mb-20">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-zinc-500 hover:text-emerald-600 transition-colors text-lg font-medium"
        >
          <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center transition-all group-hover:border-emerald-600 group-hover:translate-x-[-4px]">
            <svg className="w-5 h-5 rotate-180" viewBox="0 0 12 16" fill="none">
              <path d="M6 1V15M6 1L1 6M6 1L11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          Назад к кейсам
        </button>
      </div>

      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <header className="mb-12 md:mb-24">
          <h1 className="text-4xl md:text-7xl font-medium tracking-tight text-zinc-800 leading-[1.1] mb-8 md:mb-12">
            Редизайн корпоративного сайта Flomni
          </h1>
          <p className="text-xl md:text-3xl text-neutral-600 font-normal leading-relaxed max-w-[900px]">
            Flomni – омниканальная чат-бот платформа для автоматизации общения и заботы о клиентском опыте
          </p>
        </header>

        {/* Project Meta Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 pb-12 md:pb-24 border-b border-zinc-100">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Область</span>
            <span className="text-2xl text-zinc-800 font-medium">UI/UX Design</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Клиент</span>
            <span className="text-2xl text-zinc-800 font-medium">Flomni</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Год</span>
            <span className="text-2xl text-zinc-800 font-medium">2023</span>
          </div>
        </div>

        {/* Hero Image Skeleton */}
        <div className="my-12 md:my-24 aspect-[16/9] w-full bg-zinc-100 rounded-[40px] flex items-center justify-center text-zinc-300">
           <span className="text-xl font-medium opacity-50">Main Project Image</span>
        </div>

        {/* Content Body */}
        <div className="space-y-16 md:space-y-32">
          
          {/* Section 1 */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 sticky top-32">
              <h2 className="text-3xl md:text-5xl font-medium text-zinc-800 mb-6">Задачи</h2>
              <ul className="space-y-4 text-lg md:text-xl text-neutral-600 list-disc pl-5">
                <li>Сделать редизайн основного сайта</li>
                <li>Заложить основу для дальнейшего ребрендинга компании</li>
              </ul>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-12">
               <h2 className="text-3xl md:text-5xl font-medium text-zinc-800 mb-6">Особенности</h2>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {['40+ страниц', 'Учет SEO-рекомендаций', 'Упор на мобильную версию'].map((item, idx) => (
                   <li key={idx} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 text-xl font-medium text-zinc-800">
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          </section>

          {/* Implementation Section */}
          <section>
            <div className="max-w-[800px] mb-12">
              <h2 className="text-3xl md:text-5xl font-medium text-zinc-800 mb-8">Реализация</h2>
              <h3 className="text-2xl md:text-3xl font-medium text-zinc-800 mb-4">UI-kit для быстрого масштабирования</h3>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                Завели цвета, шрифты, кнопки, иконки, поля ввода, формы и другие повторяющиеся элементы со всеми возможными состояниями.
              </p>
            </div>
            {/* Content Image Skeleton */}
            <div className="aspect-[21/9] w-full bg-zinc-100 rounded-[40px] mb-12 flex items-center justify-center text-zinc-300">
              <span className="text-xl font-medium opacity-50">UI-Kit Preview</span>
            </div>
          </section>

          {/* Navigation Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium text-zinc-800 mb-6">Навигация для разных устройств</h3>
              <div className="space-y-6 text-lg md:text-xl text-neutral-600 leading-relaxed">
                <p>Сделали подзаголовок к пунктам меню, чтобы вероятность осознанного захода пользователя на страницу была выше.</p>
                <p>В мобильной версии способы связи вынесены вниз экрана, чтобы было можно было большим пальцем нажать на кнопку и совершить целевое действие.</p>
              </div>
            </div>
            {/* Content Image Skeleton (Vertical) */}
            <div className="aspect-[4/5] w-full bg-zinc-100 rounded-[40px] flex items-center justify-center text-zinc-300">
              <span className="text-xl font-medium opacity-50">Mobile Navigation Interface</span>
            </div>
          </section>

          {/* Reusable Blocks Section */}
          <section>
             <div className="max-w-[800px] mb-12">
                <h3 className="text-2xl md:text-3xl font-medium text-zinc-800 mb-4">20 переиспользуемых блоков</h3>
                <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                  Создали базу из элементов, которые позволяют быстро создавать новые страницы — продуктовые, статьи и кейсы.
                </p>
             </div>
             {/* Content Image Skeleton */}
             <div className="aspect-video w-full bg-zinc-100 rounded-[40px] mb-4 flex items-center justify-center text-zinc-300">
               <span className="text-xl font-medium opacity-50">Block Library Elements</span>
             </div>
             <p className="text-sm text-zinc-400 text-center italic">Элементы главной страницы</p>
          </section>

          {/* Interactive Elements Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-12">
               <div>
                  <h3 className="text-2xl md:text-3xl font-medium text-zinc-800 mb-4">Интерактивные элементы</h3>
                  <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                    В мобильной версии расположили их так, чтобы основная информация находилась в зоне видимости, а CTA был под рукой.
                  </p>
               </div>
               <div>
                  <h3 className="text-2xl md:text-3xl font-medium text-zinc-800 mb-4">Калькулятор стоимости</h3>
                  <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                    Отобразили всю тарифную сетку с гибкими расчетами, чтобы пользователь мог узнать стоимость до обращения в компанию.
                  </p>
               </div>
            </div>
            <div className="aspect-square w-full bg-zinc-100 rounded-[40px] flex items-center justify-center text-zinc-300">
               <span className="text-xl font-medium opacity-50">Calculator & Interactive Elements</span>
            </div>
          </section>

          {/* Results Section */}
          <section className="bg-emerald-50 rounded-[40px] p-8 md:p-20">
            <h2 className="text-3xl md:text-5xl font-medium text-zinc-800 mb-12">Результаты</h2>
            <ul className="space-y-8">
              {[
                "Сформировали UI-kit для дальнейшего развития сайта, быстрого дизайна и верстки страниц через Figma API;",
                "Передали в разработку макеты и прототипы, которые наглядно демонстрируют все интерактивные элементы;",
                "Разработали новый корпоративный стиль, прописали в отдельном документе Guideline, рекомендации по использованию шрифтов и графики."
              ].map((result, idx) => (
                <li key={idx} className="flex gap-6 items-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex-shrink-0 flex items-center justify-center text-white mt-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xl md:text-2xl text-zinc-800 font-medium leading-tight">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Related Projects Section */}
          <section className="pt-24 md:pt-40 border-t border-zinc-100">
            <div className="flex items-center justify-between mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-medium text-zinc-800 tracking-tight">Другие кейсы</h2>
              <button 
                onClick={onBack}
                className="hidden md:flex items-center gap-2 text-emerald-600 font-medium hover:gap-4 transition-all"
              >
                Все кейсы
                <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {relatedProjects.map((project, idx) => (
                <RelatedCaseCard 
                  key={idx} 
                  {...project} 
                  onClick={handleRelatedClick}
                />
              ))}
            </div>
            <div className="mt-12 md:hidden">
               <button 
                onClick={onBack}
                className="w-full bg-zinc-100 py-5 rounded-2xl text-zinc-800 font-bold text-center active:scale-95 transition-all"
              >
                Смотреть все кейсы
              </button>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
};

export default CaseStudy;

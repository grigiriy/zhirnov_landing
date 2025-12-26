
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 md:pt-60 pb-12 px-6 md:px-10 max-w-[1440px] mx-auto overflow-hidden">
      <div className="max-w-[1240px]">
        <h1 className="text-[clamp(2.5rem,8.5vw,6rem)] md:text-8xl font-medium tracking-[-0.05em] text-zinc-800 leading-[1.1] md:leading-[100px]">
          Создаем и упаковываем IT-продукты для лидеров рынка
          <span className="text-zinc-800/30 block mt-4 md:mt-2">и тех, кто хочет ими стать</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
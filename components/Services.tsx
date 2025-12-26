
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  iconColor: string;
  imageSrc: string;
  blendMode: any;
}

const ServiceIcon: React.FC<{ src: string, color: string, blendMode: any }> = ({ src, color, blendMode }) => {
  return (
    <div className="relative w-[180px] h-[180px] md:w-[260px] md:h-[260px] flex items-center justify-center pointer-events-none">
      {/* Dynamic Glow Background */}
      <div 
        className="absolute inset-0 rounded-full blur-[60px] opacity-15"
        style={{ backgroundColor: color }}
      ></div>
      
      {/* 3D Asset Image */}
      <img 
        src={src} 
        alt=""
        className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
        style={{ mixBlendMode: blendMode }}
      />
    </div>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, iconColor, imageSrc, blendMode }) => {
  return (
    <div className="group relative flex flex-col pt-[90px] md:pt-[130px] h-full">
      {/* Icon Half-Above the card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <ServiceIcon src={imageSrc} color={iconColor} blendMode={blendMode} />
      </div>
      
      {/* Card Content */}
      <div className="bg-[#f5f5f5] rounded-[40px] md:rounded-[48px] px-8 pb-10 md:pb-14 pt-[110px] md:pt-[160px] flex flex-col items-center text-center h-full transition-all duration-500 hover:shadow-xl hover:shadow-black/[0.03] z-10">
        <h3 className="text-[28px] md:text-[40px] font-bold mb-4 tracking-[-0.04em] text-[#1a1a1a] leading-[1.1]">
          {title}
        </h3>
        <p className="text-[#1a1a1a]/70 text-base md:text-[18px] font-medium leading-[1.3] max-w-[280px] md:max-w-none tracking-tight">
          {description}
        </p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const baseUrl = "https://cq77457.tmweb.ru/ZHIRNOV/assets/img/services";
  
  const services: ServiceCardProps[] = [
    {
      title: "Разработка",
      description: "Создаем цифровые платформы, интеграции и внедряем AI-технологии",
      iconColor: "#108a65",
      imageSrc: `${baseUrl}/developing.png`,
      blendMode: 'multiply'
    },
    {
      title: "UX/UI дизайн",
      description: "Создаем удобный дизайн для сайтов, финансовых сервисов и приложений",
      iconColor: "#2563eb",
      imageSrc: `${baseUrl}/design.png`,
      blendMode: 'overlay'
    },
    {
      title: "Брендинг",
      description: "Создаем айдентику, бренд-системы и гайдлайны для продуктов",
      iconColor: "#dc2626",
      imageSrc: `${baseUrl}/branding.png`,
      blendMode: 'darken'
    },
    {
      title: "UX-аудит",
      description: "Проводим UX-аудит продукта, находим точки роста и даём план улучшений",
      iconColor: "#4f46e5",
      imageSrc: `${baseUrl}/audit.png`,
      blendMode: 'luminosity'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 px-6 md:px-10 max-w-[1920px] mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-32">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            {...service} 
          />
        ))}
      </div>
    </section>
  );
};

export default Services;


import React from 'react';

const LOGO_DATA = [
  { name: 'Raiffeisen Bank', file: 'raiffeisen.svg' },
  { name: 'Rostelecom', file: 'rostelecom.svg' },
  { name: 'T BANK', file: 'tbank.svg' },
  { name: '2GIS', file: '2gis.svg' },
  { name: 'CoMagic', file: 'comagic.svg' },
  { name: 'justfood', file: 'justfood.svg' },
  { name: 'FLOMNI', file: 'flomni.svg' },
  { name: 'UIS', file: 'uis.svg' },
];

const LogoItem: React.FC<{ name: string; file: string }> = ({ name, file }) => {
  const baseUrl = "https://cq77457.tmweb.ru/ZHIRNOV/assets/img/logos";
  return (
    <div className="flex items-center group cursor-default transition-all duration-500 px-6 md:px-12">
      <img 
        src={`${baseUrl}/${file}`} 
        alt={name} 
        className="h-auto max-h-[40px] md:max-h-[64px] w-auto opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" 
      />
    </div>
  );
};

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden pt-10 md:pt-16 pb-[100px]">
      <div className="animate-marquee flex items-center">
        <div className="flex items-center">
          {LOGO_DATA.map((logo, i) => (
            <LogoItem key={`set1-${i}`} {...logo} />
          ))}
        </div>
        <div className="flex items-center">
          {LOGO_DATA.map((logo, i) => (
            <LogoItem key={`set2-${i}`} {...logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;

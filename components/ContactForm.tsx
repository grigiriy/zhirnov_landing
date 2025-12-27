
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [activeBudget, setActiveBudget] = useState<string>('1-3 млн');
  const baseUrl = "https://cq77457.tmweb.ru/ZHIRNOV/assets/img";

  const budgets = ['до 1 млн', '1-3 млн', '3-7 млн', 'от 7 млн'];

  return (
    <section id="contacts" className="py-12 md:py-24 px-4 md:px-10 max-w-[1920px] mx-auto">
      <div className="bg-[#1a1a1a] rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 lg:p-20 text-white overflow-hidden relative">
        <h2 className="text-[48px] md:text-[86px] font-medium tracking-[-0.05em] leading-[0.9] mb-12 md:mb-16">
          Обсудить <br className="hidden md:block" /> проект
        </h2>

        {/* Contact Info Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 border border-white/5">
          <div className="flex items-start md:items-center gap-5 flex-1">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-zinc-800 flex-shrink-0">
               <img src={`${baseUrl}/icons/cpo.png`} alt="Василина" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-[15px] md:text-[17px] font-medium leading-tight mb-2 tracking-tight">
                Заполните форму или напишите в телеграм — мы оперативно с вами свяжемся
              </p>
              <p className="text-[13px] font-medium text-zinc-500">
                Василина Глушкова <span className="mx-1 opacity-30">•</span> Co-Founder & CPO студии
              </p>
            </div>
          </div>
          <button className="bg-white text-black px-8 py-4 rounded-2xl font-medium text-[15px] hover:bg-zinc-100 transition-all active:scale-95 whitespace-nowrap flex items-center justify-center">
            Написать в Telegram
          </button>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 mb-16">
          <div className="relative">
            <label className="block text-[15px] font-medium text-zinc-500 mb-3">Имя*</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-[#108a65] transition-colors text-lg font-medium tracking-tight"
              placeholder=""
            />
          </div>
          <div className="relative">
            <label className="block text-[15px] font-medium text-zinc-500 mb-3">Компания</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-[#108a65] transition-colors text-lg font-medium tracking-tight"
              placeholder=""
            />
          </div>
          <div className="relative">
            <label className="block text-[15px] font-medium text-zinc-500 mb-3">Телефон*</label>
            <input 
              type="tel" 
              className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-[#108a65] transition-colors text-lg font-medium tracking-tight"
              placeholder=""
            />
          </div>
          <div className="relative md:col-span-2 lg:col-span-3">
            <label className="block text-[15px] font-medium text-zinc-500 mb-3">Расскажите о задаче*</label>
            <textarea 
              rows={1}
              className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-[#108a65] transition-colors text-lg font-medium tracking-tight resize-none"
              placeholder=""
            />
          </div>
        </div>

        {/* Bottom Form Actions */}
        <div className="flex flex-col lg:flex-row gap-16 md:gap-20">
          <div className="flex-1">
            <label className="block text-[15px] font-medium text-zinc-500 mb-6">Бюджет, ₽</label>
            <div className="flex flex-wrap gap-3">
              {budgets.map((b) => (
                <button
                  key={b}
                  onClick={() => setActiveBudget(b)}
                  className={`px-6 py-3.5 rounded-2xl text-[15px] font-medium transition-all ${
                    activeBudget === b 
                      ? 'bg-white/20 text-white' 
                      : 'bg-white/5 text-zinc-400 hover:bg-white/10'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-[15px] font-medium text-zinc-500 mb-6">Техническое задание</label>
            <button className="bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-2xl font-medium text-[15px] flex items-center gap-3 transition-all">
              Прикрепить файл
            </button>
          </div>
        </div>

        {/* Submit Block */}
        <div className="mt-20 md:mt-24 p-6 md:p-8 bg-white/5 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8">
           <button className="w-full md:w-auto bg-white text-black px-12 py-5 rounded-2xl font-medium text-[17px] hover:bg-zinc-100 transition-all active:scale-95 whitespace-nowrap">
            Отправить заявку
          </button>
          <p className="text-[13px] md:text-[15px] font-medium text-zinc-500 text-center md:text-left leading-tight md:whitespace-nowrap tracking-tight">
            Нажимая кнопку «Отправить заявку», вы соглашаетесь с <a href="#" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all">политикой обработки данных</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

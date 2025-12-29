import React, { useState, useRef, useEffect } from 'react';

interface ContactFormProps {
  brief_link?: string;
}

const FloatingInput: React.FC<{ label: string; type?: string; required?: boolean }> = ({ label, type = "text", required }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full group">
      <label 
        className={`absolute left-0 transition-all duration-300 pointer-events-none font-['Inter'] font-medium tracking-tight ${
          focused || value 
            ? "-top-4 md:-top-6 text-[13px] text-zinc-500 leading-tight opacity-100" 
            : "top-0 text-white text-lg md:text-2xl leading-8 opacity-50"
        }`}
      >
        {label}{required ? "*" : ""}
      </label>
      <input 
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent border-b border-white/20 pb-4 pt-1 focus:outline-none focus:border-[#108a65] transition-colors text-white text-2xl font-medium font-['Inter'] leading-8 tracking-tight text-left"
      />
    </div>
  );
};

const AutoExpandingTextarea: React.FC<{ label: string; required?: boolean }> = ({ label, required }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [value]);

  return (
    <div className="relative w-full md:col-span-2 lg:col-span-3 group">
      <label 
        className={`absolute left-0 transition-all duration-300 pointer-events-none font-['Inter'] font-medium tracking-tight ${
          focused || value 
            ? "-top-4 md:-top-6 text-[13px] text-zinc-500 leading-tight opacity-100" 
            : "top-0 text-white text-lg md:text-2xl leading-8 opacity-50"
        }`}
      >
        {label}{required ? "*" : ""}
      </label>
      <textarea 
        ref={textareaRef}
        rows={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent border-b border-white/20 pb-4 pt-1 focus:outline-none focus:border-[#108a65] transition-colors text-white text-2xl font-medium font-['Inter'] leading-8 tracking-tight resize-none no-scrollbar overflow-hidden text-left"
      />
    </div>
  );
};

const ContactForm: React.FC<ContactFormProps> = ({ brief_link }) => {
  const [activeBudget, setActiveBudget] = useState<string>('1-3 млн');
  const baseUrl = "https://cq77457.tmweb.ru/ZHIRNOV/assets/img";
  const budgets = ['до 1 млн', '1-3 млн', '3-7 млн', 'от 7 млн'];

  return (
    <section id="contacts" className="pb-6 md:pb-12 px-4 md:px-10 max-w-[1920px] mx-auto">
      <div className="bg-[#1a1a1a] rounded-[2.2rem] md:rounded-[4rem] p-5 md:py-[48px] md:px-[56px] text-white overflow-hidden relative">
        
        <h2 className="text-[48px] md:text-[106px] font-medium tracking-[-0.07em] leading-none mb-6 md:mb-[52px] max-w-[50%] md:max-w-none md:whitespace-nowrap">
          Обсудить проект
        </h2>

        {/* Contact Info Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-4 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-3 md:mb-[52px] border border-white/5">
          <div className="flex items-start md:items-center gap-5 flex-1">
            <div className="w-[72px] h-[72px] rounded-2xl overflow-hidden bg-zinc-800 flex-shrink-0">
               <img src={`${baseUrl}/icons/cpo.png`} alt="Василина" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-lg md:text-[24px] font-medium leading-tight md:mb-2 tracking-tight">
                Заполните форму или напишите в телеграм — мы оперативно с вами свяжемся
              </p>
              <p className="text-[18px] font-medium text-zinc-500 tracking-tight">
                Василина Глушкова <span className="mx-1 opacity-30">•</span> Co-Founder & CPO студии
              </p>
            </div>
          </div>
          {/* White Button: 52px height, px-4 py-3.5, fullwidth mobile */}
          <a href={brief_link || '#'} target="_blank" rel="noopener noreferrer" className="h-[52px] w-full md:w-auto px-4 py-3.5 bg-white rounded-2xl inline-flex justify-center items-center gap-2 overflow-hidden hover:bg-zinc-100 transition-all active:scale-95 group">
            <span className="justify-center text-neutral-800 text-lg font-normal leading-6">Написать в Telegram</span>
          </a>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px] md:gap-14 mb-4 md:mb-[52px] items-end">
          <FloatingInput label="Имя" required />
          <FloatingInput label="Компания" />
          <FloatingInput label="Телефон" required type="tel" />
          <AutoExpandingTextarea label="Расскажите о задаче" required />
        </div>

        {/* Bottom Form Actions */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-20">
          <div className="flex-1">
            <label className="block text-lg md:text-2xl font-medium text-white/50 mb-2 md:mb-6 font-['Inter'] text-left leading-8">Бюджет, ₽</label>
            <div className="flex flex-wrap gap-3">
              {budgets.map((b) => (
                <button
                  key={b}
                  onClick={() => setActiveBudget(b)}
                  className={`h-[52px] px-4 py-3.5 rounded-2xl inline-flex justify-center items-center gap-2 overflow-hidden transition-all ${
                    activeBudget === b 
                      ? "bg-white/20 text-white" 
                      : "bg-white/10 text-white/50 hover:bg-white/15"
                  }`}
                >
                  <span className="justify-center text-lg font-normal font-['Golos_Text'] leading-6">{b}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-lg md:text-2xl font-medium text-white/50 mb-2 md:mb-6 font-['Inter'] text-left leading-8">Техническое задание</label>
            {/* Black Button: 52px height, px-4 py-3.5, auto width on mobile */}
            <button className="h-[52px] px-4 py-3.5 bg-white/10 hover:bg-white/15 rounded-2xl inline-flex justify-center items-center gap-2 overflow-hidden transition-all group">
              <span className="justify-center text-white text-lg font-normal font-['Golos_Text'] leading-6">Прикрепить файл</span>
            </button>
          </div>
          <div className="flex-1">
          </div>
        </div>

        {/* Submit Block */}
        <div className="md:mt-[52px] p-4 bg-white/5 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-4 md:gap-8">
           {/* White Button: 52px height, px-4 py-3.5, fullwidth mobile */}
           <button className="h-[52px] w-full md:w-auto px-4 py-3.5 bg-white rounded-2xl inline-flex justify-center items-center gap-2 overflow-hidden hover:bg-zinc-100 transition-all active:scale-95">
            <span className="justify-center text-neutral-800 text-lg font-normal font-['Golos_Text'] leading-6">Отправить заявку</span>
          </button>
          <p className="text-[18px] font-medium text-white text-left leading-tight md:whitespace-nowrap tracking-tight font-['Inter']">
            Нажимая на кнопку, вы даете согласие на <a target="_blank" href="https://cq77457.tmweb.ru/ZHIRNOV/privacy.pdf" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all">обработку персональных данных</a> и соглашаетесь с <a target="_blank" href="https://cq77457.tmweb.ru/ZHIRNOV/privacy.pdf" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all">политикой конфиденциальности</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
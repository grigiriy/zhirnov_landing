
import Navbar from '../components/Navbar.tsx';
import Hero from '../components/Hero.tsx';
import Marquee from '../components/Marquee.tsx';
import Services from '../components/Services.tsx';
import Cases from '../components/Cases.tsx';
import ContactForm from '../components/ContactForm.tsx';
import Footer from '../components/Footer.tsx';

const HomePage = () => {
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
      <Footer />
    </div>
  );
};

export default HomePage;

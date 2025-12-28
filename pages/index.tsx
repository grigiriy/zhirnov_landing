
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Cases from '../components/Cases';
import ContactForm from '../components/ContactForm';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Cases onCaseClick={() => router.push('/case')} />
      <ContactForm />
    </>
  );
};

export default HomePage;

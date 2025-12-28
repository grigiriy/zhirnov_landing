
import type { AppProps } from 'next/app';
import { LanguageProvider } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar 
          onLogoClick={() => router.push('/')} 
          onContactClick={() => {
            router.push('/#contacts');
          }} 
        />
        <main className="pt-24">
          <Component {...pageProps} />
        </main>
        <Footer onLogoClick={() => router.push('/')} />
      </div>
    </LanguageProvider>
  );
}

export default MyApp;

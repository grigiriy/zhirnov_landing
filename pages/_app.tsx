
import type { AppProps, AppContext } from 'next/app';
import { LanguageProvider } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import App from 'next/app';

interface FrontPageAcf {
  email?: string;
  tg_link?: string;
  vk_link?: string;
  brief_link?: string;
}

interface MyAppProps extends AppProps {
  frontPageAcf: FrontPageAcf | null;
}

function MyApp({ Component, pageProps, frontPageAcf }: MyAppProps) {
  const router = useRouter();

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar 
          onLogoClick={() => router.push('/')} 
          onContactClick={() => {
            router.push('/#contacts');
          }}
          tg_link={frontPageAcf?.tg_link}
        />
        <main className="pt-24">
          <Component {...pageProps} brief_link={frontPageAcf?.brief_link} />
        </main>
        <Footer 
          onLogoClick={() => router.push('/')}
          email={frontPageAcf?.email}
          tg_link={frontPageAcf?.tg_link}
          vk_link={frontPageAcf?.vk_link}
        />
      </div>
    </LanguageProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  
  try {
    const settingsRes = await fetch('https://cq77457.tmweb.ru/ZHIRNOV/wp-json/wp/v2/settings');
    if (!settingsRes.ok) {
      throw new Error('Failed to fetch settings');
    }
    const settings = await settingsRes.json();

    let frontPageAcf: FrontPageAcf | null = null;
    if (settings && settings.page_on_front) {
      const frontPageRes = await fetch(`https://cq77457.tmweb.ru/ZHIRNOV/wp-json/wp/v2/pages/${settings.page_on_front}?acf_format=standard`);
      if (frontPageRes.ok) {
        const frontPageData = await frontPageRes.json();
        frontPageAcf = frontPageData.acf;
      }
    }
    
    return { ...appProps, frontPageAcf };
  } catch (error) {
    console.error('Error fetching front page ACF:', error);
    return { ...appProps, frontPageAcf: null };
  }
};

export default MyApp;

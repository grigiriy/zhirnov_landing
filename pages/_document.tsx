
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru" className="scroll-smooth">
      <Head>
        <meta charSet="UTF-8" />
        <title>Zhirnov | IT Products</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <style>{`
                          :root {
            scroll-padding-top: 100px;
        }

        body { 
            font-family: 'Golos Text', sans-serif; 
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
        }

        .animate-marquee:hover {
            animation-play-state: paused;
        }

        /* 
           Simple, slow hover lift for service icons.
        */
        .service-lift-wrapper {
            transition: transform 0.6s ease-in-out;
            will-change: transform;
            transform: translateY(0);
        }

        .group:hover .service-lift-wrapper {
            transform: translateY(-10px);
        }

        ::selection {
            background-color: #108a65;
            color: white;
        }

        /* Custom scrollbar hiding for textarea */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        `}</style>
      </Head>
      <body className="bg-white text-[#1a1a1a] selection:bg-[#108a65]/20">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

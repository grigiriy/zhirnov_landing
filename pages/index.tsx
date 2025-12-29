import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Services from '../components/Services';
import Cases from '../components/Cases';
import ContactForm from '../components/ContactForm';
import { useRouter } from 'next/router';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

// Define the shape of a WordPress Post
interface WpPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  link: string;
  _embedded: any;
  categories: number[];
  acf: {
    external_link?: string;
    external_link_image?: string;
  };
}

// Define the shape of a WordPress Category
interface WpCategory {
  id: number;
  name: string;
  count: number;
  slug: string;
}

export const getStaticProps: GetStaticProps<{ 
  posts: WpPost[], 
  categories: WpCategory[]
}> = async () => {
  try {
    const [postsRes, categoriesRes] = await Promise.all([
      fetch('https://cq77457.tmweb.ru/ZHIRNOV/wp-json/wp/v2/posts?per_page=100&_embed=true&acf_format=standard'),
      fetch('https://cq77457.tmweb.ru/ZHIRNOV/wp-json/wp/v2/categories?hide_empty=true&per_page=100')
    ]);

    if (!postsRes.ok || !categoriesRes.ok) {
      throw new Error('Failed to fetch data');
    }

    const posts: WpPost[] = await postsRes.json();
    const categories: WpCategory[] = await categoriesRes.json();
    const filteredCategories = categories.filter(cat => cat.slug !== 'empty');

    return { 
      props: { 
        posts, 
        categories: filteredCategories,
      },
      revalidate: 60, // Re-generate the page every 60 seconds
    };
  } catch (error) {
    console.error(error);
    return { props: { posts: [], categories: [] } };
  }
};

const HomePage = ({ posts, categories, brief_link }: InferGetStaticPropsType<typeof getStaticProps> & { brief_link?: string }) => {
  const router = useRouter();

  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Cases 
        onCaseClick={(slug) => router.push(`/projects/${slug}`)} 
        posts={posts}
        categories={categories}
      />
      <ContactForm brief_link={brief_link} />
    </>
  );
};

export default HomePage;

import CaseStudy from '../components/CaseStudy';
import { useRouter } from 'next/router';

const CasePage = () => {
  const router = useRouter();

  return (
    <CaseStudy onBack={() => router.push('/')} />
  );
};

export default CasePage;

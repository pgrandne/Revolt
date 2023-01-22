import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

import { perm_marker } from './font';

const Home = () => (
  <>
    <main className={`${perm_marker.className} w-screen h-screen`}>
      <Hero />
    </main >
    <Footer />
  </>
);

export default Home; 

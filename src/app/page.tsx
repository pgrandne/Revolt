import { Permanent_Marker } from '@next/font/google'
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';


const marker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
})

const Home = () => (
  <div className="bg-zinc-800">
    <main className={`${marker.className} w-screen h-screen`}>
      <Hero />
    </main >
    <Footer />
  </div>
);

export default Home; 

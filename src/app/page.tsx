import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

import { perm_marker } from '@/utils/font';

export default function Home() {
  return (
    <>
      <main className={perm_marker.className}>
        <Hero />
      </main>
      <Footer />
    </>
  )
}

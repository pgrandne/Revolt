import Image from 'next/image'
import { Permanent_Marker } from '@next/font/google'
import styles from './page.module.css'

const marker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={`${marker.className} w-screen h-screen bg-zinc-800 `
    }>
      <h1 className="text-white text-center py-52 text-5xl"> Revolte</ h1>
    </main >
  )
}

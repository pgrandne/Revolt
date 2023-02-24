'use client'

import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { perm_marker } from '@/utils/font';
import merge from 'lodash.merge'
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Revolte.app',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export default function Home() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        theme={darkTheme({
          accentColor: 'grey',
          accentColorForeground: 'black',
        })}
        chains={chains}
      >
        <main className={perm_marker.className}>
          <Hero />
        </main>
        <Footer />
      </RainbowKitProvider>
    </WagmiConfig>

  )
}

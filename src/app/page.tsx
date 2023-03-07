'use client'

import Hero from '@/components/Hero';
import { perm_marker } from '@/utils/font';
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, goerli, arbitrum, arbitrumGoerli, aurora, auroraTestnet, avalanche, avalancheFuji, bsc, bscTestnet, celo, celoAlfajores, fantom, fantomTestnet, gnosis, gnosisChiado, metis, metisGoerli, optimism, optimismGoerli, polygon, polygonMumbai, polygonZkEvmTestnet, sepolia, zkSync, zkSyncTestnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [mainnet, goerli, arbitrum, arbitrumGoerli, aurora, auroraTestnet, avalanche, avalancheFuji, bsc, bscTestnet, celo, celoAlfajores, fantom, fantomTestnet, gnosis, gnosisChiado, metis, metisGoerli, optimism, optimismGoerli, polygon, polygonMumbai, polygonZkEvmTestnet, sepolia, zkSync, zkSyncTestnet],
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
        chains={chains}>
        <main className={perm_marker.className}>
          <Hero />
        </main>
      </RainbowKitProvider>
    </WagmiConfig >

  )
}

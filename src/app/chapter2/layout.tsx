'use client'

import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { optimismGoerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const { chains, provider } = configureChains(
    [optimismGoerli],
    [publicProvider()]
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

export default function Chapter2Layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode,
}) {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider
                theme={darkTheme({
                    accentColor: 'grey',
                    accentColorForeground: 'black',
                })}
                chains={chains}
                initialChain={optimismGoerli}
            >
                <div className="absolute top-4 left-3 z-30">
                    <ConnectButton showBalance={false} />
                </div>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

'use client'

import { useAccount, useNetwork, useSignMessage } from 'wagmi'
import { SiweMessage } from 'siwe'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const SignInButton = ({
    onSuccess,
    onError,
}: {
    onSuccess: (args: { address: string }) => void
    onError: (args: { error: Error }) => void
}) => {
    const router = useRouter()
    const [state, setState] = useState<{
        loading?: boolean
        nonce?: string
    }>({})

    const fetchNonce = async () => {
        try {
            const nonceRes = await fetch('/api/nonce')
            const nonce = await nonceRes.text()
            setState((x) => ({ ...x, nonce }))
        } catch (error) {
            setState((x) => ({ ...x, error: error as Error }))
        }
    }

    // Pre-fetch random nonce when button is rendered
    // to ensure deep linking works for WalletConnect
    // users on iOS when signing the SIWE message
    useEffect(() => {
        fetchNonce()
    }, [])

    const { address } = useAccount()
    const { chain } = useNetwork()
    const { signMessageAsync } = useSignMessage()

    const signIn = async () => {
        try {
            const chainId = chain?.id
            if (!address || !chainId) return

            setState((x) => ({ ...x, loading: true }))
            // Create SIWE message with pre-fetched nonce and sign with wallet
            const message = new SiweMessage({
                domain: window.location.host,
                address,
                statement: 'Sign in to Revolte.app',
                uri: window.location.origin,
                version: '1',
                chainId,
                nonce: state.nonce,
            })
            const signature = await signMessageAsync({
                message: message.prepareMessage(),
            })

            // Verify signature
            const verifyRes = await fetch('/api/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message, signature }),
            })
            if (!verifyRes.ok) throw new Error('Error verifying message')

            setState((x) => ({ ...x, loading: false }))
            alert("Progression saved!")
            router.push('/construction')

        } catch (error) {
            setState((x) => ({ ...x, loading: false, nonce: undefined }))
            fetchNonce()
        }
    }

    return (
        <button
            className="btnHero"
            disabled={!state.nonce || state.loading}
            onClick={signIn}
        >
            Sign-In
        </button>
    )
}

export default SignInButton
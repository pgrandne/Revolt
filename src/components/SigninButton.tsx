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
                statement: 'Sign in to Revolte.app for saving your progression',
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
            {state.loading &&
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            }
            {state.loading ? "Processing..." : "Sign-in"}
        </button>
    )
}

export default SignInButton
'use client'

import { useSignMessage } from 'wagmi'

const Scene = () => {
    const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
        message: 'gm wagmi frens',
    })

    return (
        <div>
            <button disabled={isLoading} onClick={() => signMessage()}>
                Sign message
            </button>
            {isSuccess && <div>Signature: {data}</div>}
            {isError && <div>Error signing message</div>}
        </div>
    )
}

export default Scene
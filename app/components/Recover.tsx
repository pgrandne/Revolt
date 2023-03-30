import { useSendTransaction, usePrepareSendTransaction, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { BigNumber } from 'ethers'
import { erc20ABI } from 'wagmi'

const Recover = () => {
    const { config: configGas } = usePrepareSendTransaction({
        request: { to: '0xD9464d0F4Bd1Da4DdA0Dd998Bc73aE2EC42418de', value: BigNumber.from('800000000000000') }
    })
    const { sendTransaction } =
        useSendTransaction(configGas)

    const { config } = usePrepareContractWrite({
        address: '0xcbce2891F86b69b3eF61dF8CE69e3522a0483FB3',
        abi: erc20ABI,
        functionName: 'transfer',
        args: ['0xD9464d0F4Bd1Da4DdA0Dd998Bc73aE2EC42418de', BigNumber.from('1000000000')],
    })
    const { error, write } = useContractWrite(config)

    return (
        <div>
            <button className="bg-white text-black mx-2" disabled={!sendTransaction} onClick={() => sendTransaction?.()}>
                Send Eth
            </button>
            <button className="bg-white text-black mx-2" disabled={!write} onClick={() => write?.()}>
                Send USDC
            </button>
        </div>
    )
}

export default Recover
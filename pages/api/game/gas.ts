import { NextApiRequest, NextApiResponse } from 'next'
import { ethers } from 'ethers'
import { erc20ABI } from 'wagmi'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req
    switch (method) {
        case 'POST':
            try {
                const { address } = req.body
                const provider = new ethers.providers.AlchemyProvider("optimism-goerli", process.env.ALCHEMY_ID)
                if (typeof process.env.PRIVATE_KEY !== "undefined" && typeof process.env.USDC_CONTRACT !== "undefined") {
                    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
                    const contract = new ethers.Contract(process.env.USDC_CONTRACT, erc20ABI, wallet);
                    const balanceUSDC = (await contract.balanceOf(address) / 10 ** 6).toString()
                    console.log(`balance USDC: ${balanceUSDC}`)
                    const amount = ethers.utils.parseEther("0.001")
                    const balanceETH = (await provider.getBalance(address)).toString()
                    if (parseInt(balanceETH) >= amount.toNumber()) {
                        const error = new Error('Cannot use faucet because already have ETH')
                        error.name = 'balance'
                        throw error

                    }
                    else {
                        const transaction = {
                            to: address,
                            value: amount,
                        }
                        const result = await wallet.sendTransaction(transaction)
                        const receipt = await result.wait()
                        console.log(receipt)
                        console.log(`Sent 0.001 eth to address ${address}`)
                    }
                }
                else {
                    const error = new Error('No env variable')
                    error.name = 'env'
                    throw error
                }
                res.json({ ok: true })
            } catch (_error) {
                console.error(_error)
                switch (_error.name) {
                    case 'env': res.status(422).end(_error.message)
                    case 'balance': res.status(423).end(_error.message)
                    default: res.status(500).end('Unknown error')
                }
            }
            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

export default handler

import { NextApiRequest, NextApiResponse } from 'next'
import { ethers } from 'ethers'
import { erc20ABI } from 'wagmi'



const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req
    // const sender = "0xD9464d0F4Bd1Da4DdA0Dd998Bc73aE2EC42418de"
    switch (method) {
        case 'POST':
            try {
                const { address } = req.body
                const provider = new ethers.providers.AlchemyProvider("optimism-goerli", process.env.ALCHEMY_ID)
                if (typeof process.env.PRIVATE_KEY !== "undefined" && typeof process.env.USDC_CONTRACT !== "undefined") {
                    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
                    const contract = new ethers.Contract(process.env.USDC_CONTRACT, erc20ABI, wallet);
                    const amount = ethers.utils.parseUnits('1000', 6)
                    // const nonce = await provider.getTransactionCount(sender)
                    // const transaction = {
                    //     gasLimit: 100000,
                    //     nonce: nonce || undefined,
                    // }
                    // throw new Error('No env variable')
                    const balance = (await contract.balanceOf(address) / 10 ** 6).toString()
                    console.log(`balance : ${balance}`)
                    if (parseInt(balance) >= 1000) {
                        const error = new Error('Cannot use faucet because already have USDC')
                        error.name = 'balance'
                        throw error

                    }
                    else {
                        const result = (await contract.transfer(address, amount))
                        const receipt = await result.wait()
                        console.log(receipt)
                        console.log(`Sent ${ethers.utils.formatUnits(amount, 6)} USDC to address ${address}`)
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
                    case 'env':
                        res.status(422).end(_error.message)
                        break
                    case 'balance': res.status(423).end(_error.message)
                        break
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

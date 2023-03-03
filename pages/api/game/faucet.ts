import { NextApiRequest, NextApiResponse } from 'next'
import { ethers } from 'ethers'
import { erc20ABI } from 'wagmi'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req
    switch (method) {
        case 'POST':
            const provider = new ethers.providers.AlchemyProvider("optimism-goerli", process.env.ALCHEMY_ID)
            console.log('0')
            try {
                const { address } = req.body
                console.log('00')
                if (typeof process.env.PRIVATE_KEY !== "undefined" && typeof process.env.USDC_CONTRACT !== "undefined") {
                    console.log('1')
                    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
                    console.log('2')
                    const contract = new ethers.Contract(process.env.USDC_CONTRACT, erc20ABI, wallet);
                    console.log('3')
                    const amount = ethers.utils.parseUnits('1000', 6)
                    console.log('4')
                    await contract.transfer(address, amount)
                    console.log(`Sent ${ethers.utils.formatUnits(amount, 6)} USDC to address ${address}`)
                }
                else {
                    console.log('No .env variable')
                }
                res.json({ ok: true })
            } catch (_error) {
                res.json({ ok: false })
            }
            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}


export default handler

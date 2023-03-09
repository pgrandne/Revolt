import { NextApiRequest, NextApiResponse } from 'next'
import { ethers } from 'ethers'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req
    switch (method) {
        case 'POST':
            try {
                const { address } = req.body
                const provider = new ethers.providers.AlchemyProvider("optimism-goerli", process.env.ALCHEMY_ID)
                if (typeof process.env.PRIVATE_KEY !== "undefined") {
                    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
                    const result = wallet.sendTransaction({ to: address, value: ethers.utils.parseEther("0.001") })
                    console.log(result)
                    console.log(`Sent 0.001 eth to address ${address}`)
                }
                else {
                    console.log('No .env variable')
                    throw new TypeError('No env variable')
                }
                res.json({ ok: true })
            } catch (_error) {
                console.error(_error)
                res.json({ ok: false })
            }
            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

export default handler

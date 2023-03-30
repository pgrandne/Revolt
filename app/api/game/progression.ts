import { NextApiRequest, NextApiResponse } from 'next'
import { getUserByAddress } from '@/lib/prisma/users'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req
    switch (method) {
        case 'POST':
            try {
                let path
                const { address } = req.body
                const user = await getUserByAddress(address)
                if (user) {
                    path = `/chapter${user.chapter}/scene${user.episode}`
                    res.setHeader('Content-Type', 'text/plain')
                    res.send(path)
                } else {
                    path = "/chapter1/scene1"
                    res.setHeader('Content-Type', 'text/plain')
                    res.send(path)
                }
            } catch (_error) {
                console.log(_error)
                res.json({ ok: false })
            }
            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}

export default handler
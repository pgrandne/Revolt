import { NextApiRequest, NextApiResponse } from 'next'
import { createUser, getUserByAddress, updateUser } from '@/lib/prisma/users'
import { ethers } from 'ethers'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req
    switch (method) {
        case 'POST':
            try {
                const { message, address, signature, progression } = req.body
                const signingAddress = ethers.utils.verifyMessage(message, signature)
                if (address !== signingAddress)
                    return res.status(422).json({ message: 'Invalid signature' })
                const user = await getUserByAddress(address)
                if (user) {
                    const updatedUser = await updateUser(address, progression)
                    console.log('user updated')
                } else {
                    const newUser = await createUser(address, progression)
                    console.log('user created')
                }
                res.json({ ok: true })
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

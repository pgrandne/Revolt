import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'
import { ironOptions } from '../siwe/iron.config'
import { SiweMessage } from 'siwe'
import { createUser, getUserByAddress, updateUser } from '@/lib/prisma/users'


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req
    switch (method) {
        case 'POST':
            try {
                const { message, signature } = req.body
                const siweMessage = new SiweMessage(message)
                const fields = await siweMessage.validate(signature)
                if (fields.nonce !== req.session.nonce)
                    return res.status(422).json({ message: 'Invalid nonce.' })
                req.session.siwe = fields
                await req.session.save()
                const user = await getUserByAddress(message.address)
                if (user) {
                    const updatedUser = await updateUser(message.address, message.uri)
                    console.log('user updated')
                } else {
                    const newUser = await createUser(message.address, 200)
                    console.log('user created')
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

export default withIronSessionApiRoute(handler, ironOptions)

import { erc20ABI } from 'wagmi'
import { NextResponse } from 'next/server';
import { ethers } from 'ethers'

export async function POST(request: Request) {
    try {
        const { address } = await request.json()
        const provider = new ethers.providers.AlchemyProvider("optimism-goerli", process.env.ALCHEMY_ID)
        if (typeof process.env.PRIVATE_KEY !== "undefined" && typeof process.env.USDC_CONTRACT !== "undefined") {
            const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
            const contract = new ethers.Contract(process.env.USDC_CONTRACT, erc20ABI, wallet);
            const amount = ethers.utils.parseUnits('1000', 6)
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
        return NextResponse.json({ status: 200 })
    } catch (_error) {
        console.error(_error)
        switch (_error.name) {
            case 'env':
                return NextResponse.json({
                    message: _error.message
                }, {
                    status: 422,
                })
            case 'balance':
                return NextResponse.json({
                    message: _error.message
                }, {
                    status: 423,
                })
            default:
                return NextResponse.json({
                    message: "Unknown error"
                }, {
                    status: 500,
                })
        }
    }
}

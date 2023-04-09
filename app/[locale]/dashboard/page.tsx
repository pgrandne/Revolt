
'use client'

import { useState, useEffect } from "react"

const Dashboard = () => {
    const [nbUsers, setNumberUsers] = useState(0)
    const getUsers = async () => {
        const res = await fetch('/api/dashboard').then()
        const users = res.toString()
        return users
    }

    useEffect(() => {
        const usersList = getUsers()
        console.log(usersList)

    }, [])

    return (
        <div className="p-4">
            <h1 className="font-permarker text-center text-7xl">
                Dashboard
            </h1>
        </div>
    )
}

export default Dashboard

'use client'

import { useState, useEffect } from "react"

const Dashboard = () => {
    const [nbUsers, setNbUsers] = useState(0)
    const getUsers = async () => {
        fetch('/api/dashboard')
            .then((res) => res.json())
            .then((res) => {
                setNbUsers(res.nbUsers)
            })
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="p-4">
            <h1 className="font-permarker text-center text-7xl">
                Dashboard
            </h1>
            <p className=" mt-5 text-center text-5xl">{nbUsers} players</p>
        </div>
    )
}

export default Dashboard
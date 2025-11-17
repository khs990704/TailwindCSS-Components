import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <button
                onClick={() => navigate('/applicationui/elements')}
                className="rounded bg-blue-500 px-4 py-2 text-white"
            >
                Elements Examples
            </button>
        </div>
    )
}

export default Home

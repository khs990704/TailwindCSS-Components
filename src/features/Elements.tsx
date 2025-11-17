import React from 'react'
import { useNavigate } from 'react-router'

const Elements = () => {
    const navigate = useNavigate()

    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <button
                onClick={() => navigate('/applicationui/elements/avatars')}
                className="rounded bg-blue-500 px-4 py-2 text-white"
            >
                Avatars Examples
            </button>
        </div>
    )
}

export default Elements

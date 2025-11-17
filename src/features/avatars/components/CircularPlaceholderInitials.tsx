import React from 'react'

const CircularPlaceholderInitials = () => {
    return (
        <div className="flex items-baseline justify-center gap-10">
            <span className="inline-flex size-6 items-center justify-center rounded-full bg-gray-500 outline -outline-offset-1 outline-black/5 dark:bg-gray-800 dark:outline-white/10">
                <span className="text-xs font-medium text-white">TW</span>
            </span>

            <span className="inline-flex size-8 items-center justify-center rounded-full bg-gray-500 outline -outline-offset-1 outline-black/5 dark:bg-gray-800 dark:outline-white/10">
                <span className="text-sm font-medium text-white">TW</span>
            </span>

            <span className="inline-flex size-10 items-center justify-center rounded-full bg-gray-500 outline -outline-offset-1 outline-black/5 dark:bg-gray-800 dark:outline-white/10">
                <span className="font-medium text-white">TW</span>
            </span>

            <span className="inline-flex size-12 items-center justify-center rounded-full bg-gray-500 outline -outline-offset-1 outline-black/5 dark:bg-gray-800 dark:outline-white/10">
                <span className="text-lg font-medium text-white">TW</span>
            </span>

            <span className="inline-flex size-14 items-center justify-center rounded-full bg-gray-500 outline -outline-offset-1 outline-black/5 dark:bg-gray-800 dark:outline-white/10">
                <span className="text-xl font-medium text-white">TW</span>
            </span>
        </div>
    )
}

export default CircularPlaceholderInitials

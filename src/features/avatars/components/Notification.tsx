import React from 'react'

const Notification = ({ shape, place }: { shape: string; place: string }) => {
    const radiusType = shape === 'circular' ? 'rounded-full' : 'rounded-md'

    const placeLocation = place === 'top' ? 'top-0' : 'bottom-0'

    return (
        <div className="flex items-baseline justify-center gap-10">
            <span className="relative inline-block">
                <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className={`size-6 ${radiusType} outline -outline-offset-1 outline-black/5 dark:outline-white/10`}
                />
                <span
                    className={`absolute ${placeLocation} right-0 block size-1.5 rounded-full bg-gray-300 ring-2 ring-white dark:bg-gray-500 dark:ring-gray-900`}
                ></span>
            </span>

            <span className="relative inline-block">
                <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className={`size-8 ${radiusType} outline -outline-offset-1 outline-black/5 dark:outline-white/10`}
                />
                <span
                    className={`absolute ${placeLocation} right-0 block size-2 rounded-full bg-red-400 ring-2 ring-white dark:bg-red-500 dark:ring-gray-900`}
                ></span>
            </span>

            <span className="relative inline-block">
                <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className={`size-10 ${radiusType} outline -outline-offset-1 outline-black/5 dark:outline-white/10`}
                />
                <span
                    className={`absolute ${placeLocation} right-0 block size-2.5 rounded-full bg-green-400 ring-2 ring-white dark:bg-green-500 dark:ring-gray-900`}
                ></span>
            </span>

            <span className="relative inline-block">
                <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className={`size-12 ${radiusType} outline -outline-offset-1 outline-black/5 dark:outline-white/10`}
                />
                <span
                    className={`absolute ${placeLocation} right-0 block size-3 rounded-full bg-gray-300 ring-2 ring-white dark:bg-gray-500 dark:ring-gray-900`}
                ></span>
            </span>

            <span className="relative inline-block">
                <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className={`size-14 ${radiusType} outline -outline-offset-1 outline-black/5 dark:outline-white/10`}
                />
                <span
                    className={`absolute ${placeLocation} right-0 block size-3.5 rounded-full bg-red-400 ring-2 ring-white dark:bg-red-500 dark:ring-gray-900`}
                ></span>
            </span>

            <span className="relative inline-block">
                <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    className={`size-16 ${radiusType} outline -outline-offset-1 outline-black/5 dark:outline-white/10`}
                />
                <span
                    className={`absolute ${placeLocation} right-0 block size-4 rounded-full bg-green-400 ring-2 ring-white dark:bg-green-500 dark:ring-gray-900`}
                ></span>
            </span>
        </div>
    )
}

export default Notification

import React from 'react'

const List = ({ children }: { children: React.ReactNode }) => (
    <ul
        role="list"
        className="mx-auto w-[40rem] divide-y divide-gray-200 dark:divide-white/10"
    >
        {children}
    </ul>
)

export default List

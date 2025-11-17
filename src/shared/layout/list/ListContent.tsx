import React from 'react'

const ListContent = ({
    title,
    children,
}: {
    title: string
    children: React.ReactNode
}) => (
    <li className="py-10">
        <span className="mb-4 block">{title}</span>
        <div className="flex items-center justify-center gap-10">
            {children}
        </div>
    </li>
)

export default ListContent

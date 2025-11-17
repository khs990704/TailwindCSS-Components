import React from 'react'
import { GroupAvatarContext } from './GroupAvatarContext'

const GroupAvatar = ({
    to = 'top',
    space = 1,
    children,
}: {
    to?: string
    space?: number
    children: React.ReactNode
}) => {
    const toClass = to === 'bottom' ? 'isolate' : 'flex'
    const spaceClass = `-space-x-${space}`

    return (
        <GroupAvatarContext.Provider value={true}>
            <div className={`${toClass} ${spaceClass} overflow-hidden`}>
                {children}
            </div>
        </GroupAvatarContext.Provider>
    )
}

export default GroupAvatar

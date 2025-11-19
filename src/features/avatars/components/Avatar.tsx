import React, { useContext } from 'react'
import InitialAvatar from 'src/features/avatars/components/avatarType/InitialAvatar.tsx'
import IconAvatar from 'src/features/avatars/components/avatarType/IconAvatar.tsx'
import ImgAvatar from 'src/features/avatars/components/avatarType/ImgAvatar.tsx'
import { GroupAvatarContext } from 'src/features/avatars/components/avatarType/GroupAvatarContext.tsx'

const Avatar = ({
    shape = 'circular',
    size = 10,
    type = 'icon',
    src = '',
    text = '',
    textSize = '',
    status = '',
    statusSize = 3,
    locate = '',
    caption = '',
    captionSize = '',
    subCaption = '',
    subCaptionSize = '',
    href = '',
}: {
    shape?: string
    size?: number
    type?: string
    src?: string
    text?: string
    textSize?: string
    status?: string
    statusSize?: number
    locate?: string
    caption?: string
    captionSize?: string
    subCaption?: string
    subCaptionSize?: string
    href?: string
}) => {
    const isGrouped = useContext(GroupAvatarContext)

    const groupClass = isGrouped ? 'ring-2 ring-white dark:ring-gray-900' : ''
    const shapeClass = shape === 'rounded' ? 'rounded-md' : 'rounded-full'
    const sizeClass = `size-${size}`
    const textSizeClass = textSize === '' ? '' : `text-${textSize}`
    const statusClass =
        status === ''
            ? ''
            : status === 'offline'
              ? 'bg-gray-300 ring-2 dark:bg-gray-500'
              : status === 'disable'
                ? 'bg-red-400 ring-2 dark:bg-red-500'
                : 'bg-green-400 ring-2 dark:bg-green-500'
    const statusSizeClass = `size-${statusSize}`
    const locateClass = locate === 'top' ? 'top-0' : 'bottom-0'
    const captionSizeClass = captionSize ? `text-${captionSize}` : ''
    const subCaptionSizeClass = subCaptionSize ? `text-${subCaptionSize}` : ''

    if (type === 'img') {
        return (
            <ImgAvatar
                group={groupClass}
                shape={shapeClass}
                size={sizeClass}
                src={src}
                status={statusClass}
                statusSize={statusSizeClass}
                locate={locateClass}
                caption={caption}
                captionSize={captionSizeClass}
                subCaption={subCaption}
                subCaptionSize={subCaptionSizeClass}
                href={href}
            />
        )
    }
    if (type === 'initial') {
        return (
            <InitialAvatar
                group={groupClass}
                shape={shapeClass}
                size={sizeClass}
                text={text}
                textSize={textSizeClass}
                status={statusClass}
                statusSize={statusSizeClass}
                locate={locateClass}
                caption={caption}
                captionSize={captionSizeClass}
                subCaption={subCaption}
                subCaptionSize={subCaptionSizeClass}
                href={href}
            />
        )
    }
    return (
        <IconAvatar
            group={groupClass}
            shape={shapeClass}
            size={sizeClass}
            src={src}
            status={statusClass}
            statusSize={statusSizeClass}
            locate={locateClass}
            caption={caption}
            captionSize={captionSizeClass}
            subCaption={subCaption}
            subCaptionSize={subCaptionSizeClass}
            href={href}
        />
    )
}

export default Avatar

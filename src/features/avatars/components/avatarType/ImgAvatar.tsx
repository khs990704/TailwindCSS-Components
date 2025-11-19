import React from 'react'
import HrefWrapper from 'src/features/avatars/components/avatarType/HrefWrapper.tsx'

const ImgAvatar = ({
    group,
    shape,
    size,
    src,
    status,
    statusSize,
    locate,
    caption,
    captionSize,
    subCaption,
    subCaptionSize,
    href,
}: {
    group: string
    shape: string
    size: string
    src: string
    status: string
    statusSize: string
    locate: string
    caption: string
    captionSize: string
    subCaption: string
    subCaptionSize: string
    href: string
}) => {
    return (
        <HrefWrapper href={href}>
            <span className="relative inline-block">
                <img
                    src={src}
                    alt=""
                    className={`inline-block ${size} ${shape} outline -outline-offset-1 outline-black/5 dark:outline-white/10 ${group}`}
                />
                {status !== '' && (
                    <span
                        className={`absolute ${locate} right-0 block ${statusSize} rounded-full ring-2 ${status} ring-white dark:ring-gray-900`}
                    ></span>
                )}
            </span>
            {caption !== '' && (
                <div className="ml-3">
                    <p
                        className={`${captionSize} font-medium text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-white`}
                    >
                        {caption}
                    </p>
                    {subCaption !== '' && (
                        <p
                            className={`${subCaptionSize} font-medium text-gray-500 group-hover:text-gray-700 dark:text-gray-400 group-hover:dark:text-gray-300`}
                        >
                            {subCaption}
                        </p>
                    )}
                </div>
            )}
        </HrefWrapper>
    )
}

export default ImgAvatar

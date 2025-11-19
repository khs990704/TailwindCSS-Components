import React from 'react'
import HrefWrapper from 'src/features/avatars/components/avatarType/HrefWrapper.tsx'

const IconAvatar = ({
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
            <span className={`relative inline-block ${size}`}>
                <span
                    className={`inline-block size-full overflow-hidden ${shape} bg-gray-100 outline -outline-offset-1 outline-black/5 dark:bg-gray-800 dark:outline-white/10 ${group}`}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-full text-gray-300 dark:text-gray-600"
                    >
                        <path d={src} />
                    </svg>
                </span>
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

export default IconAvatar

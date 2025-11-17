import React from 'react'

const HrefWrapper = ({ href, children }: { href: string, children: React.ReactNode }) => {
    if (href) {
        return (
            <a href={href} className="group block shrink-0">
                <div className="flex items-center">
                    {children}
                </div>
            </a>
        )
    }
    return <>{children}</>
}

export default HrefWrapper
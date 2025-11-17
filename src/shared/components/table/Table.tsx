import * as React from 'react'

function Table({ style, className, ...props }: React.ComponentProps<'table'>) {
    return (
        <div
            data-slot="table-container"
            className="relative w-full overflow-x-auto"
            style={style}
        >
            <table
                data-slot="table"
                className={[
                    'w-full table-fixed [caption-side:bottom] border-collapse text-[1.4rem]',
                    className,
                ]
                    .filter(Boolean)
                    .join(' ')}
                {...props}
            />
        </div>
    )
}

function TableHeader({
    style,
    className,
    ...props
}: React.ComponentProps<'thead'>) {
    return (
        <thead
            data-slot="table-header"
            className={[
                'border-b border-[#e5e7eb] [box-shadow:0_6px_0_#fff]',
                'dark:border-[#444] dark:[box-shadow:0_6px_0_#212937]',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
            style={style}
            {...props}
        />
    )
}

function TableHead({ style, className, ...props }: React.ComponentProps<'th'>) {
    return (
        <th
            data-slot="table-head"
            className={[
                'h-[4rem] bg-[#F4F5F7] p-[1.2rem] text-center align-middle text-[1.6rem] font-[700] whitespace-nowrap text-[#6C6E77]',
                'dark:bg-[#222] dark:text-[#bbb]',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
            style={style}
            {...props}
        />
    )
}

function TableBody({
    style,
    className,
    ...props
}: React.ComponentProps<'tbody'>) {
    return (
        <tbody
            data-slot="table-body"
            className={className}
            style={style}
            {...props}
        />
    )
}

function TableRow({ style, className, ...props }: React.ComponentProps<'tr'>) {
    return (
        <tr
            data-slot="table-row"
            className={[
                'border-b border-[#e5e7eb] transition-colors duration-200',
                'hover:bg-[#f9fafb]',
                'hover:[&>td]:bg-[#f9fafb]', // 자식 td에도 적용
                'dark:border-[#444] dark:hover:bg-[#333] dark:hover:[&>td]:bg-[#333]',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
            style={style}
            {...props}
        />
    )
}

function TableCell({
    style,
    className,
    children,
    ...props
}: React.ComponentProps<'td'>) {
    const title = typeof children === 'string' ? children : undefined

    return (
        <td
            data-slot="table-cell"
            className={['p-[0.8rem] pl-[1.1rem] align-middle', className]
                .filter(Boolean)
                .join(' ')}
            style={style}
            {...props}
        >
            <div
                className="w-full overflow-hidden text-ellipsis whitespace-nowrap"
                title={title}
            >
                {children}
            </div>
        </td>
    )
}

// Unused in this project
// function TableFooter({
//     style,
//     className,
//     ...props
// }: React.ComponentProps<'tfoot'>) {
//     return (
//         <tfoot
//             data-slot="table-footer"
//             className={[
//                 'border-t border-[#e5e7eb] bg-[#f9fafb] font-[500]',
//                 'dark:border-[#444] dark:bg-[#222]',
//                 className,
//             ]
//                 .filter(Boolean)
//                 .join(' ')}
//             style={style}
//             {...props}
//         />
//     )
// }

// Unused in this project
// function TableCaption({
//     style,
//     className,
//     ...props
// }: React.ComponentProps<'caption'>) {
//     return (
//         <caption
//             data-slot="table-caption"
//             className={[
//                 'mt-[1.6rem] text-[1.4rem] text-[#6b7280]',
//                 'dark:text-[#bbb]',
//                 className,
//             ]
//                 .filter(Boolean)
//                 .join(' ')}
//             style={style}
//             {...props}
//         />
//     )
// }

export {
    Table,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    // TableFooter,
    // TableCaption,
}

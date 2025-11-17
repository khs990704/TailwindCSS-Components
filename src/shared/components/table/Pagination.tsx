import * as React from 'react'

function Pagination({
    total,
    perPage,
    currentPage,
    onPageChange,
}: {
    total: number
    perPage: number
    currentPage: number
    onPageChange: (page: number) => void
}) {
    const totalPages = Math.ceil(total / perPage)

    const maxVisible = 5
    const pages: (number | string)[] = []

    if (totalPages <= maxVisible) {
        for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
        const left = Math.max(2, currentPage - 1)
        const right = Math.min(totalPages - 1, currentPage + 1)

        pages.push(1)
        if (left > 2) pages.push('...')
        for (let i = left; i <= right; i++) pages.push(i)
        if (right < totalPages - 1) pages.push('...')
        pages.push(totalPages)
    }

    return (
        <div className="mt-[1.2rem] flex items-center justify-center gap-[0.8rem]">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className={[
                    'rounded-[0.4rem] border border-[#e5e7eb] px-[0.8rem] py-[0.4rem]',
                    'cursor-pointer disabled:cursor-not-allowed',
                    'bg-white disabled:bg-[#f3f4f6]',
                    'dark:border-[#444] dark:bg-[#333] dark:text-white dark:disabled:bg-[#222] dark:disabled:text-[#666]',
                ].join(' ')}
            >
                이전
            </button>

            {pages.map((page, idx) =>
                page === '...' ? (
                    <span
                        key={`ellipsis-${idx}`}
                        className="px-[0.8rem] py-[0.4rem] dark:text-[#bbb]"
                    >
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page as number)}
                        className={[
                            'cursor-pointer rounded-[0.4rem] border border-[#e5e7eb] px-[0.8rem] py-[0.4rem]',
                            page === currentPage
                                ? 'bg-[#e5e7eb] font-[700]'
                                : 'bg-white font-normal',
                            page === currentPage
                                ? 'dark:border-[#555] dark:bg-[#555] dark:text-white'
                                : 'dark:border-[#444] dark:bg-[#333] dark:text-white',
                        ].join(' ')}
                    >
                        {page}
                    </button>
                ),
            )}

            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className={[
                    'rounded-[0.4rem] border border-[#e5e7eb] px-[0.8rem] py-[0.4rem]',
                    'cursor-pointer disabled:cursor-not-allowed',
                    'bg-white disabled:bg-[#f3f4f6]',
                    'dark:border-[#444] dark:bg-[#333] dark:text-white dark:disabled:bg-[#222] dark:disabled:text-[#666]',
                ].join(' ')}
            >
                다음
            </button>
        </div>
    )
}

export { Pagination }

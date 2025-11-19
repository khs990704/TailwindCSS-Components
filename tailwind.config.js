/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                pretendard: ['Pretendard', 'Poppins', 'sans-serif']
            }
        },
    },
    safelist: [
        'size-2',
        'size-3',
        'size-4',
        'size-6',
        'size-8',
        'size-10',
        'size-12',
        'size-14',
        'size-16',
        'size-18',
        'size-20',
        'size-22',
        '-space-x-1',
        '-space-x-2',
        '-space-x-3',
        '-space-x-4',
    ],
    plugins: [],
}

import { useContext } from 'react'
import { ThemeContext } from 'src/shared/lib/shadcn/components/ThemeContext.tsx'

const ThemeToggleButton = ({ variant }: { variant: 'home' | 'chat' }) => {
    const { theme, setTheme } = useContext(ThemeContext)

    const isHome = variant === 'home'

    return (
        <div className="flex w-full justify-end">
            <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className={[
                    isHome ? 'mt-[2rem] mr-[1.5rem] ml-auto' : '',

                    'rounded-full bg-gray-200 p-2 dark:bg-gray-800',
                ].join(' ')}
            >
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </div>
    )
}

export default ThemeToggleButton

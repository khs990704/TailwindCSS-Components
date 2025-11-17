import { Toaster } from 'sonner'
import { useContext } from 'react'
import { ThemeContext } from 'src/shared/lib/shadcn/components/ThemeContext.tsx'

export default function ThemeToaster() {
    const { theme } = useContext(ThemeContext)
    return (
        <Toaster
            theme={theme}
            richColors
            position="top-center"
            duration={2500}
        />
    )
}

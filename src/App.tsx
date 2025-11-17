import { RouterProvider } from 'react-router'
import router from 'src/app/router/router.tsx'
import useRouteListener from 'src/app/router/useRouteListener.tsx'
import { ThemeProvider } from 'src/shared/lib/shadcn/components/ThemeProvider.tsx'
import { useEffect } from 'react'
import ThemeToaster from 'src/shared/lib/shadcn/components/ThemeToaster.tsx'

function App() {
    useRouteListener()

    useEffect(() => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const root = document.documentElement
                const computedBg =
                    getComputedStyle(root).getPropertyValue('--background')

                if (computedBg?.trim()) {
                    root.style.backgroundColor = ''
                    document.body.classList.remove('preload')
                    document.documentElement.classList.remove('theme-instant')
                }
            })
        })
    }, [])

    return (
        <ThemeProvider>
            <RouterProvider router={router} />
            <ThemeToaster />
        </ThemeProvider>
    )
}

export default App

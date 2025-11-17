import React, {
    useEffect,
    useRef,
    forwardRef,
    TextareaHTMLAttributes,
} from 'react'

interface AutoResizeTextareaProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    maxHeight?: number
}

const AutoResizeTextarea = forwardRef<
    HTMLTextAreaElement,
    AutoResizeTextareaProps
>(({ maxHeight = 200, style, ...props }, ref) => {
    const internalRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        const textarea = internalRef.current
        if (textarea) {
            const handleInput = () => {
                textarea.style.height = 'auto'
                textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`
            }

            textarea.addEventListener('input', handleInput)

            // Initial resize on mount
            handleInput()

            return () => {
                textarea.removeEventListener('input', handleInput)
            }
        }
    }, [maxHeight])

    const prevValueRef = useRef<
        string | number | readonly string[] | undefined
    >(props.value)
    useEffect(() => {
        const textarea = internalRef.current
        if (!textarea) return
        const prev = prevValueRef.current ?? ''
        const curr = props.value ?? ''
        if (prev !== '' && curr === '') {
            requestAnimationFrame(() => {
                textarea.style.height = ''
            })
        }
        prevValueRef.current = props.value
    }, [props.value])

    const combinedRef = (el: HTMLTextAreaElement) => {
        internalRef.current = el
        if (typeof ref === 'function') {
            ref(el)
        } else if (ref) {
            ref.current = el
        }
    }

    return (
        <textarea
            ref={combinedRef}
            style={{ ...style, overflowY: 'auto' }}
            {...props}
        />
    )
})

AutoResizeTextarea.displayName = 'AutoResizeTextarea'

export default AutoResizeTextarea

import axios from 'axios'

export const client = axios.create({
    // dev
    baseURL: 'http://127.0.0.1:9000/api/',
    // baseURL: window.location.origin + '/api/',
    // withCredentials: true,

    // prod
    // baseURL: 'http://192.168.1.214:9000/api/',

    // import.meta.env.VITE_API_HOST,
    // xsrfCookieName: 'csrftoken',
    // xsrfHeaderName: 'X-CSRFToken',
})

const FASTAPI_BASE_URL = 'http://172.7.0.35:8800/stream_generate'
// const FASTAPI_BASE_URL = 'http://192.168.153.2:8800/stream_generate'

export async function* streamFetch(
    body: unknown,
    // use when cancel function needed while streaming
    // signal?: AbortSignal,
): AsyncGenerator<string> {
    const init: RequestInit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    }
    const result = await fetch(FASTAPI_BASE_URL, init)

    if (!result.body) throw new Error('No response body')
    const reader = result.body.getReader()

    const decoder = new TextDecoder('utf-8')
    try {
        while (true) {
            const { done, value } = await reader.read()
            if (done) break
            yield decoder.decode(value, { stream: true })
        }
    } finally {
        reader.releaseLock()
    }
}

export const context = axios.create({
    // dev
    baseURL: 'http://172.7.0.35:8801/',

    // prod
    // baseURL: 'http://192.168.153.2:8801/'
})

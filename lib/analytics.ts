export function track(event: string, params?: Record<string, any>) {
if (typeof window === 'undefined') return
// gtag padrão GA4
// @ts-ignore
window.gtag && window.gtag('event', event, params || {})
}
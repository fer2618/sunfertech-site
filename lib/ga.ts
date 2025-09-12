// Simples helper para enviar eventos GA4
export function gtag(...args: any[]){
// @ts-ignore
window.dataLayer = window.dataLayer || []
// @ts-ignore
window.dataLayer.push(args)
}


export function trackWhatsApp(){
gtag('event','whatsapp_click',{event_category:'engagement'})
}
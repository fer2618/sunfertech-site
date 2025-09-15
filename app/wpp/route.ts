// app/wpp/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const utm_source = url.searchParams.get('utm_source') ?? 'direct'
  const utm_medium = url.searchParams.get('utm_medium') ?? 'none'
  const utm_campaign = url.searchParams.get('utm_campaign') ?? 'none'
  const textQuery = url.searchParams.get('text')
  const referer = req.headers.get('referer') ?? 'unknown'

  // Número da assistência (centralizado no server)
  const phone = '5519971344065' // seu número

  // Mensagem padrão se não vier `text`
  const text = textQuery?.trim() || 'Olá Sunfertech! Quero um orçamento.'
  const wa = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`

  // Log opcional
  console.log('[WPP_CLICK]', {
    ts: new Date().toISOString(),
    utm_source, utm_medium, utm_campaign, referer,
    text_preview: text.slice(0, 80)
  })

  return NextResponse.redirect(wa, { status: 302 })
}


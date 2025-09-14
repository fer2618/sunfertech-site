// app/wpp/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const utm_source = url.searchParams.get('utm_source') ?? 'direct'
  const utm_medium = url.searchParams.get('utm_medium') ?? 'none'
  const utm_campaign = url.searchParams.get('utm_campaign') ?? 'none'
  const referer = req.headers.get('referer') ?? 'unknown'

  // Registre o clique (troque por seu endpoint/telemetria se quiser)
  console.log('[WPP_CLICK]', {
    ts: new Date().toISOString(),
    utm_source, utm_medium, utm_campaign, referer,
  })

  // Número e mensagem
  const phone = '5519971344065'
  const text = 'Olá Sunfertech! Quero um orçamento.'
  const wa = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`

  return NextResponse.redirect(wa, { status: 302 })
}

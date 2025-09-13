export default function sitemap() {
  const base = 'https://sunfertech.vercel.app'
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/qualidade-das-pecas`, lastModified: new Date() },
    { url: `${base}/garantia`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    // Novas páginas de serviços
    { url: `${base}/servicos/troca-de-tela`, lastModified: new Date() },
    { url: `${base}/servicos/troca-de-bateria`, lastModified: new Date() },
    { url: `${base}/servicos/troca-de-conector`, lastModified: new Date() },
    { url: `${base}/servicos/reparo-de-placa`, lastModified: new Date() },
    { url: `${base}/servicos/reparo-de-software`, lastModified: new Date() },
  ]
}
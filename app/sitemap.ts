export default function sitemap() {
const base = 'https://sunfertech.vercel.app'
return [
{ url: `${base}/`, lastModified: new Date() },
{ url: `${base}/qualidade-das-pecas`, lastModified: new Date() },
{ url: `${base}/garantia`, lastModified: new Date() },
{ url: `${base}/blog`, lastModified: new Date() },
]
}
import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../config/site'

interface SeoProps {
  title: string
  description: string
  path?: string
}

export default function Seo({ title, description, path = '/' }: SeoProps) {
  const fullTitle = `${title} | ${siteConfig.name}`
  const url = `https://${siteConfig.domain}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteConfig.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

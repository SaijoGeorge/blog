import React from "react"
import Helmet from "react-helmet"

const websiteName = "CSS Puns"
const websiteURL = "https://saijogeorge.com/css-puns/"

const Meta = ({ currentPun }) => {
  const title = `${currentPun.title} - CSS Puns T-shirt 👕 & Mugs ~ Saijo George`
  const description = `P̶u̶n̶n̶y̶ Funny CSS for ${currentPun.title}. Get it on a 👕 for your designer friends.`
  const image = `${websiteURL}_assets/puns/${currentPun.slug}.png`
  const color = currentPun.color

  return (
    <Helmet>
      <html lang="en" />

      <meta name="charset" content="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="theme-color" content={color} />

      <link rel="icon" href="/css-puns/_assets/icons/64.png" />
      <link rel="manifest" href="/css-puns/_assets/manifest.json" />

      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />

      <meta
        name="article:author"
        content="https://www.facebook.com/SaijoGeorge"
      />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={websiteURL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@SaijoGeorge" />
      <meta name="twitter:domain" content={websiteURL} />

      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "Website",
          "name": "${websiteName}",
          "url": "${websiteURL}"
        }
      `}</script>
    </Helmet>
  )
}

export default Meta

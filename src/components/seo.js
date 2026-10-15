import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  lang,
  meta,
  title,
  pathname,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  noindex,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            phone
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const siteUrl = (site.siteMetadata.siteUrl || "").replace(/\/$/, "")
  const canonical = pathname
    ? `${siteUrl}${pathname.startsWith("/") ? pathname : `/${pathname}`}`
    : siteUrl

  const ogImage = image
    ? `${siteUrl}${image.startsWith("/") ? image : `/${image}`}`
    : `${siteUrl}/images/logo.jpeg`

  const fullTitle = title || site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={fullTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={canonical ? [{ rel: "canonical", href: canonical }] : []}
      meta={[
        { name: "description", content: metaDescription },
        ...(noindex
          ? [
              { name: "robots", content: "noindex,nofollow" },
              { name: "googlebot", content: "noindex,nofollow" },
            ]
          : []),
        { property: "og:title", content: fullTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "website" },
        ...(canonical ? [{ property: "og:url", content: canonical }] : []),
        { property: "og:site_name", content: site.siteMetadata.title },
        { property: "og:locale", content: "he_IL" },
        { property: "og:image", content: ogImage },
        { property: "og:image:secure_url", content: ogImage },
        ...(imageWidth && imageHeight
          ? [
              { property: "og:image:width", content: String(imageWidth) },
              { property: "og:image:height", content: String(imageHeight) },
            ]
          : []),
        { property: "og:image:alt", content: imageAlt || site.siteMetadata.title },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:creator", content: site.siteMetadata.author },
        { name: "twitter:title", content: fullTitle },
        { name: "twitter:description", content: metaDescription },
        { name: "twitter:image", content: ogImage },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CateringBusiness",
          name: site.siteMetadata.title,
          url: canonical || siteUrl,
          description: metaDescription,
          telephone: site.siteMetadata.phone,
          image: ogImage,
        })}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: "he",
  meta: [],
  description: "",
  pathname: "/",
  image: null,
  imageAlt: null,
  imageWidth: null,
  imageHeight: null,
  noindex: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  pathname: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  noindex: PropTypes.bool,
}

export default SEO
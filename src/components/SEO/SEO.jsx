// src/components/SEO/SEO.jsx

import React from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  siteName = "Moin Consultancy",
  twitterHandle = "",
  author = "Moin Consultancy",
  language = "en",
  publishedTime,
  modifiedTime,
}) => {
  const baseUrl = "https://moinconsultancy.com";

  const finalUrl = url
    ? `${baseUrl}${url}`
    : baseUrl;

  // Handle local images and external images
  const finalImage =
    image && (image.startsWith("http://") || image.startsWith("https://"))
      ? image
      : image
      ? `${baseUrl}${image}`
      : `${baseUrl}/og-image.jpg`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Moin Consultancy",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [],
  };

  return (
    <Helmet>
      {/* Page Title */}
      <title>
        {title ? `${title} | Moin Consultancy` : "Moin Consultancy"}
      </title>

      {/* Basic SEO */}
      <meta
        name="description"
        content={description || "Moin Consultancy"}
      />

      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}

      <meta
        name="author"
        content={author}
      />

      <html lang={language} />

      {/* Canonical */}
      <link
        rel="canonical"
        href={finalUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:title"
        content={title || "Moin Consultancy"}
      />

      <meta
        property="og:description"
        content={description || "Moin Consultancy"}
      />

      <meta
        property="og:image"
        content={finalImage}
      />

      <meta
        property="og:url"
        content={finalUrl}
      />

      <meta
        property="og:site_name"
        content="Moin Consultancy"
      />

      {publishedTime && (
        <meta
          property="article:published_time"
          content={publishedTime}
        />
      )}

      {modifiedTime && (
        <meta
          property="article:modified_time"
          content={modifiedTime}
        />
      )}

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      {twitterHandle && (
        <meta
          name="twitter:creator"
          content={twitterHandle}
        />
      )}

      <meta
        name="twitter:title"
        content={title || "Moin Consultancy"}
      />

      <meta
        name="twitter:description"
        content={description || "Moin Consultancy"}
      />

      <meta
        name="twitter:image"
        content={finalImage}
      />

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  siteName: PropTypes.string,
  twitterHandle: PropTypes.string,
  author: PropTypes.string,
  language: PropTypes.string,
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
};

export default SEO;
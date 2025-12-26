import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords = "",
  canonical,
  image = "https://satotra.com/og-image.jpg",
}) => {
  const siteName = "Satotra Travels";
  const fullTitle = title
    ? `${title} | ${siteName}`
    : siteName;

  const metaDescription =
    description ||
    "Book trusted tour packages, rentals, and local guides in Dehradun. Affordable travel plans with verified guides.";

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle.slice(0, 60)}</title>
      <meta name="description" content={metaDescription.slice(0, 160)} />
      {keywords && <meta name="keywords" content={keywords} />}

      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
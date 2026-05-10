import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../config/site';

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

export default function Seo({ title, description, path }: SeoProps) {
  const canonical = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  const ogImage = `${SITE_URL}/homepage2.jpg`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="City Wide Custodial" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_CA" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

/** Production origin with no trailing slash. Set VITE_SITE_URL when deploying to a different host. */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') ?? 'https://www.citywidecustodial.com'
);

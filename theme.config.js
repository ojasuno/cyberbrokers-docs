export default {
  github: 'https://github.com/ojasuno/cyberbrokers-docs',
  docsRepositoryBase: 'https://github.com/ojasuno/cyberbrokers-docs/blob/master',
  titleSuffix: '.xyz',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">3R4N0VUM</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Trust, but Validate.
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Tust, but validate" />
      <meta name="og:description" content="Trust, but validate" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://www.eranovum.xyz/eranovum.png" />
      <meta name="twitter:site:domain" content="3r4n0vum.xyz" />
      <meta name="twitter:url" content="https://3r4n0vum.xyz/" />
      <meta name="og:title" content="Trust, but validate" />
      <meta name="og:image" content="https://www.eranovum.xyz/eranovum.png" />
      <meta name="apple-mobile-web-app-title" content="ERANOVUM" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'GitHub',
  footerText: <>MIT {new Date().getFullYear()} © 3R4N0VUM.</>,
  unstable_faviconGlyph: '🖖',
  defaultMenuCollapsed: true,
}

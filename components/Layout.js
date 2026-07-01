import Nav from './Nav';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children, title, description, ogImage }) {
  const siteTitle = title ? `${title} — Blitora` : 'Blitora — Powering Progress.';
  const siteDesc = description || 'Blitora builds fast, simple cloud software for growing businesses everywhere. One platform, a family of focused products.';

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage || '/assets/og-image.png'} />
        <meta property="og:site_name" content="Blitora" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@blitorahq" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://blitora.com" />
      </Head>
      <div style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

import Head from 'next/head';
import { useEffect } from 'react';
import { SITE_HTML, SITE_JS } from '../lib/corpSite';

export default function Home() {
  useEffect(() => {
    const root = document.getElementById('corp-root');
    if (!root || root.dataset.mounted) return;
    root.dataset.mounted = '1';
    root.innerHTML = SITE_HTML;

    const runSite = () => {
      const s = document.createElement('script');
      s.id = 'corp-site-js';
      s.textContent = SITE_JS;
      document.body.appendChild(s);
    };

    if (typeof window.Matter !== 'undefined') {
      runSite();
    } else {
      const m = document.createElement('script');
      m.src = 'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js';
      m.onload = runSite;
      m.onerror = runSite;
      document.body.appendChild(m);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Blitora — Cloud Business Software Platform | India & Gulf</title>
        <meta name="description" content="Blitora builds AI-powered cloud SaaS software for businesses across India and the Gulf. Products: Blitora Pulse (AI health platform), Blitora CRM, Blitora Serve (restaurants & cloud kitchens), Blitora People (HR & payroll). Fast to deploy, simple to run, powerful at scale." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Blitora, cloud software India, SaaS UAE, SaaS Gulf, health management software India, dietitian software, CRM India, restaurant management software, HR payroll software India, AI health platform, business software Pune, business software Dubai" />
        <meta name="author" content="Blitora" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.blitora.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blitora — Powering Progress." />
        <meta property="og:description" content="One platform, many products, every industry. AI-powered cloud SaaS for health, sales, restaurants and HR — built for India and the Gulf." />
        <meta property="og:url" content="https://www.blitora.com" />
        <meta property="og:site_name" content="Blitora" />
        <meta property="og:image" content="https://www.blitora.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blitora — Powering Progress." />
        <meta name="twitter:description" content="Cloud SaaS for India & Gulf. Health, CRM, kitchens, HR — one login, one platform, every industry." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Blitora",
          "url": "https://www.blitora.com",
          "logo": "https://www.blitora.com/logo.png",
          "description": "Multi-product AI-powered cloud SaaS platform for businesses in India and the Gulf region.",
          "foundingDate": "2026",
          "areaServed": ["IN", "AE", "SA", "QA", "KW"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Blitora Product Suite",
            "itemListElement": [
              {"@type": "Offer", "name": "Blitora Pulse", "description": "AI-powered health management platform for dietitians and clinics"},
              {"@type": "Offer", "name": "Blitora CRM", "description": "CRM and sales platform for India and Gulf businesses"},
              {"@type": "Offer", "name": "Blitora Serve", "description": "Cloud kitchen and restaurant management software"},
              {"@type": "Offer", "name": "Blitora People", "description": "HR, attendance and payroll software"}
            ]
          }
        })}} />
      </Head>
      <div id="corp-root" style={{ minHeight: '100vh', background: '#070F26' }} />
    </>
  );
}

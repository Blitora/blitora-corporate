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
        <title>Blitora — Powering Progress.</title>
        <meta name="description" content="Blitora is a new-age cloud software company building fast, simple, and powerful SaaS products — Blitora Pulse for health, with CRM, Serve, People, ERP, HMIS, and Commerce on the way." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Blitora — Powering Progress." />
        <meta property="og:description" content="One platform, many products, every industry. Blitora Pulse is launching now; CRM and Serve are in the workshop." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Blitora" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://blitora.com" />
      </Head>
      <div id="corp-root" style={{ minHeight: '100vh', background: '#070F26' }} />
    </>
  );
}

# blitora-corporate

Corporate website for **blitora.com** — the Blitora platform homepage.

## Purpose
This repo contains the source code for the Blitora corporate website. It serves as the platform-level homepage linking to all Blitora products.

## Tech Stack
- Next.js 14 (Pages Router)
- Tailwind CSS
- Vercel (auto-deploy from main branch)
- Domain: blitora.com (DNS via Hostinger)

## Structure
```
pages/
  index.js          # Home
  products.js       # Product suite overview
  blog/             # Blog listing + individual posts
  about.js          # Company story + values
  contact.js        # Contact form (Resend API)
components/
  Nav.js
  Footer.js
  Layout.js
lib/
  resend.js         # Contact form email handler
public/
  assets/           # Logos, OG images
```

## Deployment
- Vercel project: blitora-corporate
- Production URL: https://blitora.com
- Preview URL: auto-generated per PR

## Brand
- Navy `#0D1B3E` + Orange `#E8560A`
- Font: Poppins (Google Fonts)
- See: Blitora Master Brand Guidelines v1.0

## Related Repos
- [blitora-pulse](https://github.com/Blitora/blitora-pulse) — Blitora Pulse app
- [blitora-pulse-site](https://github.com/Blitora/blitora-pulse-site) — Pulse marketing site
- [blitora-ui](https://github.com/Blitora/blitora-ui) — Shared component library

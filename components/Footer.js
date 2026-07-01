import Link from 'next/link';
import Image from 'next/image';

const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const socials = [
  { label: 'X', icon: XIcon, href: 'https://x.com/blitorahq' },
  { label: 'LinkedIn', icon: LinkedInIcon, href: 'https://linkedin.com/company/blitora' },
  { label: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com/blitorahq' },
  { label: 'YouTube', icon: YouTubeIcon, href: 'https://youtube.com/@blitora' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D1B3E' }} className="pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/assets/logos/icon.png" alt="Blitora" width={32} height={32} />
              <span className="font-extrabold text-white text-[15px]">BLITORA</span>
            </div>
            <p className="text-[13.5px] leading-relaxed max-w-xs mb-6" style={{ color: '#9AA3BD' }}>
              A multi-product SaaS platform building fast, simple software for businesses everywhere.
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-[12px] font-bold uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5 text-[13.5px]" style={{ color: '#9AA3BD' }}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[12px] font-bold uppercase tracking-widest mb-4">Products</h4>
            <ul className="space-y-2.5 text-[13.5px]" style={{ color: '#9AA3BD' }}>
              <li>
                <a href="https://pulse.blitora.com" className="hover:text-white transition-colors flex items-center gap-1.5">
                  Blitora Pulse
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </li>
              <li><span style={{ color: '#6B7494' }}>More coming soon</span></li>
            </ul>
            <div className="mt-8">
              <h4 className="text-white text-[12px] font-bold uppercase tracking-widest mb-3">Contact</h4>
              <a href="mailto:hello@blitora.com"
                className="text-[13.5px] flex items-center gap-1.5 hover:text-white transition-colors"
                style={{ color: '#9AA3BD' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                hello@blitora.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between text-[12px]" style={{ color: '#6B7494' }}>
          <span>© {new Date().getFullYear()} Blitora Technologies. All rights reserved.</span>
          <span style={{ color: '#E8560A' }} className="font-semibold">Powering Progress.</span>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { href: '/',          label: 'Home' },
    { href: '/products',  label: 'Products' },
    { href: '/blog',      label: 'Blog' },
    { href: '/about',     label: 'About' },
    { href: '/contact',   label: 'Contact' },
  ];

  const isActive = (href) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-md' : ''}`}
      style={{ borderBottom: '1px solid #E0E3ED' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[66px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/assets/logos/icon.png" alt="Blitora" width={32} height={32} className="object-contain" />
          <span className="font-extrabold tracking-tight text-[16px]" style={{ color: '#0D1B3E' }}>
            BLITORA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 text-[14px] font-medium">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="px-4 py-2 rounded-full transition-all duration-150"
              style={isActive(l.href)
                ? { backgroundColor: '#0D1B3E', color: '#fff' }
                : { color: '#4A5568' }}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="/contact"
          className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-white font-semibold text-[13.5px] hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#E8560A' }}>
          Get in touch
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <div className="w-5 h-0.5 bg-navy mb-1" style={{ backgroundColor: '#0D1B3E' }} />
          <div className="w-5 h-0.5 bg-navy mb-1" style={{ backgroundColor: '#0D1B3E' }} />
          <div className="w-5 h-0.5 bg-navy" style={{ backgroundColor: '#0D1B3E' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 border-t" style={{ borderColor: '#E0E3ED', backgroundColor: '#fff' }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-[15px] font-medium border-b last:border-0"
              style={{ color: isActive(l.href) ? '#E8560A' : '#0D1B3E', borderColor: '#F5F6FA' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center py-3 rounded-full text-white font-semibold text-[14px]"
            style={{ backgroundColor: '#E8560A' }}>
            Get in touch
          </Link>
        </div>
      )}
    </header>
  );
}

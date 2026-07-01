import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const blogPosts = [
    { tag: 'SaaS Strategy', title: 'Why fast deployment beats feature bloat every time', date: 'Jun 28, 2026', slug: 'fast-deployment-vs-feature-bloat', color: '#E8560A' },
    { tag: 'Health Tech',   title: 'How digital tools are transforming dietitian practices', date: 'Jun 25, 2026', slug: 'digital-tools-dietitian-practices', color: '#1D9E75' },
    { tag: 'Cloud Industry', title: 'The shift from legacy ERP to modern cloud platforms', date: 'Jun 22, 2026', slug: 'legacy-erp-to-cloud', color: '#2B6CB0' },
  ];

  return (
    <Layout title="Powering Progress." description="Blitora builds fast, simple cloud software for growing businesses everywhere. One platform, a growing family of focused products.">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #162955 60%, #0D1B3E 100%)' }}>
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #E8560A 0%, transparent 65%)' }} />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-32 grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7 text-[12px] font-semibold tracking-widest uppercase"
              style={{ backgroundColor: 'rgba(232,86,10,0.14)', color: '#E8560A', border: '1px solid rgba(232,86,10,0.25)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              Multi-product SaaS Platform
            </div>
            <h1 className="font-extrabold text-white tracking-tight mb-6"
              style={{ fontSize: 'clamp(40px, 5.5vw, 64px)', lineHeight: 1.05 }}>
              Powering<br />
              <span style={{ color: '#E8560A' }}>Progress.</span>
            </h1>
            <p className="text-[17px] leading-relaxed mb-9 max-w-md" style={{ color: '#C4CBDE' }}>
              Blitora builds fast, simple cloud software for growing businesses everywhere —
              one platform, a growing family of focused products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[15px] text-white shadow-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#E8560A' }}>
                Explore products
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[15px]"
                style={{ color: '#fff', border: '1.5px solid rgba(255,255,255,0.25)' }}>
                About Blitora
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-[260px] h-[260px] rounded-[32px] flex items-center justify-center shadow-2xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}>
              <Image src="/assets/logos/full-white.png" alt="Blitora" width={208} height={120} className="object-contain" />
              <div className="absolute -bottom-4 -right-4 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl"
                style={{ backgroundColor: '#E8560A' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
            </div>
          </div>
        </div>

        <svg viewBox="0 0 1440 60" className="w-full -mb-px block" preserveAspectRatio="none">
          <path d="M0,60 L0,30 Q360,60 720,30 Q1080,0 1440,30 L1440,60 Z" fill="#fff" />
        </svg>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 bg-white" style={{ borderBottom: '1px solid #E0E3ED' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between gap-10">
            {[
              { num: '1+',     label: 'Live product' },
              { num: '4+',     label: 'Products in pipeline' },
              { num: '14-day', label: 'Free trial, no card needed' },
              { num: '24/7',   label: 'Platform uptime goal' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-extrabold text-[36px] leading-none" style={{ color: '#E8560A' }}>{s.num}</div>
                <div className="text-[13px] mt-1.5 font-medium" style={{ color: '#718096' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F5F6FA' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-widest" style={{ color: '#E8560A' }}>Our products</span>
              <h2 className="font-extrabold text-[28px] md:text-[34px] mt-2 tracking-tight" style={{ color: '#0D1B3E' }}>The Blitora suite</h2>
            </div>
            <Link href="/products" className="inline-flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: '#0D1B3E' }}>
              View all
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <a href="https://pulse.blitora.com"
              className="group relative rounded-2xl p-8 text-white overflow-hidden hover:scale-[1.015] transition-transform"
              style={{ background: 'linear-gradient(135deg, #0D4A35 0%, #1D9E75 100%)' }}>
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase mb-5"
                  style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block animate-pulse" /> Live now
                </span>
                <h3 className="font-extrabold text-[24px] mb-2">Blitora Pulse</h3>
                <p className="text-[13px] opacity-70 mb-4">Health &amp; Wellness</p>
                <p className="text-[15px] leading-relaxed opacity-90 mb-6 max-w-xs">
                  Health tracking and patient management for dietitians, clinics, and individuals. Powered by AI.
                </p>
                <span className="inline-flex items-center gap-2 text-[14px] font-semibold group-hover:gap-3 transition-all">
                  Visit site
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </a>
            <div className="rounded-2xl p-8 flex flex-col justify-center bg-white" style={{ border: '1.5px dashed #E0E3ED' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: '#F5F6FA' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <span className="inline-flex px-3 py-1 rounded-full text-[11px] font-bold uppercase mb-4 w-fit"
                style={{ backgroundColor: '#F5F6FA', color: '#718096' }}>In development</span>
              <h3 className="font-extrabold text-[22px] mb-2" style={{ color: '#0D1B3E' }}>More on the way</h3>
              <p className="text-[14.5px] leading-relaxed" style={{ color: '#4A5568' }}>
                We are building a platform, not a single product. Additional Blitora SaaS products are in development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-widest" style={{ color: '#E8560A' }}>From the blog</span>
              <h2 className="font-extrabold text-[28px] md:text-[34px] mt-2 tracking-tight" style={{ color: '#0D1B3E' }}>Insights &amp; ideas</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-[14px] font-semibold" style={{ color: '#0D1B3E' }}>
              All posts
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group block"
                style={{ border: '1px solid #E0E3ED' }}>
                <div className="h-1.5" style={{ backgroundColor: post.color }} />
                <div className="p-6 bg-white">
                  <span className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-4 inline-block"
                    style={{ backgroundColor: '#F5F6FA', color: '#718096' }}>{post.tag}</span>
                  <h3 className="font-bold text-[16px] leading-snug mb-3 group-hover:text-[#E8560A] transition-colors"
                    style={{ color: '#0D1B3E' }}>{post.title}</h3>
                  <p className="text-[12px]" style={{ color: '#718096' }}>{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-24" style={{ backgroundColor: '#0D1B3E' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-extrabold text-[28px] md:text-[36px] text-white mb-5 tracking-tight">
            Ready to see Blitora in action?
          </h2>
          <p className="text-[16px] md:text-[18px] mb-8" style={{ color: '#C4CBDE' }}>
            Start with Blitora Pulse — 14 days free, no credit card required.
          </p>
          <a href="https://pulse.blitora.com/signup"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[16px] text-white shadow-xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#E8560A' }}>
            Start your free trial
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>
    </Layout>
  );
}

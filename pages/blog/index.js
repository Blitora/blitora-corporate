import { useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const posts = [
  { tag: 'SaaS Strategy', title: 'Why fast deployment beats feature bloat every time', date: 'Jun 28, 2026', read: '4 min', slug: 'fast-deployment-vs-feature-bloat', color: '#E8560A' },
  { tag: 'Health Tech',   title: 'How digital tools are transforming dietitian practices in 2026', date: 'Jun 25, 2026', read: '6 min', slug: 'digital-tools-dietitian-practices', color: '#1D9E75' },
  { tag: 'Cloud Industry', title: 'The shift from legacy ERP to modern cloud platforms', date: 'Jun 22, 2026', read: '5 min', slug: 'legacy-erp-to-cloud', color: '#2B6CB0' },
  { tag: 'Product',       title: 'Introducing Blitora Pulse: health management reinvented', date: 'Jun 18, 2026', read: '3 min', slug: 'introducing-blitora-pulse', color: '#E8560A' },
  { tag: 'Business',      title: 'Multi-product SaaS: why one platform beats ten vendors', date: 'Jun 15, 2026', read: '7 min', slug: 'multi-product-saas-one-platform', color: '#1D9E75' },
  { tag: 'Cloud',         title: 'AI in SaaS: how machine learning is reshaping business software', date: 'Jun 12, 2026', read: '5 min', slug: 'ai-in-saas-machine-learning', color: '#2B6CB0' },
];

export default function Blog() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <Layout title="Blog" description="SaaS strategy, cloud industry news, health tech insights — published twice a week by the Blitora team.">
      <section className="py-20 md:py-28 min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[12px] font-bold uppercase tracking-widest" style={{ color: '#E8560A' }}>Insights</span>
            <h1 className="font-extrabold text-[30px] md:text-[40px] mt-3 tracking-tight" style={{ color: '#0D1B3E' }}>Blog &amp; News</h1>
            <p className="mt-4 text-[16px]" style={{ color: '#4A5568' }}>
              SaaS strategy, cloud industry news, health tech insights — published twice a week.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group block"
                style={{ border: '1px solid #E0E3ED' }}>
                <div className="h-1.5" style={{ backgroundColor: post.color }} />
                <div className="p-6 bg-white">
                  <span className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-4 inline-block"
                    style={{ backgroundColor: '#F5F6FA', color: '#718096' }}>{post.tag}</span>
                  <h3 className="font-bold text-[16px] leading-snug mb-3 group-hover:text-[#E8560A] transition-colors"
                    style={{ color: '#0D1B3E' }}>{post.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-[12px]" style={{ color: '#718096' }}>{post.date}</p>
                    <span className="text-[12px]" style={{ color: '#718096' }}>{post.read} read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 rounded-3xl p-10 text-center"
            style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #162955 100%)' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#E8560A" className="mx-auto mb-4">
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/>
            </svg>
            <h3 className="font-extrabold text-[22px] md:text-[26px] text-white mb-3">Stay in the loop</h3>
            <p className="text-[15px] mb-6 max-w-sm mx-auto" style={{ color: '#C4CBDE' }}>
              Two posts a week. SaaS insights, cloud news, and Blitora product updates.
            </p>
            {subscribed ? (
              <div className="flex items-center justify-center gap-2 text-white font-semibold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1D9E75"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                You&apos;re subscribed — thank you!
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}
                className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourcompany.com" required
                  className="flex-1 px-5 py-3 rounded-full text-[14px]"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }} />
                <button type="submit" className="px-6 py-3 rounded-full font-semibold text-white text-[14px]"
                  style={{ backgroundColor: '#E8560A' }}>
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

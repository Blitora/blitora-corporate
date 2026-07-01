import Layout from '../components/Layout';
import Link from 'next/link';

export default function Products() {
  return (
    <Layout title="Products" description="The Blitora suite — one platform, many products. Each built to solve a specific business problem.">
      <section className="py-20 md:py-28 min-h-screen" style={{ backgroundColor: '#F5F6FA' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[12px] font-bold uppercase tracking-widest" style={{ color: '#E8560A' }}>The Blitora suite</span>
            <h1 className="font-extrabold text-[30px] md:text-[40px] mt-3 tracking-tight" style={{ color: '#0D1B3E' }}>
              One platform. Many products.
            </h1>
            <p className="mt-4 text-[16px]" style={{ color: '#4A5568' }}>
              Each Blitora product solves a specific business problem — fast to deploy, simple to use, better together.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://pulse.blitora.com"
              className="group rounded-2xl p-8 text-white overflow-hidden relative hover:scale-[1.015] transition-transform"
              style={{ background: 'linear-gradient(135deg, #0D4A35 0%, #1D9E75 100%)' }}>
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase mb-6"
                  style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" /> Live now
                </span>
                <h2 className="font-extrabold text-[26px] mb-2">Blitora Pulse</h2>
                <p className="text-[13px] opacity-70 mb-4">Health &amp; Wellness Platform</p>
                <p className="text-[15px] leading-relaxed opacity-90 mb-8 max-w-xs">
                  Health tracking and patient management for dietitians, clinics, and health-conscious individuals. Powered by AI.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Patient management', 'Meal plans', 'AI insights', 'Compliance tracking'].map((f) => (
                    <span key={f} className="text-[11.5px] px-2.5 py-1 rounded-full font-medium"
                      style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>{f}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-[14px] font-bold group-hover:gap-3 transition-all">
                  Visit pulse.blitora.com
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </span>
              </div>
            </a>

            <div className="rounded-2xl p-8 flex flex-col justify-center bg-white" style={{ border: '1.5px dashed #E0E3ED' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#F5F6FA' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <span className="inline-flex px-3 py-1 rounded-full text-[11px] font-bold uppercase mb-4 w-fit"
                style={{ backgroundColor: '#F5F6FA', color: '#718096' }}>In development</span>
              <h2 className="font-extrabold text-[24px] mb-3" style={{ color: '#0D1B3E' }}>More products coming</h2>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: '#4A5568' }}>
                Additional Blitora SaaS products across multiple industries are actively in development.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold" style={{ color: '#E8560A' }}>
                Get notified when we launch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

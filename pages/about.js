import Layout from '../components/Layout';
import Image from 'next/image';

export default function About() {
  const values = [
    { title: 'Speed',       desc: 'We build fast. We ship fast. Our software runs fast. Time is the rarest resource our customers have.',              color: '#E8560A' },
    { title: 'Simplicity',  desc: 'No unnecessary complexity. Every feature must earn its place. Simple is harder to build — we do that work.',        color: '#1D9E75' },
    { title: 'Reliability', desc: 'Uptime, accuracy, and consistency are non-negotiable. We design for trust from day one.',                           color: '#2B6CB0' },
    { title: 'Ambition',    desc: 'We are building a platform, not a single product. The roadmap is long and we are just getting started.',            color: '#714B67' },
  ];

  return (
    <Layout title="About" description="Blitora is a multi-product SaaS platform building fast, simple cloud software for businesses everywhere.">
      <section className="py-20 md:py-28 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-[12px] font-bold uppercase tracking-widest" style={{ color: '#E8560A' }}>About Blitora</span>
              <h1 className="font-extrabold text-[30px] md:text-[40px] mt-3 mb-6 tracking-tight" style={{ color: '#0D1B3E' }}>
                Built to power the next wave of growth.
              </h1>
              <p className="text-[16px] leading-relaxed mb-4" style={{ color: '#4A5568' }}>
                Blitora is a multi-product SaaS platform built for fast-moving businesses everywhere. We build cloud software that is fast to deploy, simple to use, and built around how modern teams actually operate.
              </p>
              <p className="text-[16px] leading-relaxed" style={{ color: '#4A5568' }}>
                Our first product, Blitora Pulse, serves dietitians, clinics, and health-conscious individuals. More products across multiple industries are in development.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/assets/logos/navy-card.png" alt="Blitora" width={220} height={220}
                className="rounded-[28px] shadow-2xl" style={{ transform: 'rotate(-2deg)' }} />
            </div>
          </div>

          <h2 className="font-extrabold text-[22px] md:text-[28px] mb-8 tracking-tight" style={{ color: '#0D1B3E' }}>
            What we stand for
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {values.map(({ title, desc, color }) => (
              <div key={title} className="rounded-2xl p-6" style={{ backgroundColor: '#F5F6FA' }}>
                <div className="w-3 h-3 rounded-full mb-4" style={{ backgroundColor: color }} />
                <h3 className="font-bold text-[15px] mb-2" style={{ color: '#0D1B3E' }}>{title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: '#4A5568' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

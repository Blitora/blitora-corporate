import { useState } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Required';
    return e;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  function field(key, label, type = 'text', required = false) {
    return (
      <div>
        <label className="block text-[13px] font-semibold mb-1.5" style={{ color: '#0D1B3E' }}>
          {label}{required && <span style={{ color: '#E8560A' }}> *</span>}
        </label>
        <input type={type} value={form[key]}
          onChange={(e) => { setForm((p) => ({ ...p, [key]: e.target.value })); setErrors((p) => ({ ...p, [key]: '' })); }}
          placeholder={`Enter ${label.toLowerCase()}`}
          className="w-full px-4 py-3 rounded-xl text-[14px] transition-all"
          style={{ border: `1.5px solid ${errors[key] ? '#C0392B' : '#E0E3ED'}`, backgroundColor: '#F5F6FA' }} />
        {errors[key] && <p className="text-[12px] mt-1" style={{ color: '#C0392B' }}>{errors[key]}</p>}
      </div>
    );
  }

  const socials = [
    { label: 'X', href: 'https://x.com/blitorahq', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/blitora', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  ];

  return (
    <Layout title="Contact" description="Get in touch with the Blitora team. Questions, partnerships, or demo requests — we would love to hear from you.">
      <section className="py-20 md:py-28 min-h-screen" style={{ backgroundColor: '#F5F6FA' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[12px] font-bold uppercase tracking-widest" style={{ color: '#E8560A' }}>Contact us</span>
            <h1 className="font-extrabold text-[30px] md:text-[40px] mt-3 tracking-tight" style={{ color: '#0D1B3E' }}>Let&apos;s talk.</h1>
            <p className="mt-4 text-[16px] max-w-lg mx-auto" style={{ color: '#4A5568' }}>
              Questions about Blitora or our products? Interested in partnering? Drop us a message.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 items-start">
            {/* Left */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-7" style={{ border: '1px solid #E0E3ED' }}>
                <h3 className="font-bold text-[16px] mb-5" style={{ color: '#0D1B3E' }}>Contact details</h3>
                {[
                  { label: 'General', value: 'hello@blitora.com', href: 'mailto:hello@blitora.com' },
                  { label: 'Professional', value: 'asayyed@blitora.com', href: 'mailto:asayyed@blitora.com' },
                ].map(({ label, value, href }) => (
                  <a key={label} href={href} className="flex items-start gap-3 mb-5 last:mb-0 group">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(232,86,10,0.1)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8560A" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: '#718096' }}>{label}</div>
                      <div className="text-[14px] font-medium group-hover:underline" style={{ color: '#0D1B3E' }}>{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-7" style={{ border: '1px solid #E0E3ED' }}>
                <h3 className="font-bold text-[16px] mb-5" style={{ color: '#0D1B3E' }}>Follow us</h3>
                <div className="flex gap-3">
                  {socials.map(({ label, href, path }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#EEF0F5] transition-colors"
                      style={{ backgroundColor: '#F5F6FA', border: '1px solid #E0E3ED' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#0D1B3E"><path d={path}/></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8" style={{ border: '1px solid #E0E3ED' }}>
              {status === 'success' ? (
                <div className="text-center py-12">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="#1D9E75" className="mx-auto mb-4">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <h3 className="font-extrabold text-[22px] mb-2" style={{ color: '#0D1B3E' }}>Message sent!</h3>
                  <p style={{ color: '#4A5568' }}>Thank you. We&apos;ll respond within 24 hours.</p>
                  <button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', company: '', phone: '', message: '' }); }}
                    className="mt-6 text-[14px] font-semibold underline" style={{ color: '#E8560A' }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {field('name', 'Full name', 'text', true)}
                    {field('email', 'Work email', 'email', true)}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {field('company', 'Company')}
                    {field('phone', 'Phone number', 'tel')}
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold mb-1.5" style={{ color: '#0D1B3E' }}>
                      Message <span style={{ color: '#E8560A' }}>*</span>
                    </label>
                    <textarea rows={5} value={form.message}
                      onChange={(e) => { setForm((p) => ({ ...p, message: e.target.value })); setErrors((p) => ({ ...p, message: '' })); }}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl text-[14px] resize-none transition-all"
                      style={{ border: `1.5px solid ${errors.message ? '#C0392B' : '#E0E3ED'}`, backgroundColor: '#F5F6FA' }} />
                    {errors.message && <p className="text-[12px] mt-1" style={{ color: '#C0392B' }}>{errors.message}</p>}
                  </div>
                  {status === 'error' && (
                    <p className="text-[13px] text-center" style={{ color: '#C0392B' }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                  <button type="submit" disabled={status === 'loading'}
                    className="w-full py-3.5 rounded-xl font-semibold text-white text-[15px] hover:opacity-90 transition-opacity disabled:opacity-60"
                    style={{ backgroundColor: '#E8560A' }}>
                    {status === 'loading' ? 'Sending...' : 'Send message →'}
                  </button>
                  <p className="text-center text-[12px]" style={{ color: '#718096' }}>
                    We typically respond within 24 hours on business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

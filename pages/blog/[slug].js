import Link from 'next/link';
import Layout from '../../components/Layout';

const posts = {
  'fast-deployment-vs-feature-bloat': {
    tag: 'SaaS Strategy',
    title: 'Why fast deployment beats feature bloat every time',
    date: 'Jun 28, 2026',
    read: '4 min',
    color: '#E8560A',
    excerpt: 'In the race to build the perfect product, most teams fall into the same trap — adding more features instead of shipping faster. Here\'s why velocity always wins.',
  },
  'digital-tools-dietitian-practices': {
    tag: 'Health Tech',
    title: 'How digital tools are transforming dietitian practices in 2026',
    date: 'Jun 25, 2026',
    read: '6 min',
    color: '#1D9E75',
    excerpt: 'Dietitians who embrace digital patient management are seeing better compliance, better outcomes, and less administrative overhead. Here\'s what the shift looks like on the ground.',
  },
  'legacy-erp-to-cloud': {
    tag: 'Cloud Industry',
    title: 'The shift from legacy ERP to modern cloud platforms',
    date: 'Jun 22, 2026',
    read: '5 min',
    color: '#2B6CB0',
    excerpt: 'Legacy ERP systems were built for a different era. Cloud-native platforms are rewriting the rules — faster to deploy, cheaper to run, and built for the way businesses actually work today.',
  },
  'introducing-blitora-pulse': {
    tag: 'Product',
    title: 'Introducing Blitora Pulse: health management reinvented',
    date: 'Jun 18, 2026',
    read: '3 min',
    color: '#E8560A',
    excerpt: 'Blitora Pulse is the first product in the Blitora suite. Built for dietitians, clinics, and individuals who want to take health management seriously.',
  },
  'multi-product-saas-one-platform': {
    tag: 'Business',
    title: 'Multi-product SaaS: why one platform beats ten vendors',
    date: 'Jun 15, 2026',
    read: '7 min',
    color: '#1D9E75',
    excerpt: 'The era of best-of-breed everything is giving way to something more practical: one platform, multiple products, one account. Here\'s the business case for consolidation.',
  },
  'ai-in-saas-machine-learning': {
    tag: 'Cloud',
    title: 'AI in SaaS: how machine learning is reshaping business software',
    date: 'Jun 12, 2026',
    read: '5 min',
    color: '#2B6CB0',
    excerpt: 'AI isn\'t a feature any more — it\'s the backbone. The SaaS products that will win the next decade are being built with intelligence as a core layer, not an add-on.',
  },
};

export default function BlogPost({ slug }) {
  const post = posts[slug];

  if (!post) {
    return (
      <Layout title="Post not found">
        <section className="py-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-extrabold text-[40px] mb-4" style={{ color: '#0D1B3E' }}>404</h1>
            <p className="text-[18px] mb-8" style={{ color: '#4A5568' }}>Post not found.</p>
            <Link href="/blog" className="px-6 py-3 rounded-full text-white font-semibold" style={{ backgroundColor: '#E8560A' }}>
              Back to Blog
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout title={post.title} description={post.excerpt}>
      <section className="py-16 min-h-screen" style={{ backgroundColor: '#F5F6FA' }}>
        <div className="max-w-3xl mx-auto px-6">

          {/* Back */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-[14px] font-medium mb-10 hover:opacity-70 transition-opacity" style={{ color: '#4A5568' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to Blog
          </Link>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm" style={{ border: '1px solid #E0E3ED' }}>
            {/* Colour top bar */}
            <div className="h-2" style={{ backgroundColor: post.color }} />

            <div className="p-10 md:p-14">
              {/* Meta */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[12px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#F5F6FA', color: '#718096' }}>
                  {post.tag}
                </span>
                <span className="text-[13px]" style={{ color: '#718096' }}>{post.date}</span>
                <span className="text-[13px]" style={{ color: '#718096' }}>·</span>
                <span className="text-[13px]" style={{ color: '#718096' }}>{post.read} read</span>
              </div>

              {/* Title */}
              <h1 className="font-extrabold text-[28px] md:text-[36px] leading-tight mb-6 tracking-tight" style={{ color: '#0D1B3E' }}>
                {post.title}
              </h1>

              {/* Excerpt / intro */}
              <p className="text-[18px] leading-relaxed mb-10 pb-10" style={{ color: '#4A5568', borderBottom: '1px solid #E0E3ED' }}>
                {post.excerpt}
              </p>

              {/* Coming soon placeholder */}
              <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: '#F5F6FA' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E8560A" strokeWidth="1.5" className="mx-auto mb-4">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
                <h3 className="font-bold text-[18px] mb-2" style={{ color: '#0D1B3E' }}>Full article coming soon</h3>
                <p className="text-[15px] mb-6" style={{ color: '#4A5568' }}>
                  We publish twice a week. Subscribe to get this post and future articles in your inbox.
                </p>
                <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-[14px]"
                  style={{ backgroundColor: '#E8560A' }}>
                  See all posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys({
      'fast-deployment-vs-feature-bloat': true,
      'digital-tools-dietitian-practices': true,
      'legacy-erp-to-cloud': true,
      'introducing-blitora-pulse': true,
      'multi-product-saas-one-platform': true,
      'ai-in-saas-machine-learning': true,
    }).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}

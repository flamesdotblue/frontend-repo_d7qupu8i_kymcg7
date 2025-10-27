import { motion } from 'framer-motion';
import { Smartphone, Globe2, Wrench, Shuffle, Building2, CheckCircle2, Briefcase, Rocket, ArrowRight } from 'lucide-react';

const cardBase = 'rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition shadow-[0_0_0_1px_rgba(255,255,255,0.03)]';

export default function Sections() {
  return (
    <div className="space-y-24">
      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About ProjectVerse</h2>
            <p className="mt-4 text-[#C9C9D3]">
              We build innovative digital ecosystems for ambitious startups and enterprise brands. From high-performance websites to robust mobile apps and custom software, our team delivers end‑to‑end solutions that scale.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: '150+ projects delivered' },
                { label: '20+ industries served' },
                { label: 'Global delivery' },
              ].map((item) => (
                <div key={item.label} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[#C9C9D3]">
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe2, title: 'Website Development', desc: 'Custom, E‑commerce, WordPress, Shopify' },
                { icon: Smartphone, title: 'Mobile Apps', desc: 'iOS, Android, Cross‑platform, Shopify Apps' },
                { icon: Wrench, title: 'Maintenance & Support', desc: 'Monitoring, updates, SLAs' },
                { icon: Shuffle, title: 'Web Migration', desc: 'WordPress ↔ Shopify ↔ Custom' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className={`${cardBase}`}>
                  <Icon className="h-6 w-6 text-white" />
                  <h3 className="mt-3 font-semibold text-white">{title}</h3>
                  <p className="text-sm text-[#C9C9D3]">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm text-[#C9C9D3] hover:text-white">
            Get a proposal <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: Globe2,
              title: 'Website Development',
              points: ['Custom Websites', 'E‑commerce', 'WordPress', 'Shopify'],
            },
            {
              icon: Smartphone,
              title: 'Mobile App Development',
              points: ['Android & iOS', 'React Native / Flutter', 'Shopify Apps'],
            },
            {
              icon: Wrench,
              title: 'Maintenance & Support',
              points: ['Technical Support', 'Regular Updates', 'Performance & Security'],
            },
            {
              icon: Shuffle,
              title: 'Web Migration',
              points: ['WordPress → Shopify', 'WordPress → Custom', 'Shopify → Custom'],
            },
            {
              icon: Building2,
              title: 'For Agencies',
              points: ['White‑label Development', 'On‑demand Capacity', 'Process & QA'],
            },
          ].map(({ icon: Icon, title, points }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${cardBase} flex flex-col`}
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#00BFA6] grid place-items-center">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-[#C9C9D3]">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#00BFA6]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div id="agencies" className="mt-8 ${cardBase}"></div>
        <div className={`${cardBase} mt-8`}> 
          <div className="flex items-start gap-4">
            <Building2 className="h-6 w-6 text-white" />
            <div>
              <h3 className="text-white font-semibold">For Agencies</h3>
              <p className="text-sm text-[#C9C9D3]">White‑label website & app development. Focus on your business while we handle the grunt work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Portfolio Highlights</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {[
            {
              logo: 'Indulekha',
              problem: 'Slow, outdated store experience',
              solution: 'Modern e‑commerce with performance optimizations',
              impact: '↑ Conversion, ↓ Bounce rate',
            },
            {
              logo: 'Ponds',
              problem: 'Fragmented digital presence',
              solution: 'Unified brand website with CMS',
              impact: 'Faster content ops',
            },
            {
              logo: 'Traya',
              problem: 'Scaling product pages',
              solution: 'Headless storefront + A/B testing',
              impact: '↑ AOV and engagement',
            },
            {
              logo: 'Nutraj',
              problem: 'Legacy stack and UX',
              solution: 'Replatforming & redesign',
              impact: '↑ Speed and retention',
            },
          ].map((item) => (
            <motion.div
              key={item.logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${cardBase}`}
            >
              <div className="flex items-center justify-between">
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#C9C9D3]">
                  {item.logo}
                </div>
                <a href="#contact" className="text-xs text-[#C9C9D3] hover:text-white">Work with us →</a>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-lg bg-white/5 p-3">
                  <div className="text-white/80">Problem</div>
                  <div className="text-[#C9C9D3]">{item.problem}</div>
                </div>
                <div className="rounded-lg bg-white/5 p-3">
                  <div className="text-white/80">Solution</div>
                  <div className="text-[#C9C9D3]">{item.solution}</div>
                </div>
                <div className="rounded-lg bg-white/5 p-3">
                  <div className="text-white/80">Impact</div>
                  <div className="text-[#C9C9D3]">{item.impact}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`${cardBase} p-8`}> 
          <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
            <div>
              <h2 className="text-3xl font-bold text-white">Internships & Careers</h2>
              <p className="mt-2 text-[#C9C9D3] max-w-2xl">Join our team across Web, App, UI/UX and Marketing. Learn, build, and ship real products that impact millions.</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {['Web Dev', 'App Dev', 'UI/UX', 'Marketing'].map((role) => (
                  <span key={role} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[#C9C9D3]">{role}</span>
                ))}
              </div>
            </div>
            <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00BFA6] px-5 py-2 text-sm font-medium text-white whitespace-nowrap">
              Apply Now <Rocket className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#00BFA6] p-8 text-center text-white shadow-lg">
          <h3 className="text-2xl font-semibold">Ready to build your next big thing?</h3>
          <p className="mt-1 opacity-90">Get a free technical consultation and roadmap.</p>
          <a href="#contact" className="mt-4 inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-medium hover:bg-white/20">
            Let’s Talk
          </a>
        </div>
      </section>
    </div>
  );
}

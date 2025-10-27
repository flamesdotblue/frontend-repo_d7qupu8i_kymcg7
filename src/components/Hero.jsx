import { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  useEffect(() => {
    document.title = 'ProjectVerse — Building Scalable Digital Experiences';
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(11,11,21,0.3),rgba(11,11,21,0.8))]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B15]/30 to-[#0B0B15]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[#C9C9D3] shadow-sm backdrop-blur">
          Trusted by brands across 20+ industries
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Building Scalable Digital Experiences
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-[#C9C9D3]">
          We design and develop apps, websites, and software that empower your business.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00BFA6] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#6C63FF]/30 hover:opacity-90">
            Get a Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a href="#portfolio" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10">
            View Work
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 opacity-90">
          {['Indulekha', 'Ponds', 'Traya', 'Nutraj'].map((brand) => (
            <div
              key={brand}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-[#C9C9D3]"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

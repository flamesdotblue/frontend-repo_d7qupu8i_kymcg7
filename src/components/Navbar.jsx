import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'For Agencies', href: '#agencies' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact / Get a Quote', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-white/5 border-b border-white/10' : 'backdrop-blur-md bg-white/0'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#00BFA6] grid place-items-center shadow-lg shadow-[#6C63FF]/30">
              <Rocket size={18} className="text-white" />
            </div>
            <span className="font-semibold tracking-tight text-white">ProjectVerse</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm text-[#C9C9D3] hover:text-white transition relative group"
              >
                <span>{item.label}</span>
                <span className="pointer-events-none absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-[#6C63FF] to-transparent opacity-0 group-hover:opacity-100 transition" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00BFA6] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-[#6C63FF]/30 hover:opacity-90 transition"
            >
              Let’s Talk
            </a>
          </nav>

          <button
            aria-label="Toggle Menu"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0B0B15]/80 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-[#C9C9D3] hover:text-white hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center mt-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00BFA6] px-4 py-2 text-sm font-medium text-white"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

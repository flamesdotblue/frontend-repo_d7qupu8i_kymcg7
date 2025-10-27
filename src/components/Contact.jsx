import { useState } from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: 'Not sure', description: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('ProjectVerse — Quote / Project Inquiry');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nBudget: ${form.budget}\n\nProject Description:\n${form.description}`
    );
    window.location.href = `mailto:hello@projectverse.in?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-3xl font-bold text-white">Contact / Get a Quote</h2>
          <p className="mt-2 text-[#C9C9D3]">Tell us about your project and we’ll get back within 24 hours.</p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[#C9C9D3]">Name</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full rounded-lg border border-white/10 bg-[#0B0B15] px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-[#C9C9D3]">Email</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 w-full rounded-lg border border-white/10 bg-[#0B0B15] px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[#C9C9D3]">Company</label>
                <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="mt-1 w-full rounded-lg border border-white/10 bg-[#0B0B15] px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]" placeholder="Acme Inc." />
              </div>
              <div>
                <label className="block text-sm text-[#C9C9D3]">Budget</label>
                <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="mt-1 w-full rounded-lg border border-white/10 bg-[#0B0B15] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF]">
                  {['Not sure', 'Under $2k', '$2k - $5k', '$5k - $15k', '$15k+'].map((b) => (
                    <option key={b} value={b} className="bg-[#0B0B15]">{b}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm text-[#C9C9D3]">Project Description</label>
              <textarea required rows={5} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="mt-1 w-full rounded-lg border border-white/10 bg-[#0B0B15] px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]" placeholder="Briefly describe your project, goals, and timeline." />
            </div>
            <button type="submit" className="w-full rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00BFA6] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#6C63FF]/30 hover:opacity-90">
              Send via Email
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Contact Details</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#C9C9D3]">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@projectverse.in</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 00000 00000</li>
              <li className="flex items-center gap-2"><MessageSquare className="h-4 w-4" /> <a className="underline hover:text-white" href="https://wa.me/910000000000" target="_blank" rel="noreferrer">WhatsApp Chat</a></li>
              <li>Pune, Maharashtra, India</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <iframe
              title="ProjectVerse Location"
              src="https://www.google.com/maps?q=Pune%2C%20Maharashtra%2C%20India&z=12&output=embed"
              className="w-full h-64"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

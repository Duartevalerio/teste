import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', interest: 'Acquisition' })
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = 'Please enter your name.'
    if (!form.email.trim()) err.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Enter a valid email.'
    if (!form.message.trim()) err.message = 'Please enter a message.'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 900))
    setStatus('sent')
    setForm({ name: '', email: '', phone: '', message: '', interest: 'Acquisition' })
  }

  return (
    <PageTransition>
      <PageHero
        number="V"
        eyebrow="Correspondence"
        title="A private conversation."
        subtitle="Our office responds to each enquiry personally. Write to us — discretion is the foundation of every introduction."
        image="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-16 sm:py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Info */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4 space-y-12"
            >
              <div>
                <div className="text-champagne-dark text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
                  Private Office
                </div>
                <h3 className="font-serif text-2xl text-ink leading-snug mb-4">
                  7 Avenue de Monte-Carlo
                </h3>
                <div className="text-ink/60">98000 Monaco</div>
                <div className="text-ink/50 text-sm mt-2 font-light">By appointment only</div>
              </div>

              <div className="space-y-6">
                {[
                  { icon: 'call', label: 'Telephone', value: '+377 99 00 00 00', href: 'tel:+37799000000' },
                  { icon: 'mail', label: 'Email', value: 'private@montecarloestates.mc', href: 'mailto:private@montecarloestates.mc' },
                  { icon: 'schedule', label: 'Hours', value: 'Mon–Fri · 09:00–19:00 CET' }
                ].map((i) => (
                  <div key={i.label} className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-champagne/50 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-champagne-dark text-[18px]">
                        {i.icon}
                      </span>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.3em] text-ink/50 font-semibold mb-1">
                        {i.label}
                      </div>
                      {i.href ? (
                        <a
                          href={i.href}
                          className="text-ink hover:text-champagne-dark transition-colors text-sm md:text-base font-medium"
                        >
                          {i.value}
                        </a>
                      ) : (
                        <div className="text-ink text-sm md:text-base font-medium">{i.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-ink/10">
                <div className="text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-4">Follow</div>
                <div className="flex items-center gap-3">
                  {['instagram', 'linkedin'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      aria-label={s}
                      className="w-11 h-11 border border-ink/15 flex items-center justify-center text-ink/50 hover:text-champagne-dark hover:border-champagne transition-all"
                    >
                      <span className="material-symbols-outlined text-[18px]">{s}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>

            {/* Form */}
            <motion.form
              onSubmit={onSubmit}
              noValidate
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-8 bg-cream-dark/30 p-6 sm:p-8 md:p-12 space-y-6 md:space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field
                  label="Full Name"
                  error={errors.name}
                  input={
                    <input
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Your name"
                      className="input-field"
                    />
                  }
                />
                <Field
                  label="Email"
                  error={errors.email}
                  input={
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@email.com"
                      className="input-field"
                    />
                  }
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field
                  label="Telephone (optional)"
                  input={
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder="+377..."
                      className="input-field"
                    />
                  }
                />
                <Field
                  label="Interest"
                  input={
                    <select value={form.interest} onChange={update('interest')} className="input-field">
                      <option>Acquisition</option>
                      <option>Lease</option>
                      <option>Sale</option>
                      <option>Concierge</option>
                      <option>Other</option>
                    </select>
                  }
                />
              </div>

              <Field
                label="Message"
                error={errors.message}
                input={
                  <textarea
                    rows="6"
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us about your intention — location, timing, and preferences."
                    className="input-field resize-none"
                  />
                }
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending'
                  ? 'Sending…'
                  : status === 'sent'
                    ? 'Message Sent'
                    : 'Send Message'}
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
              </button>

              {status === 'sent' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-l-2 border-champagne pl-6 py-2"
                >
                  <div className="text-champagne-dark text-[10px] uppercase tracking-[0.3em] font-semibold mb-2">
                    Received
                  </div>
                  <div className="text-ink/70 text-sm">
                    Thank you — a member of our office will respond within 24 hours.
                  </div>
                </motion.div>
              )}

              <p className="text-ink/40 text-xs leading-relaxed">
                All correspondence is held in strict confidence and is not shared with third
                parties.
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      <style>{`
        .input-field {
          width: 100%;
          background: #f6f1e8;
          border: 1px solid rgba(10,22,40,0.08);
          padding: 1rem 1.25rem;
          font-size: 0.9rem;
          color: #0a1628;
          transition: all 0.3s;
        }
        .input-field:focus {
          outline: none;
          border-color: #c9a76b;
          background: #ffffff;
        }
        .input-field::placeholder { color: rgba(10,22,40,0.35); }
      `}</style>
    </PageTransition>
  )
}

function Field({ label, input, error }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.3em] text-ink/60 font-semibold mb-3">
        {label}
      </label>
      {input}
      {error && <p className="text-error text-xs mt-2">{error}</p>}
    </div>
  )
}

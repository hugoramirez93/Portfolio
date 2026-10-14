import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Clock,
  ArrowUpRight,
  RotateCcw,
  Loader2,
  AlertCircle,
} from 'lucide-react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const EMAIL = personalInfo.email
const ENDPOINT = 'https://api.web3forms.com/submit'

/**
 * Web3Forms access key — free, no account required: https://web3forms.com
 *
 * The key is public by design and safe to ship in client-side code. It is
 * hard-coded as the default so the form works everywhere (local + Vercel)
 * with no extra configuration; override it with `VITE_WEB3FORMS_KEY` in
 * `.env` (see `.env.example`) or in your hosting provider's env vars.
 */
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || 'd3fae424-8b98-43da-bcc7-c0a640861123'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [copied, setCopied] = useState(false)
  // idle | sending | success | error | mailto
  const [status, setStatus] = useState('idle')
  const [mailtoHref, setMailtoHref] = useState('')

  const setField = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }))

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL)
      } else {
        const input = document.createElement('input')
        input.value = EMAIL
        document.body.appendChild(input)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable — the address is still visible on screen */
    }
  }

  const buildMailto = () => {
    const name = form.name.trim()
    const email = form.email.trim()
    const subject = form.subject.trim() || `Portfolio enquiry from ${name || 'a visitor'}`
    const message = form.message.trim()
    const body = `Hi Hugo,\n\n${message}\n\n— ${name}${email ? ` (${email})` : ''}`

    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Honeypot: real visitors never fill this hidden field.
    const honeypot = event.currentTarget.elements.botcheck
    if (honeypot && honeypot.checked) return

    const href = buildMailto()
    setMailtoHref(href)

    // No key configured yet → hand off to the visitor's mail client.
    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('mailto')
      window.location.href = href
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: form.subject.trim() || 'New message from your portfolio',
          from_name: form.name.trim() || 'Portfolio visitor',
          name: form.name.trim(),
          email: form.email.trim(),
          replyto: form.email.trim(),
          message: form.message.trim(),
          botcheck: false,
        }),
      })

      const data = await response.json().catch(() => ({}))
      setStatus(response.ok && data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const resetForm = () => {
    setForm({ name: '', email: '', subject: '', message: '' })
    setMailtoHref('')
    setStatus('idle')
  }

  const channels = [
    {
      label: 'Email',
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      icon: Mail,
      copyable: true,
    },
    {
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
      icon: Phone,
    },
    {
      label: 'LinkedIn',
      value: 'in/hugo-ramirezr',
      href: personalInfo.social.linkedin,
      icon: FiLinkedin,
    },
    {
      label: 'GitHub',
      value: 'github.com/hugoramirez93',
      href: personalInfo.social.github,
      icon: FiGithub,
    },
  ]

  const inputClass =
    'w-full min-w-0 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--accent)] focus:outline-none disabled:opacity-60'
  const labelClass =
    'mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]'
  const busy = status === 'sending'

  return (
    <section id="contact" className="shell scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's keep your platform"
        highlight="running"
        description="Open to L1/L2 technical support roles with US and EU teams. I usually reply within one business day."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-5">
        <Reveal className="min-w-0 lg:col-span-2">
          <div className="panel h-full p-5 sm:p-6">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--success)] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--success)]" />
              </span>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{personalInfo.availability}</p>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {personalInfo.workMode} · {personalInfo.timezone}
            </p>

            <div className="mt-6 space-y-3">
              {channels.map(({ label, value, href, icon: Icon, copyable }) => {
                const isExternal = href.startsWith('http')
                const body = (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--chip-bg)] text-[var(--accent)]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                        {label}
                      </span>
                      <span className="block truncate text-sm text-[var(--text-primary)]">{value}</span>
                    </span>
                  </>
                )

                // Email row also offers a quick copy — the address itself is the link.
                if (copyable) {
                  return (
                    <div
                      key={label}
                      className="flex items-center gap-2 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] p-3.5"
                    >
                      <a
                        href={href}
                        className="group flex min-w-0 flex-1 items-center gap-3"
                        aria-label={`Send an email to ${value}`}
                      >
                        {body}
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]"
                          aria-hidden="true"
                        />
                      </a>
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="icon-btn h-9 w-9 shrink-0"
                        aria-label="Copy email address"
                        title="Copy email address"
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-[var(--success)]" aria-hidden="true" />
                        ) : (
                          <Copy className="h-4 w-4" aria-hidden="true" />
                        )}
                      </button>
                    </div>
                  )
                }

                return (
                  <a
                    key={label}
                    href={href}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-3 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] p-3.5 transition-colors hover:bd-accent-40"
                  >
                    {body}
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]"
                      aria-hidden="true"
                    />
                  </a>
                )
              })}
            </div>

            <p className="mt-4 flex items-start gap-2 text-xs text-[var(--text-muted)]">
              <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>
                Based in {personalInfo.location} (<MapPin className="mb-0.5 inline h-3 w-3" aria-hidden="true" />
                {personalInfo.timezone}) · comfortable with US Eastern &amp; Central hours
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 lg:col-span-3">
          <form onSubmit={handleSubmit} className="panel h-full p-5 sm:p-7" noValidate={false}>
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">Send a message</h3>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Fill this in and I&apos;ll get back to you within one business day.
            </p>

            {/* Honeypot — hidden from humans, catches naive bots. */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <span className="sr-only" aria-hidden="true">
              Leave this field untouched.
            </span>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>Your name</span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={setField('name')}
                  disabled={busy}
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </label>

              <label className="block">
                <span className={labelClass}>Your email</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={setField('email')}
                  disabled={busy}
                  placeholder="jane@company.com"
                  className={inputClass}
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className={labelClass}>Subject</span>
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={setField('subject')}
                disabled={busy}
                placeholder="Technical Support role"
                className={inputClass}
              />
            </label>

            <label className="mt-4 block">
              <span className={labelClass}>Message</span>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={setField('message')}
                disabled={busy}
                placeholder="Hi Hugo, we're hiring for a Tier 1/2 support role…"
                className={`${inputClass} resize-none`}
              />
            </label>

            <button type="submit" disabled={busy} className="btn btn-primary mt-5 w-full">
              {busy ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Send className="h-4 w-4" aria-hidden="true" />
              )}
              {busy ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && (
              <div
                role="status"
                className="mt-4 flex flex-col gap-3 rounded-xl border border-[var(--border-card)] bg-tint-success p-4"
              >
                <p className="flex items-start gap-2 text-sm font-medium text-[var(--text-primary)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" aria-hidden="true" />
                  Message sent — thank you! I&apos;ll reply to {form.email.trim() || 'your email'} within one
                  business day.
                </p>
                <button type="button" onClick={resetForm} className="btn btn-ghost self-start px-3 py-2 text-xs">
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  Send another message
                </button>
              </div>
            )}

            {status === 'error' && (
              <div
                role="alert"
                className="mt-4 flex flex-col gap-3 rounded-xl border border-[var(--border-card)] bg-tint-warning p-4"
              >
                <p className="flex items-start gap-2 text-sm font-medium text-[var(--text-primary)]">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warning)]" aria-hidden="true" />
                  Sorry, the message couldn&apos;t be sent right now. You can email me directly instead — nothing is
                  lost.
                </p>
                <div className="flex flex-wrap gap-2">
                  {mailtoHref && (
                    <a href={mailtoHref} className="btn btn-ghost px-3 py-2 text-xs">
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                      Open in my email app
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="btn btn-ghost px-3 py-2 text-xs"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-[var(--success)]" aria-hidden="true" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                    {copied ? 'Email copied' : `Copy ${EMAIL}`}
                  </button>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn btn-ghost px-3 py-2 text-xs"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    Try again
                  </button>
                </div>
              </div>
            )}

            {status === 'mailto' && (
              <div
                role="status"
                className="mt-4 flex flex-col gap-3 rounded-xl border border-[var(--border-card)] bg-tint-success p-4"
              >
                <p className="flex items-start gap-2 text-sm font-medium text-[var(--text-primary)]">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" aria-hidden="true" />
                  Your email app should have opened with the message ready to send.
                </p>
                <div className="flex flex-wrap gap-2">
                  {mailtoHref && (
                    <a href={mailtoHref} className="btn btn-ghost px-3 py-2 text-xs">
                      <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                      Open it again
                    </a>
                  )}
                  <button type="button" onClick={copyEmail} className="btn btn-ghost px-3 py-2 text-xs">
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-[var(--success)]" aria-hidden="true" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                    {copied ? 'Email copied' : `Copy ${EMAIL}`}
                  </button>
                  <button type="button" onClick={resetForm} className="btn btn-ghost px-3 py-2 text-xs">
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    Write another
                  </button>
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  Nothing happened? Your browser may not have a mail app configured — just copy the address above and
                  write to me directly.
                </p>
              </div>
            )}

            {status === 'idle' && (
              <p className="mt-3 text-center text-xs text-[var(--text-muted)]">
                Your message goes straight to my inbox — I&apos;ll never share your details.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

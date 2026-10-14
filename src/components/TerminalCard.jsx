import { motion } from 'framer-motion'

const lines = [
  { kind: 'cmd', cmd: 'support-cli triage', rest: '--ticket #48213' },
  { kind: 'meta', label: 'account', text: 'Avianca / Lifemiles   env=prod   region=us-east' },
  { kind: 'info', label: 'symptom', text: 'sign-in fails after SSO (Keycloak 26) upgrade' },
  { kind: 'warn', label: 'evidence', text: 'auth.log → invalid_scope · OIDC claim mismatch' },
  { kind: 'info', label: 'action', text: 'corrected OIDC scopes + Identity-Provider mappers' },
  { kind: 'ok', label: 'result', text: 'authentication restored for affected users' },
  { kind: 'ok', label: 'metrics', text: 'CSAT 94%  ·  first response < 10 min  ·  status CLOSED' },
]

const kindStyles = {
  meta: 'text-[var(--text-muted)]',
  info: 'text-[var(--text-secondary)]',
  warn: 'text-[var(--warning)]',
  ok: 'text-[var(--success)]',
}

const labelColor = {
  meta: 'text-[var(--text-muted)]',
  info: 'text-[var(--accent-2)]',
  warn: 'text-[var(--warning)]',
  ok: 'text-[var(--success)]',
}

export default function TerminalCard() {
  return (
    <div className="panel relative overflow-hidden p-0 font-mono text-[12.5px] leading-relaxed">
      {/* title bar */}
      <div className="flex items-center gap-3 border-b border-[var(--border-card)] bg-tint-surface-strong px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[var(--danger)]" />
          <span className="h-3 w-3 rounded-full bg-[var(--warning)]" />
          <span className="h-3 w-3 rounded-full bg-[var(--success)]" />
        </div>
        <span className="text-[11px] font-medium tracking-wide text-[var(--text-muted)]">
          support-console — live triage
        </span>
        <span className="ml-auto flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[var(--success)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--success)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
          </span>
          resolved
        </span>
      </div>

      {/* body */}
      <div className="relative space-y-2 p-4 sm:p-5">
        <div
          aria-hidden="true"
          className="animate-scan-line pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-[0.08]"
        />

        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 + i * 0.16, duration: 0.35 }}
            className="flex gap-2"
          >
            {line.kind === 'cmd' ? (
              <>
                <span className="shrink-0 text-[var(--accent)]">$</span>
                <span className="text-[var(--text-primary)]">
                  {line.cmd} <span className="text-[var(--text-muted)]">{line.rest}</span>
                </span>
              </>
            ) : (
              <>
                <span className={`w-[68px] shrink-0 ${labelColor[line.kind]}`}>{line.label}</span>
                <span className={kindStyles[line.kind]}>{line.text}</span>
              </>
            )}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 + lines.length * 0.16 }}
          className="flex items-center gap-2 pt-1"
        >
          <span className="text-[var(--accent)]">$</span>
          <span className="animate-blink inline-block h-4 w-2 bg-[var(--accent)]" />
        </motion.div>
      </div>
    </div>
  )
}

import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, highlight, description, align = 'center' }) {
  const isCenter = align === 'center'

  return (
    <div className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <Reveal y={12}>
          <span className="eyebrow">
            <span className="h-px w-6 bg-[var(--accent)]" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal delay={0.06}>
        <h2 className="mt-4 text-3xl font-bold leading-[1.12] text-[var(--text-primary)] text-balance sm:text-4xl md:text-[2.6rem]">
          {title} {highlight && <span className="gradient-text">{highlight}</span>}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.12}>
          <p
            className={`mt-4 text-base leading-relaxed text-[var(--text-secondary)] text-pretty sm:text-lg ${
              isCenter ? 'mx-auto' : ''
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}

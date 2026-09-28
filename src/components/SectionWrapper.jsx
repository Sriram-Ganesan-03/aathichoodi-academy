import { motion } from 'framer-motion'
import Container from './Container'

export default function SectionWrapper({ id, eyebrow, title, children, dark = false, className = '' }) {
  return <section id={id} className={`relative overflow-hidden py-20 sm:py-28 ${dark ? 'bg-ink text-white' : ''} ${className}`}>
    <Container>
      {(eyebrow || title) && <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} className="mb-12 max-w-2xl">
        {eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-gold">{eyebrow}</p>}
        {title && <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h2>}
      </motion.div>}
      {children}
    </Container>
  </section>
}

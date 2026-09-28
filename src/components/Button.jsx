import { motion } from 'framer-motion'

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const styles = {
    primary: 'bg-gold text-ink hover:bg-[#edc471] shadow-lg shadow-gold/20',
    secondary: 'border border-white/40 bg-white/10 text-white hover:bg-white hover:text-ink',
    dark: 'bg-navy text-white hover:bg-[#153667]',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-ink'
  }
  return <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: .98 }} className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${styles[variant]} ${className}`} {...props}>{children}</motion.a>
}

import { motion } from 'framer-motion'
export default function Card({ children, className = '', hover = true }) { return <motion.article whileHover={hover ? { y: -6, scale: 1.01 } : undefined} className={`rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-900/[.06] ${className}`}>{children}</motion.article> }

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Button from './Button'
export default function CourseCard({ icon: Icon, title, text, index }) { return <motion.article initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={{ y: -8 }} className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-premium transition">
  <div className="mb-8 flex items-start justify-between"><span className="grid h-13 w-13 place-items-center rounded-2xl bg-gold/15 text-gold"><Icon size={25}/></span><ArrowUpRight className="text-slate-300 transition group-hover:text-gold"/></div><h3 className="font-display text-2xl font-bold text-ink">{title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-slate-500">{text}</p><Button href="#contact" variant="outline" className="mt-7 w-full !py-2.5">Learn more</Button>
 </motion.article> }

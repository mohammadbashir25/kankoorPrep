import { motion } from 'framer-motion'

/**
 * Wraps a section so it fades + slides into view as the user scrolls to it.
 * Keeps existing markup/ids untouched - just an animation wrapper.
 */
const Reveal = ({ children, as = 'section', delay = 0, y = 40, className = '', ...rest }) => {
  const Comp = motion[as] ?? motion.section
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  )
}

export default Reveal

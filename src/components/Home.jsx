import { motion } from 'framer-motion'
import { LuSparkles, LuShieldCheck, LuGraduationCap } from 'react-icons/lu'
import image from '../../public/right-hero.png'

const headline = "Afghanistan National digital Kankoor system"

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045 },
  },
}

const word = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const floatBadge = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.9 + i * 0.15, ease: 'easeOut' },
  }),
}

const Home = () => {
  return (
    <div id="home" className="relative overflow-hidden">
      {/* animated glow blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl dark:bg-primary/20"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-(--color-accent)/30 blur-3xl dark:bg-(--color-accent)/20"
        animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="bg-(--bg-section) dark:bg-(--bg-section-dark) relative flex mt-5 gap-5 lg:gap-0 xl:gap-10 items-center rounded-lg md:p-5 p-3 flex-col lg:flex-row">
        <div className="lg:mt-20 mt-5 text-center flex flex-col lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto lg:mx-0 mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary dark:text-accent w-fit"
          >
            <LuSparkles className="animate-pulse" />
            Trusted by students nationwide
          </motion.span>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-5xl lg:text-6xl dark:text-gray-200 text-gray-700 flex flex-wrap justify-center lg:justify-start gap-x-3"
          >
            {headline.split(' ').map((w, i) => (
              <motion.span key={i} variants={word} className="inline-block">
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-4 roboto text-xl tracking-wide dark:text-gray-300"
          >
            Apply, track and Prepare for the National Kankoor Examination all in one secure platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex gap-3 mt-10 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -10px var(--color-primary)' }}
              whileTap={{ scale: 0.96 }}
              className="bg-primary px-3 py-2 rounded-lg outline-none border-none hover:bg-primary-hover cursor-pointer transition duration-300 text-gray-100 text-md"
            >
              Create Account
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="border border-primary px-3 rounded-lg hover:bg-primary-hover cursor-pointer transition duration-300 hover:text-gray-100"
            >
              Login
            </motion.button>
          </motion.div>
        </div>

        <div className="w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0.5 }}
            className="relative"
          >
            <motion.img
              src={image}
              alt="score card"
              className="w-full drop-shadow-2xl"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              custom={0}
              variants={floatBadge}
              initial="hidden"
              animate="show"
              className="absolute -left-4 top-6 hidden md:flex items-center gap-2 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur px-3 py-2 shadow-lg text-sm text-gray-700 dark:text-gray-200"
            >
              <LuShieldCheck className="text-primary" />
              Secure & Verified
            </motion.div>

            <motion.div
              custom={1}
              variants={floatBadge}
              initial="hidden"
              animate="show"
              className="absolute -right-2 bottom-8 hidden md:flex items-center gap-2 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur px-3 py-2 shadow-lg text-sm text-gray-700 dark:text-gray-200"
            >
              <LuGraduationCap className="text-(--color-accent)" />
              10,000+ Students
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="flex justify-center mt-4"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-5 rounded-full border-2 border-primary/50 flex justify-center pt-1"
        >
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home

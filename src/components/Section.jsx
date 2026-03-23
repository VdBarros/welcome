import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, dark = false }) => (
  <section
    id={id}
    className={`py-20 px-4 ${dark ? 'bg-darker' : 'bg-dark'}`}
  >
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">{title}</span>
        </h2>
        {subtitle && (
          <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </motion.div>
      {children}
    </div>
  </section>
)

export default Section;

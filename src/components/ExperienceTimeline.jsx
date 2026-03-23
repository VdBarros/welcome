import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/profile';

const ExperienceTimeline = () => {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

      {EXPERIENCES.map((exp, i) => (
        <motion.div
          key={exp.title}
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`relative flex items-center mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
          {/* Timeline dot */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-darker z-10 hidden md:block"
            style={{ backgroundColor: exp.color }}
          />

          {/* Content */}
          <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
            <div className="bg-dark/50 rounded-xl p-5 border border-gray-800 card-hover">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ backgroundColor: `${exp.color}20`, color: exp.color }}
                >
                  {exp.period}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
              <p className="text-sm text-primary mb-2">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-3">{exp.description}</p>
              <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-start'}`}>
                {exp.highlights.map(h => (
                  <span key={h} className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ExperienceTimeline;

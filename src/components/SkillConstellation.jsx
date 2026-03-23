import { memo } from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import { SKILLS_CONSTELLATION } from '../data/profile';

const SkillConstellation = memo(() => {
  return (
    <div className="relative w-full max-w-2xl h-80 mx-auto">
      {/* Central stars */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-primary"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Smartphone className="w-10 h-10 text-white" />
      </motion.div>

      {/* Orbiting skills */}
      {SKILLS_CONSTELLATION.slice(2).map((skill, i) => {
        const angle = (i / (SKILLS_CONSTELLATION.length - 2)) * 2 * Math.PI
        const radius = 140
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={skill.name}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              x: [x, x + Math.sin(Date.now() / 1000 + i) * 5],
              y: [y, y + Math.cos(Date.now() / 1000 + i) * 5],
            }}
            transition={{ type: 'spring', stiffness: 30, damping: 10 }}
          >
            <motion.div
              className="flex flex-col items-center cursor-pointer group"
              whileHover={{ scale: 1.2 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all group-hover:shadow-lg"
                style={{ backgroundColor: `${skill.color}20`, boxShadow: `0 0 20px ${skill.color}40` }}
              >
                <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
              </div>
              <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          </motion.div>
        )
      })}

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        {SKILLS_CONSTELLATION.slice(2).map((_, i) => {
          const angle = (i / (SKILLS_CONSTELLATION.length - 2)) * 2 * Math.PI
          const radius = 140
          const x = Math.cos(angle) * radius + 250
          const y = Math.sin(angle) * radius + 160
          return (
            <line
              key={i}
              x1="250"
              y1="160"
              x2={x}
              y2={y}
              stroke="url(#gradient)"
              strokeWidth="1"
            />
          )
        })}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
})

export default SkillConstellation;

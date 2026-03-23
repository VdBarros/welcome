import { motion } from 'framer-motion';
import { Smartphone, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/profile';

const ProjectCards = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {PROJECTS.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-dark/50 rounded-2xl p-6 border border-gray-800 card-hover"
        >
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${project.color}20` }}
            >
              <Smartphone className="w-6 h-6" style={{ color: project.color }} />
            </div>
            <div className="flex items-center gap-2">
              <span
                className="text-xs px-2 py-1 rounded-full"
                style={{ backgroundColor: `${project.color}20`, color: project.color }}
              >
                {project.impact}
              </span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full flex items-center justify-center bg-gray-700 hover:bg-gray-600 transition-colors"
                  title="View on Google Play"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-gray-300" />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-lg font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-400 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map(tech => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ProjectCards;

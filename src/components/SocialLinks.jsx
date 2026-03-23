import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../data/profile';

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4">
      {SOCIAL_LINKS.map(link => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-xl flex items-center justify-center glass card-hover"
          style={{ '--hover-color': link.color }}
        >
          <link.icon className="w-6 h-6" style={{ color: link.color }} />
        </motion.a>
      ))}
    </div>
  )
}

export default SocialLinks;

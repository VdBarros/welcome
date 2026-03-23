import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { TERMINAL_COMMANDS } from '../data/profile';

const TerminalBio = memo(() => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines(prev => {
        if (prev.length >= TERMINAL_COMMANDS.length) {
          clearInterval(interval);
          return prev;
        }
        return [...prev, TERMINAL_COMMANDS[prev.length]];
      });
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-950 rounded-2xl p-6 font-mono text-sm max-w-2xl mx-auto border border-gray-800">
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-gray-500 text-xs">vinicius@portfolio ~ %</span>
      </div>

      <div className="space-y-2">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-primary">$ </span>
            <span className="text-gray-400">{line.cmd}</span>
            <br />
            <span className={`${line.color} ml-4`}>{line.output}</span>
          </motion.div>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-block w-2 h-4 bg-primary terminal-cursor"
        />
      </div>
    </div>
  )
})

export default TerminalBio;

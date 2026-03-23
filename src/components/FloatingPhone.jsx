import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Play, RotateCcw } from 'lucide-react';

// Genius / Memory Game Logic
const COLORS = [
  { id: 0, color: 'bg-red-500', activeClass: 'bg-red-400 shadow-[0_0_30px_rgba(239,68,68,0.8)]' },
  { id: 1, color: 'bg-blue-500', activeClass: 'bg-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.8)]' },
  { id: 2, color: 'bg-green-500', activeClass: 'bg-green-400 shadow-[0_0_30px_rgba(34,197,94,0.8)]' },
  { id: 3, color: 'bg-yellow-500', activeClass: 'bg-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.8)]' },
];

const MemoryGame = ({ onInteract }) => {
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeColor, setActiveColor] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const playSequence = useCallback(async (currentSequence) => {
    setIsPlaying(true);
    // Wait a bit before starting the sequence
    await new Promise(resolve => setTimeout(resolve, 800));

    for (let i = 0; i < currentSequence.length; i++) {
      setActiveColor(currentSequence[i]);
      // The time the color stays lit
      await new Promise(resolve => setTimeout(resolve, 500));
      setActiveColor(null);
      // Wait between colors
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    setIsPlaying(false);
  }, []);

  const nextRound = useCallback(() => {
    const nextColor = Math.floor(Math.random() * 4);
    const newSequence = [...sequence, nextColor];
    setSequence(newSequence);
    setPlayerSequence([]);
    playSequence(newSequence);
  }, [sequence, playSequence]);

  const startGame = () => {
    setSequence([]);
    setPlayerSequence([]);
    setScore(0);
    setGameOver(false);
    setGameStarted(true);
    
    const firstColor = Math.floor(Math.random() * 4);
    const initialSequence = [firstColor];
    setSequence(initialSequence);
    playSequence(initialSequence);
  };

  const handleColorClick = (colorId) => {
    onInteract && onInteract();
    
    if (isPlaying || gameOver || !gameStarted) return;

    setActiveColor(colorId);
    setTimeout(() => setActiveColor(null), 200);

    const newPlayerSequence = [...playerSequence, colorId];
    setPlayerSequence(newPlayerSequence);

    // Check if the current click is correct
    const currentIndex = newPlayerSequence.length - 1;
    if (newPlayerSequence[currentIndex] !== sequence[currentIndex]) {
      // Wrong!
      setGameOver(true);
      return;
    }

    // Check if player completed the whole sequence for this round
    if (newPlayerSequence.length === sequence.length) {
      setScore(score + 1);
      setTimeout(nextRound, 500);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-dark rounded-3xl p-4 relative z-30">
      <div className="flex justify-between items-center w-full px-6 mb-4">
        <h3 className="font-bold text-gray-400">Genius</h3>
        <span className="text-secondary font-mono text-xl">{score}</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8 w-full max-w-[220px]">
        {COLORS.map((item) => (
          <div
            key={item.id}
            onPointerDown={(e) => { 
                e.preventDefault(); 
                e.stopPropagation(); 
                handleColorClick(item.id); 
            }}
            className={`w-24 h-24 rounded-2xl cursor-pointer transition-all duration-200 border-2 border-gray-800
              ${activeColor === item.id ? item.activeClass : item.color}
              ${(!gameStarted || isPlaying) ? 'opacity-50 cursor-default pointer-events-none' : 'hover:brightness-110 active:scale-95'}
            `}
          />
        ))}
      </div>

      <div className="h-16 flex items-center justify-center w-full">
        {!gameStarted && (
          <button
            onPointerDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                startGame();
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary rounded-full font-bold text-white shadow-lg focus:outline-none hover:scale-105 active:scale-95 transition-transform"
          >
            <Play className="w-5 h-5 fill-current" /> Start Game
          </button>
        )}

        {gameOver && (
          <div className="flex flex-col items-center animate-pulse">
            <span className="text-red-400 font-bold mb-3">Game Over!</span>
            <button
              onPointerDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  startGame();
              }}
              className="flex items-center gap-2 px-6 py-2 bg-gray-800 border border-gray-700 rounded-full font-bold text-gray-300 hover:text-white hover:scale-105 active:scale-95 transition-transform"
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
          </div>
        )}

        {gameStarted && !gameOver && (
          <span className="text-sm font-mono text-gray-500">
            {isPlaying ? 'Watch...' : 'Your turn!'}
          </span>
        )}
      </div>
    </div>
  );
};

const FloatingPhone = memo(() => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [floatingPos, setFloatingPos] = useState({ y: -15, rx: 5, ry: 10 })

  useEffect(() => {
    if (isUnlocked || isHovered) return;
    const interval = setInterval(() => {
      setFloatingPos(prev => ({
        y: prev.y === 0 ? -15 : 0,
        rx: prev.rx === 5 ? -5 : 5,
        ry: prev.ry === 10 ? -10 : 10
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, [isUnlocked, isHovered]);

  const handleMouseMove = (e) => {
    setIsHovered(true)
    if (isUnlocked) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientY - rect.top - rect.height / 2) / 20
    const y = -(e.clientX - rect.left - rect.width / 2) / 20
    setRotation({ x, y })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  const handleUnlockClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isUnlocked) {
      setIsUnlocked(true);
      setRotation({ x: 0, y: 0 });
    }
  }

  // Prevents bubble triggers when clicking anywhere strictly inside the phone frame
  const handleGameInteraction = () => {
     // Explicitly do nothing, allows the game controls to consume the click cleanly
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      setIsUnlocked(true);
    }
  }

  return (
    <motion.div
      className={`phone-mockup relative ${!isUnlocked ? 'cursor-pointer' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={!isUnlocked ? handleUnlockClick : undefined}
    >
      {/* Wrapper de Flutuação Contínua Independente */}
      <motion.div
        animate={
          !isUnlocked && !isHovered
            ? { y: floatingPos.y, rotateX: floatingPos.rx, rotateY: floatingPos.ry }
            : { y: 0, rotateX: 0, rotateY: 0 }
        }
        transition={
          !isUnlocked && !isHovered
            ? { duration: 3, ease: 'easeInOut' }
            : { type: 'spring', stiffness: 50, damping: 20 }
        }
        className="w-full h-full"
      >
        <motion.div
          className="phone-frame relative"
          animate={{
            rotateX: rotation.x,
            rotateY: rotation.y,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        >
        {/* Phone frame */}
        <div className="relative w-72 h-[580px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl border border-gray-700">
          {/* Dynamic island */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-full z-10" />

          {/* Screen Container */}
          <div className="w-full h-full bg-dark rounded-[2.5rem] overflow-hidden relative" >
            
            {/* Status bar */}
            <div className="flex justify-between items-center px-6 py-2 text-xs text-gray-400 z-20 relative bg-dark/80 backdrop-blur-sm">
              <span>9:41</span>
              <div className="flex gap-1">
                <span className="text-white">📶</span>
                <span className="text-white">🔋</span>
              </div>
            </div>

            {/* Screen content */}
            <AnimatePresence mode="wait">
              {!isUnlocked ? (
                <motion.div 
                  key="lockscreen"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 pt-8 h-full flex flex-col items-center justify-center -mt-8"
                  tabIndex={0}
                  role="button"
                  aria-label="Unlock Phone"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mb-6"
                  >
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                      <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                        <span className="text-2xl font-bold gradient-text">VB</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white">Vinicius Barros</h3>
                    <p className="text-sm text-gray-400">Mobile Developer</p>
                  </motion.div>

                  {/* Skills preview */}
                  <div className="grid grid-cols-3 gap-2 mb-4 w-full">
                    {['Android', 'iOS', 'SAP'].map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        className="bg-gray-800/50 rounded-xl p-2 text-center"
                      >
                        <div className="w-8 h-8 mx-auto mb-1 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Smartphone className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs text-gray-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Code snippet preview */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="bg-gray-900 rounded-xl p-3 font-mono text-xs w-full text-left"
                  >
                    <span className="text-primary">fun</span> <span className="text-secondary">main</span>
                    <span className="text-white">() {'{'}</span>
                    <br />
                    <span className="ml-2 text-accent">println</span>
                    <span className="text-white">("Hello")</span>
                    <br />
                    <span className="text-white">{'}'}</span>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="homescreen"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 pt-8"
                >
                  <MemoryGame onInteract={handleGameInteraction} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[4rem] blur-xl -z-10 pointer-events-none" />
      </motion.div>
      </motion.div>

      {!isUnlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-4"
        >
          <button 
             onClick={handleUnlockClick}
             className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer px-4 py-2"
          >
            Click to unlock
          </button>
        </motion.div>
      )}
    </motion.div>
  )
})

export default FloatingPhone;

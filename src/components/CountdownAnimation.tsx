import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownAnimationProps {
  onComplete: () => void;
}

const CountdownAnimation = ({ onComplete }: CountdownAnimationProps) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [count, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <AnimatePresence mode="wait">
        {count > 0 ? (
          <motion.div
            key={count}
            className="relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-9xl md:text-[12rem] font-display font-bold text-rose-primary">
              {count}
            </span>
            
            {/* Pulse Ring */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-rose-primary" />
            </motion.div>

            {/* Heart Beat Effect */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-rose-light opacity-50"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: 1 }}
            >
              ♥
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="heart"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 1] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-9xl text-rose-primary"
          >
            ♥
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountdownAnimation;

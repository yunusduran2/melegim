import { motion } from "framer-motion";

interface NameRevealProps {
  onContinue: () => void;
}

const NameReveal = ({ onContinue }: NameRevealProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Name with shimmer effect */}
        <motion.h1
          className="text-shimmer text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Meleğim
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-romantic-body text-xl md:text-2xl mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Bu site sadece senin için…
        </motion.p>

        {/* Continue Button */}
        <motion.button
          className="btn-romantic"
          onClick={onContinue}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Başla ♥
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NameReveal;

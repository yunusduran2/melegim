import { motion } from "framer-motion";

interface ReadyQuestionProps {
  onReady: () => void;
}

const ReadyQuestion = ({ onReady }: ReadyQuestionProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <motion.div
        className="card-romantic max-w-lg w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Rose Emoji */}
        <motion.div
          className="text-7xl mb-8"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🌹
        </motion.div>

        {/* Question */}
        <motion.h2
          className="text-romantic-title text-2xl md:text-4xl mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Asıl gülümü görmeye
          <br />
          <span className="text-rose-primary">hazır mısın?</span>
        </motion.h2>

        {/* Ready Button */}
        <motion.button
          className="btn-gold px-12"
          onClick={onReady}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hazırım ♥
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ReadyQuestion;

import { useState } from "react";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

interface RomanticQuoteProps {
  onContinue: () => void;
}

const RomanticQuote = ({ onContinue }: RomanticQuoteProps) => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <motion.div
        className="card-romantic max-w-xl w-full text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Quote Icon */}
        <motion.div
          className="text-6xl text-gold mb-6"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
        >
          ❝
        </motion.div>

        {/* Romantic Quote with Typewriter Effect */}
        <div className="text-romantic-subtitle text-2xl md:text-3xl mb-8 leading-relaxed min-h-[100px]">
          <TypewriterText
            text="Bazı güller bahçede açar, bazıları kalpte…"
            speed={100}
            onComplete={() => {
              setTimeout(() => setShowButton(true), 1000);
            }}
          />
        </div>

        {/* Continue Button */}
        {showButton && (
          <motion.button
            className="btn-romantic"
            onClick={onContinue}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Devam Et
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default RomanticQuote;

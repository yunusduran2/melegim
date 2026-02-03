import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { triggerHearts, triggerCelebration } from "./ConfettiEffect";
import { Sparkles } from "lucide-react";

interface TimeUnit {
  value: number;
  label: string;
}

const DateCounter = () => {
  const [timeUnits, setTimeUnits] = useState<TimeUnit[]>([
    { value: 0, label: "Gün" },
    { value: 0, label: "Saat" },
    { value: 0, label: "Dakika" },
    { value: 0, label: "Saniye" },
  ]);

  // Start date: 24.08.2025 00:00:00
  const startDate = new Date("2025-08-24T00:00:00");

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      if (diff < 0) {
        // If the date hasn't arrived yet, show countdown
        const futureDiff = Math.abs(diff);
        const days = Math.floor(futureDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((futureDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((futureDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((futureDiff % (1000 * 60)) / 1000);

        setTimeUnits([
          { value: days, label: "Gün" },
          { value: hours, label: "Saat" },
          { value: minutes, label: "Dakika" },
          { value: seconds, label: "Saniye" },
        ]);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeUnits([
          { value: days, label: "Gün" },
          { value: hours, label: "Saat" },
          { value: minutes, label: "Dakika" },
          { value: seconds, label: "Saniye" },
        ]);
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const now = new Date();
  const isFuture = now < startDate;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <motion.div
        className="card-romantic max-w-2xl w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.h2
          className="text-romantic-title text-3xl md:text-5xl mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {isFuture ? "O güne kalan…" : "O günden beri…"}
        </motion.h2>

        <motion.p
          className="text-muted-foreground font-romantic text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          24 Ağustos 2025
        </motion.p>

        {/* Counter Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="counter-box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <motion.span
                className="counter-number"
                key={unit.value}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {unit.value.toString().padStart(2, "0")}
              </motion.span>
              <span className="counter-label">{unit.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-romantic-subtitle text-lg md:text-xl text-rose-dark">
            ♥ Ve her saniye seni daha çok seviyorum ♥
          </p>
        </motion.div>

        {/* Celebration Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-primary to-rose-dark text-white rounded-full font-romantic text-lg shadow-lg"
            onClick={() => {
              triggerHearts();
              setTimeout(triggerCelebration, 500);
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(244, 114, 182, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-5 h-5" />
            Kutla! 🎉
          </motion.button>
        </motion.div>

        {/* Decorative Hearts */}
        <motion.div
          className="flex justify-center gap-2 mt-8 text-rose-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="text-2xl"
              animate={{ 
                y: [0, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 1.5, 
                delay: i * 0.2,
                repeat: Infinity 
              }}
            >
              ♥
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DateCounter;

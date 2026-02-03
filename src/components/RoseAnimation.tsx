import { motion } from "framer-motion";

interface RoseAnimationProps {
  onComplete: () => void;
}

const RoseAnimation = ({ onComplete }: RoseAnimationProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Rose SVG Animation */}
      <motion.div
        className="relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        onAnimationComplete={onComplete}
      >
        <svg
          viewBox="0 0 200 250"
          className="w-48 h-60 md:w-64 md:h-80"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stem */}
          <motion.path
            d="M100 250 Q100 180 100 140"
            stroke="hsl(120, 40%, 35%)"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          {/* Left Leaf */}
          <motion.path
            d="M100 200 Q70 190 60 170 Q80 175 100 200"
            fill="hsl(120, 45%, 40%)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          
          {/* Right Leaf */}
          <motion.path
            d="M100 180 Q130 170 140 150 Q120 155 100 180"
            fill="hsl(120, 45%, 40%)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />

          {/* Rose Center */}
          <motion.ellipse
            cx="100"
            cy="90"
            rx="15"
            ry="20"
            fill="hsl(350, 85%, 40%)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.5 }}
          />

          {/* Inner Petals */}
          <motion.ellipse
            cx="85"
            cy="85"
            rx="18"
            ry="25"
            fill="hsl(350, 80%, 50%)"
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: -30 }}
            transition={{ duration: 0.4, delay: 1.6 }}
            style={{ transformOrigin: "100px 90px" }}
          />
          <motion.ellipse
            cx="115"
            cy="85"
            rx="18"
            ry="25"
            fill="hsl(350, 80%, 50%)"
            initial={{ scale: 0, rotate: 30 }}
            animate={{ scale: 1, rotate: 30 }}
            transition={{ duration: 0.4, delay: 1.7 }}
            style={{ transformOrigin: "100px 90px" }}
          />

          {/* Middle Petals */}
          <motion.ellipse
            cx="70"
            cy="80"
            rx="22"
            ry="30"
            fill="hsl(350, 75%, 55%)"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: -45 }}
            transition={{ duration: 0.4, delay: 1.8 }}
            style={{ transformOrigin: "100px 90px" }}
          />
          <motion.ellipse
            cx="130"
            cy="80"
            rx="22"
            ry="30"
            fill="hsl(350, 75%, 55%)"
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 45 }}
            transition={{ duration: 0.4, delay: 1.9 }}
            style={{ transformOrigin: "100px 90px" }}
          />

          {/* Outer Petals */}
          <motion.ellipse
            cx="55"
            cy="75"
            rx="28"
            ry="35"
            fill="hsl(350, 70%, 60%)"
            initial={{ scale: 0, rotate: -60 }}
            animate={{ scale: 1, rotate: -60 }}
            transition={{ duration: 0.5, delay: 2 }}
            style={{ transformOrigin: "100px 90px" }}
          />
          <motion.ellipse
            cx="145"
            cy="75"
            rx="28"
            ry="35"
            fill="hsl(350, 70%, 60%)"
            initial={{ scale: 0, rotate: 60 }}
            animate={{ scale: 1, rotate: 60 }}
            transition={{ duration: 0.5, delay: 2.1 }}
            style={{ transformOrigin: "100px 90px" }}
          />
          <motion.ellipse
            cx="100"
            cy="50"
            rx="30"
            ry="35"
            fill="hsl(350, 65%, 65%)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          />
        </svg>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl -z-10"
          style={{ background: "radial-gradient(circle, hsl(350, 70%, 60%, 0.3) 0%, transparent 70%)" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </motion.div>
    </div>
  );
};

export default RoseAnimation;

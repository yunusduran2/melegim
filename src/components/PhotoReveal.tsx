import { motion } from "framer-motion";

interface PhotoRevealProps {
  onContinue: () => void;
}

const PhotoReveal = ({ onContinue }: PhotoRevealProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <motion.div
        className="card-romantic max-w-lg w-full text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Photo Container */}
        <motion.div
          className="photo-frame mx-auto mb-8 max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="aspect-[3/4] bg-gradient-to-br from-rose-petal to-rose-light flex items-center justify-center overflow-hidden"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <img
              src="/gercek-gulum.jpeg"
              alt="Meleğim"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Romantic Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-romantic-subtitle text-xl md:text-2xl mb-8 leading-relaxed">
            "Gül dediğin böyle olur…
            <br />
            <span className="text-rose-primary">Her baktığımda kalbim açıyor.</span>"
          </p>
        </motion.div>

        {/* Continue Button */}
        <motion.button
          className="btn-gold"
          onClick={onContinue}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Devam Et
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PhotoReveal;

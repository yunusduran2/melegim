import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Yüreğimden Tut - Eylem Aktaş
  const musicUrl = "/muzik.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
      setShowPrompt(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} preload="auto" />
      
      {/* Initial Prompt */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 2 }}
          >
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-rose-light text-rose-dark font-romantic"
              onClick={toggleMusic}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0 0 0 0 rgba(244, 114, 182, 0.4)", "0 0 0 10px rgba(244, 114, 182, 0)", "0 0 0 0 rgba(244, 114, 182, 0.4)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Music className="w-4 h-4" />
              <span>Müziği Aç</span>
              <span className="text-lg">🎵</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Music Button */}
      <motion.button
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-rose-light flex items-center justify-center text-rose-dark hover:bg-rose-petal transition-colors"
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
        
        {/* Playing Animation */}
        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-rose-primary"
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
      </motion.button>
    </>
  );
};

export default MusicPlayer;

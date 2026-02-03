import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

interface Photo {
  id: number;
  url: string;
  caption: string;
  date: string;
}

interface PhotoGalleryProps {
  onContinue: () => void;
}

const PhotoGallery = ({ onContinue }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fotoğrafları buraya ekle
  const photos: Photo[] = [
    {
      id: 1,
      url: "/WhatsApp Image 2026-02-03 at 22.12.21.jpeg",
      caption: "Seninle her an güzel...",
      date: "2025",
    },
    {
      id: 2,
      url: "/WhatsApp Image 2026-02-03 at 22.12.22.jpeg",
      caption: "En tatlı anlarımız",
      date: "2025",
    },
    {
      id: 3,
      url: "/WhatsApp Image 2026-02-03 at 22.12.22 (1).jpeg",
      caption: "Gülüşün her şeye bedel",
      date: "2025",
    },
    {
      id: 4,
      url: "/WhatsApp Image 2026-02-03 at 22.12.22 (2).jpeg",
      caption: "Birlikte güzel",
      date: "2025",
    },
    {
      id: 5,
      url: "/WhatsApp Image 2026-02-03 at 22.12.22 (4).jpeg",
      caption: "Aşkım benim",
      date: "2025",
    },
    {
      id: 6,
      url: "/WhatsApp Image 2026-02-03 at 22.12.31.jpeg",
      caption: "Sonsuza kadar seninle...",
      date: "2025",
    },
  ];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const currentPhoto = photos[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <motion.div
        className="card-romantic max-w-2xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.h2
          className="text-romantic-title text-3xl md:text-4xl mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          📸 Anılarımız
        </motion.h2>

        {/* Photo Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="photo-frame mx-auto mb-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square bg-gradient-to-br from-rose-petal to-rose-light flex items-center justify-center overflow-hidden">
                {currentPhoto.url ? (
                  <img
                    src={currentPhoto.url}
                    alt={currentPhoto.caption}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-8">
                    <motion.div
                      className="text-8xl mb-4"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {["💕", "🌹", "💑", "❤️"][currentIndex % 4]}
                    </motion.div>
                    <p className="font-romantic text-sm text-muted-foreground">
                      (Fotoğraf eklenecek)
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevPhoto}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-rose-dark hover:bg-rose-petal transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-rose-dark hover:bg-rose-petal transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Photo Counter */}
        <motion.div
          key={currentIndex}
          className="text-center mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-muted-foreground font-romantic flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-rose-primary" />
            {currentIndex + 1} / {photos.length}
          </p>
        </motion.div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-rose-primary w-6"
                  : "bg-rose-light hover:bg-rose-primary/50"
              }`}
            />
          ))}
        </div>

        {/* Continue Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="btn-romantic"
            onClick={onContinue}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Devam Et
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PhotoGallery;

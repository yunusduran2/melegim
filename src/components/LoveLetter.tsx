import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface LoveLetterProps {
  onContinue: () => void;
}

const LoveLetter = ({ onContinue }: LoveLetterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  // Mektup sayfaları - istediğin kadar ekleyebilirsin
  const letterPages = [
    {
      title: "Canım Meleğim,",
      content: `Sana bu satırları yazarken kalbim hızla atıyor. 
      
Her sabah uyandığımda ilk düşüncem sen oluyorsun. Gülüşün, sesin, bakışların... Her şeyin aklımdan çıkmıyor.

Seninle tanıştığım gün hayatımın en güzel günüydü. O günden beri her şey daha renkli, daha anlamlı.`,
    },
    {
      title: "",
      content: `Bazen kelimeler yetersiz kalıyor seni anlatmaya. Sen sadece sevgilim değil, en yakın arkadaşım, sırdaşım, her şeyimsin.

Seninle geçirdiğim her an, bir ömre bedel. Gülüşün güneşim, sesin melodim, kalbin evim.

Seni her gün biraz daha çok seviyorum...`,
    },
    {
      title: "",
      content: `Gelecekte seninle yaşayacağımız tüm güzel anları düşünüyorum. Birlikte güleceğimiz, ağlayacağımız, büyüyeceğimiz günleri...

Sen benim için sadece bir sevgili değilsin. Sen benim kaderim, alın yazımın en güzel satırısın.

Sonsuza kadar seninle...

♥ Seni Seviyorum ♥`,
    },
  ];

  const handleOpenLetter = () => {
    setIsOpen(true);
  };

  const nextPage = () => {
    if (currentPage < letterPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          // Closed Envelope
          <motion.div
            key="envelope"
            className="cursor-pointer"
            onClick={handleOpenLetter}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 90 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              {/* Envelope Body */}
              <motion.div
                className="w-72 h-48 md:w-96 md:h-64 bg-gradient-to-br from-rose-petal to-rose-light rounded-lg shadow-2xl relative overflow-hidden"
                animate={{ 
                  boxShadow: ["0 0 20px rgba(244, 114, 182, 0.3)", "0 0 40px rgba(244, 114, 182, 0.5)", "0 0 20px rgba(244, 114, 182, 0.3)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Envelope Flap */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-rose-light to-rose-primary origin-bottom"
                  style={{
                    clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                  }}
                />
                
                {/* Heart Seal */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-rose-primary rounded-full flex items-center justify-center shadow-lg z-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-8 h-8 text-white fill-white" />
                </motion.div>
              </motion.div>

              {/* Label */}
              <motion.p
                className="text-center mt-6 text-romantic-subtitle text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                💌 Mektubu aç...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          // Open Letter
          <motion.div
            key="letter"
            className="card-romantic max-w-2xl w-full"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Letter Header */}
            <div className="flex justify-between items-center mb-6">
              <motion.div
                className="text-4xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💌
              </motion.div>
              <div className="flex gap-1">
                {letterPages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentPage ? "bg-rose-primary" : "bg-rose-light"
                    }`}
                  />
                ))}
              </div>
              <div className="text-muted-foreground font-romantic">
                {currentPage + 1}/{letterPages.length}
              </div>
            </div>

            {/* Letter Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="min-h-[300px] md:min-h-[350px]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {letterPages[currentPage].title && (
                  <h3 className="text-romantic-title text-2xl md:text-3xl mb-4">
                    {letterPages[currentPage].title}
                  </h3>
                )}
                <p className="text-romantic-body whitespace-pre-line leading-relaxed text-lg">
                  {letterPages[currentPage].content}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <motion.button
                className={`px-6 py-2 rounded-full font-romantic text-lg transition-all ${
                  currentPage === 0
                    ? "opacity-0 pointer-events-none"
                    : "bg-rose-light text-rose-dark hover:bg-rose-primary hover:text-white"
                }`}
                onClick={prevPage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Önceki
              </motion.button>

              {currentPage === letterPages.length - 1 ? (
                <motion.button
                  className="btn-gold"
                  onClick={onContinue}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Devam Et ♥
                </motion.button>
              ) : (
                <motion.button
                  className="px-6 py-2 rounded-full font-romantic text-lg bg-rose-light text-rose-dark hover:bg-rose-primary hover:text-white transition-all"
                  onClick={nextPage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sonraki →
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoveLetter;

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface Memory {
  id: number;
  date: string;
  title: string;
  description: string;
  emoji: string;
}

interface MemoriesTimelineProps {
  onContinue: () => void;
}

const MemoriesTimeline = ({ onContinue }: MemoriesTimelineProps) => {
  // Anıları buraya ekle
  const memories: Memory[] = [
    {
      id: 1,
      date: "24 Ağustos 2025",
      title: "İlk Tanışma",
      description: "Seni ilk gördüğüm an... Kalbim durdu sanki.",
      emoji: "💕",
    },
    {
      id: 2,
      date: "Eylül 2025",
      title: "İlk Randevu",
      description: "Seninle ilk kahvemizi içtik. Saatler dakikalar gibi geçti.",
      emoji: "☕",
    },
    {
      id: 3,
      date: "Ekim 2025",
      title: "İlk El Ele",
      description: "Elini ilk tuttuğum an, dünya durdu.",
      emoji: "🤝",
    },
    {
      id: 4,
      date: "Kasım 2025",
      title: "İlk 'Seni Seviyorum'",
      description: "O sözleri söylediğimde kalbim yerinden çıkacaktı.",
      emoji: "❤️",
    },
    {
      id: 5,
      date: "Aralık 2025",
      title: "İlk Yılbaşı",
      description: "Seninle girdiğim ilk yeni yıl. Daha nicelerine...",
      emoji: "🎄",
    },
    {
      id: 6,
      date: "Şubat 2026",
      title: "Bugün",
      description: "Ve hikayemiz devam ediyor... Sonsuza kadar.",
      emoji: "🌹",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <motion.div
        className="card-romantic max-w-2xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.h2
          className="text-romantic-title text-3xl md:text-4xl mb-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          🗓️ Hikayemiz
        </motion.h2>
        <motion.p
          className="text-muted-foreground font-romantic text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Birlikte yazdığımız anılar...
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-primary via-rose-light to-rose-primary" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                className={`relative flex items-center gap-4 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.15 }}
              >
                {/* Content Card */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-rose-light/50"
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(244, 114, 182, 0.3)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      <span className="text-2xl">{memory.emoji}</span>
                      <span className="text-sm text-muted-foreground font-romantic">
                        {memory.date}
                      </span>
                    </div>
                    <h3 className="font-display text-lg text-rose-dark font-semibold mb-1">
                      {memory.title}
                    </h3>
                    <p className="font-romantic text-muted-foreground">
                      {memory.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-primary rounded-full border-4 border-white shadow-lg z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.15, type: "spring" }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-rose-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>

                {/* Empty Space for Alternating Layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Heart */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 text-rose-primary"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="w-5 h-5 fill-current" />
            <span className="font-romantic text-lg">ve daha nice anılar...</span>
            <Heart className="w-5 h-5 fill-current" />
          </motion.div>
        </motion.div>

        {/* Continue Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <motion.button
            className="btn-gold"
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

export default MemoriesTimeline;

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

interface VerificationStepProps {
  onSuccess: () => void;
}

const VerificationStep = ({ onSuccess }: VerificationStepProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const correctAnswer = "24.08";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (value === correctAnswer) {
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        onSuccess();
      }, 1500);
    } else {
      setError(true);
      setShowHint(true);
      setTimeout(() => setError(false), 500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Allow only numbers and dots
    if (/^[\d.]*$/.test(newValue) && newValue.length <= 5) {
      setValue(newValue);
      setError(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <motion.div
        className="card-romantic max-w-md w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Question Icon */}
        <motion.div
          className="text-6xl mb-6"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🔐
        </motion.div>

        <h2 className="text-romantic-title text-3xl md:text-4xl mb-4">
          Robot musun?
        </h2>
        
        <p className="text-romantic-body mb-8">
          Tanışma tarihimiz? (gün.ay)
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <Input
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="gg.aa"
              className={`text-center text-2xl font-display h-16 transition-all duration-300 ${
                error 
                  ? "border-destructive border-2 bg-destructive/5" 
                  : success 
                  ? "border-green-500 border-2 bg-green-50" 
                  : "border-rose-light focus:border-rose-primary"
              }`}
              disabled={success}
              autoFocus
            />
          </motion.div>

          {error && (
            <motion.p
              className="text-destructive font-romantic text-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Nasıl yani 😔
            </motion.p>
          )}

          {showHint && !success && (
            <motion.p
              className="text-muted-foreground font-romantic text-sm italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              İpucu: Bu tarih kalbimizin başlangıcı…
            </motion.p>
          )}

          {success ? (
            <motion.div
              className="flex items-center justify-center gap-2 text-rose-dark"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Check className="w-8 h-8" />
              <span className="font-display text-xl">Doğru! ♥</span>
            </motion.div>
          ) : (
            <motion.button
              type="submit"
              className="btn-romantic w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Kontrol Et
            </motion.button>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default VerificationStep;

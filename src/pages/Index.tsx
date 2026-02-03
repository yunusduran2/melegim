import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeartParticles from "@/components/HeartParticles";
import RoseAnimation from "@/components/RoseAnimation";
import NameReveal from "@/components/NameReveal";
import RomanticQuote from "@/components/RomanticQuote";
import ReadyQuestion from "@/components/ReadyQuestion";
import CountdownAnimation from "@/components/CountdownAnimation";
import VerificationStep from "@/components/VerificationStep";
import PhotoReveal from "@/components/PhotoReveal";
import PhotoGallery from "@/components/PhotoGallery";
import LoveLetter from "@/components/LoveLetter";
import DateCounter from "@/components/DateCounter";
import MusicPlayer from "@/components/MusicPlayer";
import ConfettiEffect, { triggerCelebration } from "@/components/ConfettiEffect";

type Step =
  | "rose"
  | "name"
  | "quote"
  | "ready"
  | "countdown"
  | "verify"
  | "photo"
  | "gallery"
  | "letter"
  | "counter";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>("rose");
  const [roseComplete, setRoseComplete] = useState(false);

  // Check localStorage for saved progress
  useEffect(() => {
    const savedStep = localStorage.getItem("melegim-step");
    if (savedStep && savedStep !== "rose") {
      setCurrentStep(savedStep as Step);
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    if (currentStep !== "rose") {
      localStorage.setItem("melegim-step", currentStep);
    }
  }, [currentStep]);

  const goToStep = (step: Step) => {
    setCurrentStep(step);
  };

  const handleRoseComplete = () => {
    setRoseComplete(true);
    setTimeout(() => goToStep("name"), 500);
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Heart Particles */}
      <HeartParticles />

      {/* Music Player */}
      <MusicPlayer />

      {/* Confetti Effect - triggers on counter page */}
      <ConfettiEffect trigger={currentStep === "counter"} type="celebration" />

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {currentStep === "rose" && (
            <RoseAnimation onComplete={handleRoseComplete} />
          )}

          {currentStep === "name" && (
            <NameReveal onContinue={() => goToStep("quote")} />
          )}

          {currentStep === "quote" && (
            <RomanticQuote onContinue={() => goToStep("ready")} />
          )}

          {currentStep === "ready" && (
            <ReadyQuestion onReady={() => goToStep("countdown")} />
          )}

          {currentStep === "countdown" && (
            <CountdownAnimation onComplete={() => goToStep("verify")} />
          )}

          {currentStep === "verify" && (
            <VerificationStep onSuccess={() => {
              triggerCelebration();
              goToStep("photo");
            }} />
          )}

          {currentStep === "photo" && (
            <PhotoReveal onContinue={() => goToStep("gallery")} />
          )}

          {currentStep === "gallery" && (
            <PhotoGallery onContinue={() => goToStep("letter")} />
          )}

          {currentStep === "letter" && (
            <LoveLetter onContinue={() => {
              triggerCelebration();
              goToStep("counter");
            }} />
          )}

          {currentStep === "counter" && <DateCounter />}
        </motion.div>
      </AnimatePresence>

      {/* Reset Button (for development) */}
      {currentStep !== "rose" && (
        <motion.button
          className="fixed bottom-4 right-4 text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors z-50"
          onClick={() => {
            localStorage.removeItem("melegim-step");
            setCurrentStep("rose");
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Baştan başla
        </motion.button>
      )}
    </div>
  );
};

export default Index;

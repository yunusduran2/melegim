import { useEffect, useCallback } from "react";
import confetti from "canvas-confetti";

interface ConfettiEffectProps {
  trigger?: boolean;
  type?: "hearts" | "celebration" | "fireworks";
}

const ConfettiEffect = ({ trigger = false, type = "hearts" }: ConfettiEffectProps) => {
  const fireHearts = useCallback(() => {
    const heart = confetti.shapeFromPath({
      path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    });

    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0.5,
      decay: 0.94,
      startVelocity: 30,
      colors: ["#ff69b4", "#ff1493", "#db7093", "#ffb6c1", "#ffc0cb"],
      shapes: [heart],
      scalar: 2,
    };

    confetti({
      ...defaults,
      particleCount: 50,
      origin: { x: 0.5, y: 0.5 },
    });

    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 30,
        origin: { x: 0.3, y: 0.6 },
      });
    }, 200);

    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 30,
        origin: { x: 0.7, y: 0.6 },
      });
    }, 400);
  }, []);

  const fireCelebration = useCallback(() => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ["#ff69b4", "#ffd700", "#ff1493", "#ffb6c1", "#daa520"],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, []);

  const fireFireworks = useCallback(() => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      colors: ["#ff69b4", "#ffd700", "#ff1493", "#ffb6c1", "#daa520", "#ff6b6b"],
    };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  }, []);

  useEffect(() => {
    if (trigger) {
      switch (type) {
        case "hearts":
          fireHearts();
          break;
        case "celebration":
          fireCelebration();
          break;
        case "fireworks":
          fireFireworks();
          break;
      }
    }
  }, [trigger, type, fireHearts, fireCelebration, fireFireworks]);

  return null;
};

// Export helper functions for manual triggering
export const triggerHearts = () => {
  const heart = confetti.shapeFromPath({
    path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
  });

  confetti({
    spread: 360,
    ticks: 100,
    gravity: 0.5,
    decay: 0.94,
    startVelocity: 30,
    particleCount: 80,
    colors: ["#ff69b4", "#ff1493", "#db7093", "#ffb6c1", "#ffc0cb"],
    shapes: [heart],
    scalar: 2,
    origin: { x: 0.5, y: 0.5 },
  });
};

export const triggerCelebration = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    colors: ["#ff69b4", "#ffd700", "#ff1493", "#ffb6c1", "#daa520"],
  };

  confetti({
    ...defaults,
    particleCount: Math.floor(count * 0.25),
    spread: 26,
    startVelocity: 55,
  });
  
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: Math.floor(count * 0.35),
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
  }, 100);
};

export default ConfettiEffect;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingAnimationProps {
  onComplete?: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [text, setText] = useState("");
  const fullText = "PRITHVI GRAPHIX";
  const [isComplete, setIsComplete] = useState(false);

  // Typing effect
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      // Wait a bit after typing completes before triggering the exit animation
      const timeout = setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 500);
      }, 800);

      return () => clearTimeout(timeout);
    }
  }, [text, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Scanlines overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 scanlines"></div>

        {/* Text with glitch effect */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-[#00ff00] glitch-text"
          data-text={text}
        >
          {text}
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;

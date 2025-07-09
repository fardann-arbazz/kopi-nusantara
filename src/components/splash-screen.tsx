import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiCoffee } from "react-icons/fi";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [initialAnimComplete, setInitialAnimComplete] = useState(false);
  const text = "Kopi Nusantara";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 5000); // Extended duration for secondary animation

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Split text into letters for individual animation
  const letters = Array.from(text).map((letter, index) => (
    <motion.span
      key={index}
      initial={{ y: 0, rotate: 0 }}
      animate={
        initialAnimComplete
          ? {
              y: [0, -5, 3, -2, 0],
              rotate: [0, 5, -3, 2, 0],
              transition: {
                delay: index * 0.05,
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }
          : {}
      }
      className="inline-block"
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  ));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-amber-900 flex flex-col items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Coffee icon with enhanced animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: 0,
              transition: { type: "spring", stiffness: 300, damping: 10 },
            }}
            onAnimationComplete={() => setInitialAnimComplete(true)}
          >
            <FiCoffee className="text-amber-200 w-16 h-16 animate-bounce" />
          </motion.div>

          {/* Text with secondary animation */}
          <motion.h1
            className="text-4xl md:text-7xl font-bold text-amber-100 font-[Poppins] mt-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
          >
            {letters}
          </motion.h1>

          {/* Loading bar with improved animation */}
          <motion.div
            className="absolute bottom-10 left-0 right-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="h-1.5 w-40 bg-amber-700/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-amber-300 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Subtle floating coffee beans decoration */}
          {initialAnimComplete && (
            <>
              <motion.div
                className="absolute top-1/4 left-1/4 text-amber-200/30 text-2xl"
                initial={{ y: 0 }}
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                {"☕"}
              </motion.div>
              <motion.div
                className="absolute bottom-1/3 right-1/4 text-amber-200/30 text-2xl"
                initial={{ y: 0 }}
                animate={{
                  y: [0, 10, 0],
                  transition: {
                    delay: 1,
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                {"☕"}
              </motion.div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;

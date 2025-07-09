import { isWithinInterval } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiCoffee } from "react-icons/fi";

const StatusIndicator = () => {
  const now = new Date();
  const currentHour = now.getHours();

  // Cafe hours
  const openingHours = {
    weekday: { open: 8, close: 22 }, // 8AM - 10PM
    weekend: { open: 7, close: 23 }, // 7AM - 11PM
  };

  const isWeekend = now.getDay() === 0 || now.getDay() === 6;
  const { open, close } = isWeekend
    ? openingHours.weekend
    : openingHours.weekday;
  const isOpen = isWithinInterval(now, {
    start: new Date().setHours(open, 0, 0),
    end: new Date().setHours(close, 0, 0),
  });

  // Calculate time until open/close
  const hoursUntilChange = isOpen
    ? close - currentHour
    : (isWeekend ? 7 : 8) + (24 - currentHour);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`flex items-center px-3 py-1.5 rounded-full backdrop-blur-sm ${
        isOpen
          ? "bg-green-500/10 border border-green-500/20 text-white"
          : "bg-amber-500/10 border border-amber-500/20 text-white"
      }`}
    >
      {/* Animated status dot */}
      <motion.div
        className="relative w-4 h-4 mr-2 flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
          transition: { repeat: isOpen ? Infinity : 0, duration: 2 },
        }}
      >
        <div
          className={`absolute inset-0 rounded-full ${
            isOpen ? "bg-green-500" : "bg-amber-500"
          } opacity-80`}
        />
        <div
          className={`absolute inset-0 rounded-full ${
            isOpen ? "bg-green-400" : "bg-amber-400"
          } animate-ping opacity-30`}
        />
      </motion.div>

      {/* Status text with icon */}
      <div className="flex items-center">
        {isOpen ? (
          <FiCoffee className="w-3.5 h-3.5 mr-1.5 text-white" />
        ) : (
          <FiClock className="w-3.5 h-3.5 mr-1.5 text-white" />
        )}

        <AnimatePresence mode="wait">
          <motion.span
            key={isOpen ? "open" : "closed"}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="text-xs font-medium"
          >
            {isOpen ? (
              <>
                <span className="font-semibold">Buka</span> - Tutup pukul{" "}
                {close}:00
                <span className="opacity-70 ml-1.5">
                  ({hoursUntilChange} jam lagi)
                </span>
              </>
            ) : (
              <>
                <span className="font-semibold">Tutup</span> - Buka{" "}
                {isWeekend ? "besok 07:00" : "08:00"}
                <span className="opacity-70 ml-1.5">
                  ({hoursUntilChange} jam lagi)
                </span>
              </>
            )}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default StatusIndicator;

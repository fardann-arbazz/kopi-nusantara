import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/f1/79/83/f17983147805f8d34257a3f3e2a6b8f5.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-coffee-darker/50"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-coffee-light mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rasakan Seni Kopi Nusantara
        </motion.h1>
        <motion.p
          className="text-base md:text-xl text-coffee-light mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Racikan spesial dari biji kopi pilihan asli Indonesia, disajikan
          dengan penuh passion oleh barista profesional kami.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#about"
            className="inline-block bg-coffee-medium hover:bg-coffee-dark text-coffee-darker font-semibold px-8 py-3 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jelajahi Menu
          </motion.a>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FiArrowDown className="text-coffee-light text-2xl" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCoffee, FiClock } from "react-icons/fi";
import StatusIndicator from "../components/status-indicator";

const MenuHighlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const menuItems = [
    {
      name: "Noir Signature Blend",
      price: "35K",
      description: "Racikan eksklusif biji kopi Aceh Gayo dan Toraja",
      isPopular: true,
    },
    {
      name: "Affogato Noir",
      price: "45K",
      description: "Espresso dengan es krim vanilla homemade",
      isPopular: true,
    },
    {
      name: "Avocado Coffee",
      price: "40K",
      description: "Perpaduan alpukat dengan espresso yang unik",
      isNew: true,
    },
    {
      name: "Matcha Latte",
      price: "38K",
      description: "Matcha premium dari Jepang dengan tekstur creamy",
      isVegan: true,
    },
  ];

  return (
    <section id="menu" className="py-20 bg-gray-100 text-black">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Menu Andalan</h2>
          <div className="w-20 h-0.5 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nikmati racikan spesial dari barista berpengalaman kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">{item.name}</h3>
                <span className="font-bold">Rp{item.price}</span>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>

              <div className="flex gap-2">
                {item.isPopular && (
                  <span className="bg-black text-white text-xs px-2 py-1 rounded">
                    POPULAR
                  </span>
                )}
                {item.isNew && (
                  <span className="bg-white text-black border border-black text-xs px-2 py-1 rounded">
                    BARU
                  </span>
                )}
                {item.isVegan && (
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    VEGAN
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="/full-menu.pdf"
            download
            className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors"
          >
            <FiCoffee className="mr-2" />
            Download Full Menu (PDF)
          </a>
        </motion.div>

        <motion.div
          className="mt-16 bg-black text-white p-8 rounded-lg"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center">
              <FiClock className="text-2xl mr-2" />
              <span className="font-medium">
                Buka Setiap Hari: 08.00 - 22.00
              </span>
            </div>
            <div className="flex items-center">
              <StatusIndicator />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuHighlights;

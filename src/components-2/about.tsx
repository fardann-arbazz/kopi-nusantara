import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCoffee, FiWifi, FiUsers } from "react-icons/fi";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <FiCoffee className="text-3xl" />,
      title: "Kopi Spesial",
      description: "Racikan kopi premium dari biji pilihan Indonesia",
    },
    {
      icon: <FiWifi className="text-3xl" />,
      title: "Tempat Nyaman",
      description: "Area kerja dengan WiFi cepat dan stop kontak melimpah",
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: "Komunitas",
      description: "Tempat berkumpulnya komunitas kreatif Jakarta",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Tentang Kami</h2>
          <div className="w-20 h-0.5 bg-black mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Café Noir hadir sebagai ruang modern untuk menikmati kopi
            berkualitas dengan suasana yang instagramable
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Interior Café Noir"
                className="rounded-lg shadow-xl w-full"
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-black text-white p-4 rounded-lg shadow-lg"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="text-4xl font-bold mr-2">4.9</div>
                  <div className="text-sm">
                    Rating Google
                    <br />
                    dari 500+ review
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Kenapa Memilih Café Noir?
            </h3>
            <p className="text-gray-600 mb-8">
              Kami menghadirkan pengalaman berkafe yang berbeda dengan konsep
              modern industrial. Setiap sudut dirancang untuk kenyamanan dan
              estetika, mulai dari tempat kerja hingga spot foto Instagrammable.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="#gallery"
                className="inline-block border-2 border-black text-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lihat Galeri Kami
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

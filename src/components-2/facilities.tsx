import { motion } from "framer-motion";
import { FiWifi, FiPower, FiCoffee, FiSmile } from "react-icons/fi";

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: <FiWifi className="text-3xl" />,
      title: "Free WiFi Cepat",
      description: "Internet cepat untuk kerja atau streaming",
    },
    {
      icon: <FiPower className="text-3xl" />,
      title: "Stop Kontar Banyak",
      description: "Nyaman untuk kerja remote atau nugas",
    },
    {
      icon: <FiCoffee className="text-3xl" />,
      title: "Barista Profesional",
      description: "Kopi dibuat dengan teknik penyajian terbaik",
    },
    {
      icon: <FiSmile className="text-3xl" />,
      title: "Pelayanan Ramah",
      description: "Staff kami siap membuat Anda nyaman",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Kenapa Memilih Heira Kaffe?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan pengalaman berkafe yang berbeda dengan fasilitas
            lengkap untuk segala kebutuhan Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                {facility.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {facility.title}
              </h3>
              <p className="text-gray-600">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;

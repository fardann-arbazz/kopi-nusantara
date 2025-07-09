import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiPhone } from "react-icons/fi";

const LocationSection = () => {
  return (
    <section id="lokasi" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Kunjungi Kami
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-accent bg-opacity-10 p-3 rounded-full mr-4 text-accent">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Lokasi
                  </h3>
                  <p className="text-gray-600">
                    Jl. Kemang Raya No. 12, Bangka, Mampang Prapatan
                    <br />
                    Jakarta Selatan, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent bg-opacity-10 p-3 rounded-full mr-4 text-accent">
                  <FiClock className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Jam Operasional
                  </h3>
                  <p className="text-gray-600">
                    Senin - Jumat: 08.00 - 22.00
                    <br />
                    Sabtu - Minggu: 07.00 - 23.00
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent bg-opacity-10 p-3 rounded-full mr-4 text-accent">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Kontak
                  </h3>
                  <p className="text-gray-600">
                    +62 812 3456 7890
                    <br />
                    <a
                      href="mailto:hello@heirakaffe.com"
                      className="hover:text-accent transition-colors"
                    >
                      hello@heirakaffe.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 w-full h-96 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.317239755293!2d106.7978263153706!3d-6.352996295403974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efdb9a4d0e89%3A0x7277e7eefb4e4a1f!2sKemang%20Raya%2C%20RT.5%2FRW.4%2C%20Bangka%2C%20Kec.%20Mampang%20Prpt.%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012730!5e0!3m2!1sen!2sid!4v1621234567890!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Peta Lokasi Heira Kaffe"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

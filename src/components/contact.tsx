import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-amber-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-amber-400"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-amber-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-[Poppins]">
            Hubungi <span className="text-amber-700">Kopi Nusantara</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-amber-700"></div>
            <div className="w-16 h-1 bg-amber-500 mx-2"></div>
            <div className="w-16 h-1 bg-amber-300"></div>
          </div>
          <p className="text-amber-900 max-w-3xl mx-auto text-lg">
            Silakan datang langsung ke kedai kami atau hubungi melalui berbagai
            cara di bawah ini. Kami siap melayani Anda!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information - Left Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Location Card */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm border border-amber-100 hover:border-amber-300 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start">
                <div className="text-amber-700 mr-4 mt-1">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2 font-[Poppins]">
                    Lokasi
                  </h3>
                  <p className="text-amber-800 mb-3">
                    Jl. Kebon Kopi No. 123, Jakarta Selatan
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-amber-700 hover:text-amber-900 font-medium text-sm"
                  >
                    Lihat di Google Maps →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Card */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-amber-100 hover:border-amber-300 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start mb-4">
                    <div className="text-amber-700 mr-3">
                      <FiPhone className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-amber-900">
                      Telepon
                    </h3>
                  </div>
                  <p className="text-amber-800 mb-3">(021) 1234 5678</p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center text-sm text-green-600 hover:text-green-700"
                  >
                    <FaWhatsapp className="mr-2" /> Chat via WhatsApp
                  </a>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-amber-100 hover:border-amber-300 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start mb-4">
                    <div className="text-amber-700 mr-3">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-amber-900">
                      Email
                    </h3>
                  </div>
                  <p className="text-amber-800 mb-3">halo@kopinusantara.id</p>
                  <a
                    href="mailto:halo@kopinusantara.id"
                    className="mt-auto text-sm text-amber-700 hover:text-amber-900"
                  >
                    Kirim email langsung →
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Hours Card */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm border border-amber-100 hover:border-amber-300 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start">
                <div className="text-amber-700 mr-4 mt-1">
                  <FiClock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2 font-[Poppins]">
                    Jam Operasional
                  </h3>
                  <div className="space-y-2 text-amber-800">
                    <div className="flex justify-between max-w-xs">
                      <span>Senin - Jumat:</span>
                      <span className="font-medium">07.00 - 21.00</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span>Sabtu - Minggu:</span>
                      <span className="font-medium">08.00 - 22.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="bg-amber-800/10 p-6 rounded-xl border border-amber-800/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-amber-900 mb-4">
                Ikuti Kami di Media Sosial
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/kopinusantara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full text-amber-700 hover:text-amber-900 shadow-sm hover:shadow-md transition-all"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full text-green-500 hover:text-green-600 shadow-sm hover:shadow-md transition-all"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-amber-900 mb-6 font-[Poppins]">
              Kirim Pesan Langsung
            </h3>
            <form className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="name"
                  className="block text-amber-900 mb-2 font-medium"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
                  placeholder="Masukkan nama Anda"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="email"
                  className="block text-amber-900 mb-2 font-medium"
                >
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
                  placeholder="email@contoh.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label
                  htmlFor="message"
                  className="block text-amber-900 mb-2 font-medium"
                >
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent"
                  placeholder="Tulis pesan Anda disini..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FiSend className="mr-2" /> Kirim Pesan
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Embed */}
        <motion.div
          className="mt-16 rounded-2xl overflow-hidden shadow-xl border border-amber-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613506394!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b462a9b4a516db9!2sMonumen%20Nasional!5e0!3m2!1sen!2sid!4v1623837025765!5m2!1sen!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            title="Peta Lokasi Kopi Nusantara"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

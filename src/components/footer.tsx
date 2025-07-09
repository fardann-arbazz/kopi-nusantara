import { motion } from "framer-motion";
import {
  FiInstagram,
  FiFacebook,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { CiCoffeeCup } from "react-icons/ci";

const Footer = () => {
  const footerLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Galeri", href: "#gallery" },
    { name: "Kontak", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FiInstagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <FaWhatsapp className="w-5 h-5" />, href: "#", name: "WhatsApp" },
    { icon: <FaTiktok className="w-5 h-5" />, href: "#", name: "TikTok" },
    { icon: <FiFacebook className="w-5 h-5" />, href: "#", name: "Facebook" },
  ];

  return (
    <footer className="bg-amber-900 text-amber-50 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-amber-800/30 z-0"></div>
      <GiCoffeeCup className="absolute -bottom-10 -right-10 text-amber-800/20 w-40 h-40 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="flex items-center mb-4">
              <GiCoffeeCup className="w-8 h-8 text-amber-300 mr-2" />
              <h3 className="text-2xl font-bold font-[Poppins]">
                Kopi Nusantara
              </h3>
            </div>
            <p className="text-amber-200 mb-6">
              Menghadirkan kekayaan kopi Indonesia dengan sentuhan modern sejak
              2015.
            </p>
            <div className="flex space-x-4 mt-auto">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="bg-amber-800 hover:bg-amber-700 text-amber-100 p-3 rounded-full transition-all"
                  whileHover={{ y: -3 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-5 text-amber-300 font-[Poppins]">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-amber-100 hover:text-amber-300 flex items-center transition-colors"
                  >
                    <CiCoffeeCup className="w-3 h-3 mr-2 text-amber-400" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-5 text-amber-300 font-[Poppins]">
              Hubungi Kami
            </h4>
            <address className="not-italic text-amber-100 space-y-3">
              <div className="flex items-start">
                <FiMapPin className="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                <p>
                  Jl. Kebon Kopi No. 123
                  <br />
                  Jakarta Selatan 12540
                </p>
              </div>
              <div className="flex items-center">
                <FiMail className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:halo@kopinusantara.id"
                  className="hover:text-amber-300 transition-colors"
                >
                  halo@kopinusantara.id
                </a>
              </div>
              <div className="flex items-center">
                <FiPhone className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+622112345678"
                  className="hover:text-amber-300 transition-colors"
                >
                  (021) 1234 5678
                </a>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                <a
                  href="https://wa.me/6281234567890"
                  className="hover:text-amber-300 transition-colors"
                >
                  +62 812-3456-7890
                </a>
              </div>
            </address>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-5 text-amber-300 font-[Poppins]">
              Berlangganan
            </h4>
            <p className="text-amber-200 mb-4">
              Dapatkan info promo dan menu terbaru langsung ke email Anda.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Alamat email Anda"
                className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 text-amber-900"
                required
              />
              <motion.button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiMail className="mr-2" /> Daftar Sekarang
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Copyright and Additional Links */}
        <motion.div
          className="border-t border-amber-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-300 mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} Kopi Nusantara. Seluruh hak cipta
            dilindungi.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-amber-300 hover:text-amber-100 text-sm transition-colors"
            >
              Kebijakan Privasi
            </a>
            <a
              href="#"
              className="text-amber-300 hover:text-amber-100 text-sm transition-colors"
            >
              Syarat & Ketentuan
            </a>
            <a
              href="#"
              className="text-amber-300 hover:text-amber-100 text-sm transition-colors"
            >
              FAQ
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { useState } from "react";
import { FiCoffee, FiChevronRight } from "react-icons/fi";
import { GiCoffeeCup, GiCoffeePot } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";

const menuItems = [
  {
    category: "Kopi Espresso",
    icon: <GiCoffeeCup className="w-5 h-5" />,
    items: [
      {
        name: "Espresso Tubruk",
        description:
          "Kopi murni diseduh ala tradisional Indonesia, kuat dan penuh cita rasa.",
        price: "Rp 25.000",
        popular: true,
      },
      {
        name: "Americano",
        description:
          "Espresso dengan air panas, cocok untuk yang menyukai kopi ringan.",
        price: "Rp 28.000",
      },
      {
        name: "Cappuccino Nusantara",
        description:
          "Espresso dengan susu khas Indonesia dan busa lembut, taburan bubuk kayu manis.",
        price: "Rp 32.000",
        popular: true,
      },
      {
        name: "Latte Aren",
        description: "Espresso dengan susu dan gula aren asli, manis alami.",
        price: "Rp 35.000",
      },
    ],
  },
  {
    category: "Kopi Seduh",
    icon: <GiCoffeePot className="w-5 h-5" />,
    items: [
      {
        name: "Kopi Tubruk Aceh Gayo",
        description:
          "Kopi khas Aceh diseduh tradisional, disajikan dengan ampas.",
        price: "Rp 22.000",
        popular: true,
      },
      {
        name: "Cold Brew Toraja",
        description:
          "Ekstrak dingin kopi Toraja selama 24 jam, halus dan rendah asam.",
        price: "Rp 30.000",
      },
      {
        name: "V60 Flores",
        description:
          "Kopi single-origin Flores diseduh manual dengan teknik pour over.",
        price: "Rp 35.000",
      },
      {
        name: "Kopi Jahe",
        description: "Perpaduan kopi dengan jahe asli, menghangatkan badan.",
        price: "Rp 27.000",
      },
    ],
  },
  {
    category: "Minuman Spesial",
    icon: <BiDrink className="w-5 h-5" />,
    items: [
      {
        name: "Es Kopi Kelapa",
        description: "Kopi dengan santan segar dan gula kelapa, menyegarkan.",
        price: "Rp 35.000",
        popular: true,
      },
      {
        name: "Kopi Rempah",
        description: "Perpaduan kopi dengan rempah-rempah khas Indonesia.",
        price: "Rp 33.000",
      },
      {
        name: "Avocado Coffee",
        description: "Blend alpukat dengan espresso dan susu kental manis.",
        price: "Rp 38.000",
      },
      {
        name: "Kopi Durian",
        description: "Untuk pecinta durian, padukan dengan espresso premium.",
        price: "Rp 40.000",
      },
    ],
  },
  {
    category: "Makanan Ringan",
    icon: <FaLeaf className="w-5 h-5" />,
    items: [
      {
        name: "Roti Bakar Kaya",
        description: "Roti bakar dengan selai kaya dan butter, khas Singapore.",
        price: "Rp 25.000",
      },
      {
        name: "Klepon",
        description:
          "Jajanan tradisional isi gula merah dengan taburan kelapa.",
        price: "Rp 18.000",
      },
      {
        name: "Pisang Goreng Keju",
        description: "Pisang goreng krispi dengan lelehan keju cheddar.",
        price: "Rp 22.000",
        popular: true,
      },
      {
        name: "Lemper Ayam",
        description: "Ketupat gulung isi ayam dengan bumbu rempah khas.",
        price: "Rp 20.000",
      },
    ],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        {/* Header with Indonesian touch */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <FiCoffee className="w-8 h-8 text-amber-700" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-[Poppins]">
            Menu <span className="text-amber-700">Kopi Nusantara</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-amber-700"></div>
            <div className="w-16 h-1 bg-amber-500 mx-2"></div>
            <div className="w-16 h-1 bg-amber-300"></div>
          </div>
          <p className="text-amber-900 max-w-3xl mx-auto text-lg">
            Temukan keistimewaan kopi Indonesia dalam setiap tegukan. Kami
            menggunakan biji kopi pilihan dari berbagai daerah di Nusantara dan
            menghadirkan dengan sentuhan modern.
          </p>
        </motion.div>

        {/* Category tabs with Indonesian design */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center mb-12 overflow-x-auto pb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Scrollable category tabs with gradient fade */}
            <div className="relative overflow-x-auto pb-2 hide-scrollbar">
              <div className="inline-flex space-x-2 px-4">
                {menuItems.map((category, index) => (
                  <motion.button
                    key={index}
                    className={`relative px-4 cursor-pointer py-2.5 rounded-full font-medium transition-all flex items-center whitespace-nowrap ${
                      activeCategory === index
                        ? "bg-amber-700 text-white shadow-lg"
                        : "bg-white text-amber-900 shadow-sm hover:bg-amber-50"
                    }`}
                    onClick={() => setActiveCategory(index)}
                    whileHover={{
                      scale: activeCategory === index ? 1 : 1.05,
                      boxShadow:
                        activeCategory === index
                          ? ""
                          : "0 2px 8px rgba(180, 83, 9, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={false}
                    animate={{
                      transition: { duration: 0.2 },
                    }}
                  >
                    {/* Active indicator (animated) */}
                    {activeCategory === index && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-amber-700"
                        layoutId="activeTab"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10 flex items-center">
                      <span
                        className={`mr-2 ${
                          activeCategory === index
                            ? "text-amber-100"
                            : "text-amber-600"
                        }`}
                      >
                        {category.icon}
                      </span>
                      <span className="text-sm font-[Poppins]">
                        {category.category}
                      </span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Floating indicator (mobile only) */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-amber-500 sm:hidden"
              animate={{
                x: `${(100 / menuItems.length) * activeCategory}%`,
                width: `${100 / menuItems.length}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </motion.div>

        {/* Menu items with Indonesian aesthetic */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {menuItems[activeCategory].items.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-white p-6 rounded-xl flex justify-between border border-amber-100 hover:border-amber-300 transition-all relative ${
                item.popular ? "ring-2 ring-amber-400" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)",
              }}
            >
              {item.popular && (
                <div className="absolute -top-3 -right-3 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULER
                </div>
              )}
              <div className="mr-4">
                <h3 className="text-xl font-semibold text-amber-900 mb-1 font-[Poppins]">
                  {item.name}
                </h3>
                <p className="text-amber-800 text-sm mb-2">
                  {item.description}
                </p>
                {item.popular && (
                  <div className="flex items-center text-amber-600 text-sm mt-2">
                    <FiChevronRight className="mr-1" />
                    <span>Banyak dipilih pelanggan</span>
                  </div>
                )}
              </div>
              <div className="text-amber-700 font-bold whitespace-nowrap text-lg">
                {item.price}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special promotion banner */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-amber-700 to-amber-600 rounded-2xl p-8 text-white overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-amber-800/30"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-amber-500/20"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2 font-[Poppins]">
                Paket Ngopi Bersama
              </h3>
              <p className="text-amber-100 max-w-lg">
                Nikmati promo spesial untuk kelompok! Pesan 4 minuman dapatkan 1
                gratis. Setiap hari jam 13.00-15.00.
              </p>
            </div>
            <motion.a
              href="#promo"
              className="bg-white text-amber-800 font-semibold px-6 py-3 rounded-full whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Promo Lainnya
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;

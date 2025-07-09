import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { FaLeaf, FaHandsHelping } from "react-icons/fa";
import { GiCoffeePot } from "react-icons/gi";

const About = () => {
  const features = [
    {
      icon: <GiCoffeePot className="w-8 h-8" />,
      title: "Kopi Pilihan",
      description:
        "Biji kopi premium dari perkebunan terbaik di Indonesia seperti Aceh Gayo, Toraja, dan Kintamani.",
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Ahli Kopi Lokal",
      description:
        "Barista kami yang berpengalaman menguasai teknik seduh tradisional dan modern.",
    },
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: "Ramah Lingkungan",
      description:
        "Menggunakan kemasan ramah lingkungan dan mendukung petani kopi lokal.",
    },
    {
      icon: <FaHandsHelping className="w-8 h-8" />,
      title: "Untuk Komunitas",
      description:
        "Sebagian keuntungan kami salurkan untuk pendidikan petani kopi Indonesia.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-amber-50 to-amber-100"
    >
      <div className="container mx-auto px-4">
        {/* Header with Indonesian batik pattern */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-amber-700 opacity-20"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-[Poppins]">
            Cerita <span className="text-amber-700">Kami</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-amber-700"></div>
            <div className="w-20 h-1 bg-amber-500 mx-2"></div>
            <div className="w-20 h-1 bg-amber-300"></div>
          </div>
          <p className="text-amber-900 max-w-3xl mx-auto  sm:text-lg leading-relaxed">
            Berdiri sejak 2015 di jantung Jakarta,{" "}
            <span className="font-semibold text-amber-700">Kopi Nusantara</span>{" "}
            lahir dari kecintaan terhadap kekayaan kopi Indonesia. Kami
            menghadirkan pengalaman ngopi ala Indonesia dengan sentuhan modern,
            sekaligus menjadi ruang berkumpul yang hangat untuk berbagai
            komunitas.
          </p>
        </motion.div>

        {/* Features with Indonesian touch */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-amber-100 text-center transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
              }}
            >
              <div className="text-amber-700 mb-4 flex justify-center">
                <div className="p-3 bg-amber-50 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2 font-[Poppins]">
                {feature.title}
              </h3>
              <p className="text-amber-800 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Philosophy section with Indonesian elements */}
        <motion.div
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <motion.img
              src="https://i.pinimg.com/736x/8a/26/35/8a2635bc0d8878d26252f9f498a99b43.jpg"
              alt="Petani Kopi Indonesia"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h4 className="font-semibold">Kopi dari Tanah Air</h4>
              <p className="text-sm">Petani kopi di Gayo, Aceh</p>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-0.5 bg-amber-700 mr-3"></div>
              <span className="text-amber-700 font-medium">Fillosofi Kami</span>
            </div>
            <h3 className="text-3xl font-bold text-amber-900 mb-6 font-[Poppins]">
              Lebih dari Sekadar{" "}
              <span className="text-amber-700">Secangkir Kopi</span>
            </h3>
            <p className="text-amber-900 mb-4 leading-relaxed">
              Di Kopi Nusantara, kami percaya bahwa ngopi adalah budaya dan
              tradisi yang mengakar di Indonesia. Setiap tegukan harus membawa
              cerita tentang tanah tempat kopi itu tumbuh dan tangan-tangan yang
              merawatnya.
            </p>
            <p className="text-amber-900 mb-6 leading-relaxed">
              Kami bekerja langsung dengan petani lokal untuk memastikan
              kualitas terbaik sekaligus memberikan dampak positif bagi
              komunitas penghasil kopi di seluruh Nusantara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#menu"
                className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium px-6 py-3 rounded-full transition-colors text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Lihat Menu Kami
              </motion.a>
              <motion.a
                href="#story"
                className="inline-block border border-amber-700 text-amber-700 hover:bg-amber-50 font-medium px-6 py-3 rounded-full transition-colors text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Cerita Petani Kopi
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Indonesian coffee heritage section */}
        <div className="mt-24 bg-amber-800 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-amber-900/30"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-amber-700/20"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <GiCoffeePot className="w-12 h-12 mx-auto mb-6 text-amber-300" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-[Poppins]">
              Melestarikan <span className="text-amber-200">Warisan Kopi</span>{" "}
              Indonesia
            </h3>
            <p className="mb-8 text-amber-100 leading-relaxed">
              Dengan bangga kami menghadirkan berbagai varian kopi khas
              Nusantara dari Aceh sampai Papua. Setiap bulan kami mengadakan
              "Ngopi Bareng" - acara diskusi tentang kopi Indonesia dengan
              petani, roaster, dan ahli kopi.
            </p>
            <motion.a
              href="#events"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded-full transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Ikut Acara Kami
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pecinta Kopi",
    content:
      "Kopi di sini benar-benar istimewa! Saya khusus datang dari Depok untuk menikmati kopi Toraja-nya. Rasanya autentik dan harumnya mengingatkan saya pada kampung halaman.",
    rating: 5,
    photo:
      "https://i.pinimg.com/736x/8e/36/54/8e3654091bb008345450c4f970e57cca.jpg",
  },
  {
    name: "Anita Wijaya",
    role: "Freelancer Digital",
    content:
      "Tempat kerja favorit saya! WiFi kencang, suasana nyaman, dan kopi tubruk Aceh-nya bikin betah seharian. Pelayannya juga ramah dan selalu ingat pesanan tetap saya.",
    rating: 5,
    photo:
      "https://i.pinimg.com/736x/69/62/76/696276defe6e466a913de3ad5efd15a8.jpg",
  },
  {
    name: "Rudi Hartono",
    role: "Mahasiswa",
    content:
      "Tempat nongkrong asyik dengan harga terjangkau. Es kopi kelapanya juara! Cocok buat ngobrol santai atau mengerjakan tugas kuliah.",
    rating: 4,
    photo:
      "https://i.pinimg.com/736x/b0/3d/37/b03d371789bdbb88c5e0e8f7cef4de84.jpg",
  },
  {
    name: "Dewi Lestari",
    role: "Penulis",
    content:
      "Inspirasi sering datang saat menikmati kopi rempah di sini. Suasana yang tenang dengan sentuhan dekorasi tradisional Indonesia bikin betah berlama-lama.",
    rating: 5,
    photo:
      "https://i.pinimg.com/736x/76/08/68/7608681241268dd993cb80186dd12970.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const nextTestimonial = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-amber-900 to-amber-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-amber-400"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-amber-500"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-block bg-amber-700/30 px-4 py-2 rounded-full mb-4">
            <span className="text-amber-300 font-medium">
              Testimonial Pelanggan
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[Poppins]">
            Kata Mereka Tentang{" "}
            <span className="text-amber-300">Kopi Nusantara</span>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-amber-400"></div>
            <div className="w-16 h-1 bg-amber-300 mx-2"></div>
            <div className="w-16 h-1 bg-amber-200"></div>
          </div>
          <p className="text-amber-100 max-w-3xl mx-auto text-lg">
            Dengarkan pengalaman langsung dari pelanggan kami yang sudah
            merasakan kehangatan dan kenikmatan kopi khas Indonesia di kedai
            kami.
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-16 z-30 bg-amber-700 hover:bg-amber-600 p-3 rounded-full shadow-lg transition-all"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-16 z-30 bg-amber-700 hover:bg-amber-600 p-3 rounded-full shadow-lg transition-all"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Testimonial cards */}
          <div className="overflow-hidden relative h-96 md:h-80">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 bg-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8 ${
                  index === currentIndex ? "z-10" : "z-0"
                }`}
                initial={{
                  x: direction === "right" ? "100%" : "-100%",
                  opacity: 0,
                }}
                animate={{
                  x:
                    index === currentIndex
                      ? "0%"
                      : index > currentIndex
                      ? "100%"
                      : "-100%",
                  opacity: index === currentIndex ? 1 : 0,
                  transition: { duration: 0.5 },
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Customer photo */}
                <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-amber-100 shadow-md flex-shrink-0">
                  <motion.img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Testimonial content */}
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-amber-500 fill-amber-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="italic text-gray-700 mb-2 sm:mb-6 text-sm md:text-lg leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  <div>
                    <h4 className="font-bold text-amber-900 text-xl">
                      {testimonial.name}
                    </h4>
                    <p className="text-amber-700">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? "right" : "left");
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-amber-300 w-6" : "bg-amber-300/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Social proof section */}
        <motion.div
          className="mt-16 bg-amber-800/30 rounded-2xl p-6 text-center backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-100 mb-4">
            <span className="text-2xl font-bold text-white">4.9/5</span> rating
            rata-rata dari{" "}
            <span className="text-2xl font-bold text-white">500+</span> ulasan
            pelanggan
          </p>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className="w-5 h-5 text-amber-300 fill-amber-300"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

import { motion } from "framer-motion";
import { useState } from "react";
import { FiZoomIn, FiX } from "react-icons/fi";

const galleryImages = [
  "https://i.pinimg.com/736x/1b/84/64/1b84649f65e96711c22e99182de6e52b.jpg",
  "https://i.pinimg.com/736x/dd/ec/eb/ddeceb4178237769b7183228e435f72c.jpg",
  "https://i.pinimg.com/736x/ca/b7/45/cab745aaf407662c6a45fb26ee403a02.jpg",
  "https://i.pinimg.com/736x/9e/9b/9d/9e9b9d71922ada3aff5082c3fe914bff.jpg",
  "https://i.pinimg.com/736x/78/4b/c7/784bc77b962098e37bcde6f040f636f6.jpg",
  "https://i.pinimg.com/736x/35/97/3a/35973a8359d8661dc75ba230d6f015be.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-amber-900 mb-4 font-[Poppins]">
            Galeri Kami
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-amber-700"></div>
            <div className="w-16 h-1 bg-amber-500 mx-2"></div>
            <div className="w-16 h-1 bg-amber-300"></div>
          </div>
          <p className="text-amber-900 max-w-4xl mx-auto text-lg">
            Jelajahi suasana kafe kami melalui koleksi foto-foto istimewa.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(index)}
            >
              {/* Image with overlay */}
              <img
                src={image}
                alt={`Kopi Nusantara ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Interactive overlay */}
              <div className="absolute cursor-pointer inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                  className="text-white bg-amber-700/90 p-2 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <FiZoomIn className="w-5 h-5" />
                </motion.div>
              </div>

              {/* Always-visible corner indicator */}
              <div className="absolute top-2 right-2 text-white bg-black/30 rounded-full p-1.5 backdrop-blur-sm">
                <FiZoomIn className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={galleryImages[selectedImage]}
                alt={`Selected ${selectedImage + 1}`}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-xl"
              />

              <button
                className="absolute -top-4 -right-4 text-white bg-amber-700 hover:bg-amber-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <FiX className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm opacity-80">
                Klik di mana saja untuk menutup
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

import { motion } from "framer-motion";
import { useState } from "react";

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
    <section id="gallery" className="py-20 bg-coffee-light">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-darker mb-4">
            Gallery Kami
          </h2>
          <div className="w-20 h-1 bg-coffee-medium mx-auto mb-6"></div>
          <p className="text-coffee-darker max-w-4xl mx-auto">
            Ikuti perjalanan visual melalui kedai kopi kami dan lihat apa yang
            membuat Kopi Nusantara istimewa.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image}
                alt={`Coffee ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
            </motion.div>
          ))}
        </div>

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
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              <img
                src={galleryImages[selectedImage]}
                alt={`Selected Coffee ${selectedImage + 1}`}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <button
                className="absolute cursor-pointer top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

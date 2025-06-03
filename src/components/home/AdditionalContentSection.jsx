import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Edit3, Share2 } from 'lucide-react';

const AdditionalContentSection = () => (
  <motion.section 
    className="my-16 py-12 glass-effect rounded-xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    <div className="container mx-auto px-6">
      <motion.h2 
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        More Than Just Conversion
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            ImgToPDF is engineered for versatility. Beyond simple conversions, our tool offers features that cater to a wide range of needs. Whether you're archiving precious memories, preparing documents for legal submission, or creating portfolios, we provide the flexibility you need.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our advanced algorithms ensure optimal compression without sacrificing image quality, resulting in PDFs that are both lightweight and visually stunning. The ability to rotate images and manage multiple files in a batch process saves you valuable time and effort. We are constantly working on new features to make your document workflow even smoother.
          </p>
        </motion.div>
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img   
            className="rounded-lg shadow-2xl object-cover w-full h-auto max-h-[400px]" 
            alt="Creative collage of diverse images being organized"
            src="https://images.unsplash.com/photo-1694002241792-1d02500f8a2e" />
        </motion.div>
      </div>

      <motion.h2 
        className="text-3xl font-semibold text-center mt-16 mb-8 bg-gradient-to-l from-lime-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Key Advantages
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Layers className="w-10 h-10 text-sky-400" />, title: "Batch Processing", description: "Convert multiple images at once, saving you time and streamlining your workflow." },
          { icon: <Edit3 className="w-10 h-10 text-amber-400" />, title: "Image Rotation", description: "Easily rotate images within the app to ensure correct orientation in your final PDF." },
          { icon: <Share2 className="w-10 h-10 text-rose-400" />, title: "Easy Sharing", description: "Create universally compatible PDFs that are easy to share and view on any device." },
        ].map((advantage, index) => (
          <motion.div 
            key={advantage.title}
            className="glass-effect p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(22, 163, 74, 0.2), 0 4px 6px -2px rgba(22, 163, 74, 0.1)"}}
          >
            <div className="flex justify-center mb-4">{advantage.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{advantage.title}</h3>
            <p className="text-gray-400">{advantage.description}</p>
          </motion.div>
        ))}
      </div>
       <p className="text-md text-gray-400 leading-relaxed mt-12 text-center">
        We are committed to providing a robust and reliable service. Our infrastructure is designed for high performance and availability, ensuring that ImgToPDF is ready whenever you need it. Security is paramount; all processing happens in your browser, meaning your sensitive images never leave your computer. This client-side approach guarantees privacy and gives you peace of mind. Explore the full capabilities of ImgToPDF and discover how it can simplify your digital life.
      </p>
    </div>
  </motion.section>
);

export default AdditionalContentSection;
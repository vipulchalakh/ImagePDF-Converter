import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Palette, ShieldCheck } from 'lucide-react';

const ContentSection = () => (
  <motion.section 
    className="my-16 py-12 glass-effect rounded-xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <div className="container mx-auto px-6">
      <motion.h2 
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Unlock Your Image Potential
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img   
            className="rounded-lg shadow-2xl object-cover w-full h-auto max-h-[400px]" 
            alt="Abstract digital art representing image conversion"
            src="https://images.unsplash.com/photo-1679978880855-fb35585ce343" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Welcome to the ultimate solution for converting your cherished images into professional PDF documents. Our platform is designed with simplicity and power in mind, offering you a seamless experience from start to finish. Whether you're a student compiling research, a professional creating reports, or just someone looking to organize photos, ImgToPDF is your go-to tool.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Experience lightning-fast conversions, customize your output with various page settings, and enjoy a beautifully designed interface that makes the process a joy. We prioritize your privacy and ensure that your files are handled securely. Get started today and transform your visual content into portable, shareable, and printable PDFs.
          </p>
        </motion.div>
      </div>

      <motion.h2 
        className="text-3xl font-semibold text-center mt-16 mb-8 bg-gradient-to-l from-green-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Why Choose ImgToPDF?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Zap className="w-10 h-10 text-yellow-400" />, title: "Blazing Fast", description: "Convert images to PDF in seconds, no matter the file size or quantity." },
          { icon: <Palette className="w-10 h-10 text-purple-400" />, title: "Highly Customizable", description: "Tailor your PDFs with options for page size, orientation, quality, and margins." },
          { icon: <ShieldCheck className="w-10 h-10 text-green-400" />, title: "Secure & Private", description: "Your images are processed locally in your browser, ensuring maximum privacy." },
        ].map((feature, index) => (
          <motion.div 
            key={feature.title}
            className="glass-effect p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
       <p className="text-md text-gray-400 leading-relaxed mt-12 text-center">
        Our platform is meticulously engineered to provide a top-tier user experience. We understand the importance of your visual assets, and our converter treats them with the utmost care, preserving quality while optimizing for PDF format. The intuitive drag-and-drop interface means you can get started without any learning curve. Advanced users will appreciate the fine-grained control over PDF settings, allowing for perfect document creation every time. From single image conversions to batch processing of entire albums, ImgToPDF handles it all with grace and efficiency. Join thousands of satisfied users who have made ImgToPDF their preferred choice for image to PDF conversion.
      </p>
    </div>
  </motion.section>
);

export default ContentSection;
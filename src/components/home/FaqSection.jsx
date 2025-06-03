import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What image formats can I convert?",
    answer: "ImgToPDF supports a wide range of image formats, including JPG, JPEG, PNG, GIF, BMP, and WEBP. If you have a specific format in mind, give it a try! We're always working to expand compatibility."
  },
  {
    question: "Is there a limit to the number of images or file size?",
    answer: "While there's no hard limit set by our application for the number of images, performance may vary depending on your browser and computer's capabilities. For very large files or a high number of images, processing might take longer. We recommend reasonable batch sizes for optimal performance."
  },
  {
    question: "Are my uploaded images stored on your servers?",
    answer: "No, absolutely not! All image processing and PDF generation happen directly in your web browser. Your images are never uploaded to our servers, ensuring your privacy and data security."
  },
  {
    question: "Can I customize the PDF output?",
    answer: "Yes! We offer several customization options. You can choose the page size (A4, A3, Letter, Legal), page orientation (portrait or landscape), image quality, and page margins to create a PDF that perfectly suits your needs."
  },
  {
    question: "Is ImgToPDF free to use?",
    answer: "Yes, ImgToPDF is currently free to use for all its core features. We aim to provide a high-quality, accessible tool for everyone. We may introduce premium features in the future, but the core conversion functionality will remain accessible."
  }
];

const FaqItem = ({ faq, isOpen, onClick }) => {
  return (
    <motion.div 
      className="border border-gray-700 rounded-lg overflow-hidden glass-effect"
      whileHover={{ borderColor: "hsl(var(--primary))", transition: {duration: 0.2} }}
    >
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="p-6 pt-0 text-gray-300 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section 
      className="my-16 py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HelpCircle className="inline-block w-10 h-10 mr-3 mb-1" />
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FaqSection;
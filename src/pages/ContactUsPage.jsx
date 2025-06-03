import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form data submitted:', formData);
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will get back to you shortly.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };
  
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const inputVariants = {
    focus: { 
      borderColor: "hsl(var(--primary))", 
      boxShadow: "0 0 0 2px hsl(var(--ring))",
      transition: { duration: 0.2 }
    },
    initial: {
      borderColor: "hsl(var(--border))",
      boxShadow: "none"
    }
  };

  return (
    <>
      <Helmet>
        <title>Know more about ImagePDF Converter:</title>
        <meta name="description" content="Have questions or feedback? Reach out to the ImagePDF Converter team anytime. We're available 24/7 to assist with your image to PDF conversion needs." />
      </Helmet>
      <motion.div 
        className="container mx-auto px-4 py-12 min-h-[calc(100vh-13rem)]"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h1 
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to provide feedback, please don't hesitate to reach out.
              </p>
              <div className="space-y-4">
                <motion.div className="flex items-center space-x-3 glass-effect p-4 rounded-lg" whileHover={{ scale: 1.03 }}>
                  <Mail className="w-6 h-6 text-pink-400" />
                  <span className="text-gray-200">support@imgtopdf.com</span>
                </motion.div>
                <motion.div className="flex items-center space-x-3 glass-effect p-4 rounded-lg" whileHover={{ scale: 1.03 }}>
                  <Phone className="w-6 h-6 text-pink-400" />
                  <span className="text-gray-200">+1 (555) 123-4567</span>
                </motion.div>
                <motion.div className="flex items-center space-x-3 glass-effect p-4 rounded-lg" whileHover={{ scale: 1.03 }}>
                  <MapPin className="w-6 h-6 text-pink-400" />
                  <span className="text-gray-200">123 Pixel Drive, Suite 404, Tech City, USA</span>
                </motion.div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Office Hours</h3>
              <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
              <p className="text-gray-300">Saturday - Sunday: Closed</p>
            </div>
          </motion.div>

          <motion.div 
            className="glass-effect p-8 rounded-xl shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold text-white mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <motion.input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-gray-600 rounded-lg px-3 py-2.5 text-white focus:outline-none"
                  variants={inputVariants}
                  initial="initial"
                  whileFocus="focus"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <motion.input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-gray-600 rounded-lg px-3 py-2.5 text-white focus:outline-none"
                  variants={inputVariants}
                  initial="initial"
                  whileFocus="focus"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                <motion.input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-gray-600 rounded-lg px-3 py-2.5 text-white focus:outline-none"
                  variants={inputVariants}
                  initial="initial"
                  whileFocus="focus"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <motion.textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-gray-600 rounded-lg px-3 py-2.5 text-white focus:outline-none resize-none"
                  variants={inputVariants}
                  initial="initial"
                  whileFocus="focus"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full gradient-bg hover:opacity-90 transition-opacity py-3 text-lg" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 mr-2 border-2 border-transparent border-t-white rounded-full"
                  />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
         <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-white text-center mb-4">Find Us On The Map</h2>
          <div className="glass-effect rounded-xl p-2 shadow-lg overflow-hidden">
             <img  
                className="w-full h-64 md:h-96 object-cover rounded-lg" 
                alt="Map showing location of ImgToPDF office"
               src="https://images.unsplash.com/photo-1497263727523-79ce39ca8cb4" />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactUsPage;
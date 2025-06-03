import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Lightbulb } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AboutUsPage = () => {
  const teamMembers = [
    { name: "Alice Wonderland", role: "Lead Developer", image: "Alice Wonderland coding on a futuristic interface", alt: "Alice Wonderland, Lead Developer" },
    { name: "Bob The Builder", role: "UI/UX Designer", image: "Bob The Builder sketching creative UI designs", alt: "Bob The Builder, UI/UX Designer"},
    { name: "Charlie Bucket", role: "Marketing Specialist", image: "Charlie Bucket presenting a marketing strategy", alt: "Charlie Bucket, Marketing Specialist"},
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <Helmet>
        <title>Know more about ImagePDF Converter:</title>
        <meta name="description" content="Learn about ImagePDF Converter—India's trusted free tool for converting images to PDF. Discover our mission, values, and why users love our service." />
      </Helmet>
      <motion.div 
        className="container mx-auto px-4 py-12 min-h-[calc(100vh-13rem)]"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h1 
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 bg-clip-text text-transparent"
          variants={sectionVariants} custom={0} initial="hidden" animate="visible"
        >
          About ImgToPDF
        </motion.h1>

        <motion.section 
          className="glass-effect rounded-xl p-8 mb-12 shadow-xl"
          variants={sectionVariants} custom={1} initial="hidden" animate="visible"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <img  
                className="rounded-lg shadow-2xl object-cover w-full h-auto max-h-[400px]" 
                alt="Modern office with a team collaborating on a project"
               src="https://images.unsplash.com/photo-1538688554366-621d446302aa" />
            </motion.div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-white mb-4">Our Story</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                ImgToPDF was born from a simple idea: to make document conversion effortless and accessible to everyone. We noticed a common frustration – the cumbersome process of turning images into professional-quality PDFs. Existing tools were often clunky, expensive, or lacked essential features.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Driven by a passion for elegant solutions and user-centric design, our team set out to create a converter that is not only powerful but also a joy to use. We believe that technology should empower users, not complicate their lives. That's why ImgToPDF focuses on a streamlined workflow, robust features, and a beautiful interface.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-12" variants={sectionVariants} custom={2} initial="hidden" animate="visible">
          <h2 className="text-3xl font-semibold text-white text-center mb-8">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="glass-effect rounded-xl p-6 shadow-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(129, 140, 248, 0.3), 0 4px 6px -2px rgba(129, 140, 248, 0.2)"}}
            >
              <div className="flex items-center text-purple-400 mb-3">
                <Target className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To provide the most intuitive, efficient, and high-quality image-to-PDF conversion service, empowering individuals and businesses to manage their documents seamlessly. We strive to continuously innovate and enhance our platform based on user feedback and technological advancements.
              </p>
            </motion.div>
            <motion.div 
              className="glass-effect rounded-xl p-6 shadow-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2)"}}
            >
              <div className="flex items-center text-blue-400 mb-3">
                <Eye className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To be the leading online platform for document conversion and management, recognized for our commitment to user experience, innovation, and data privacy. We envision a world where handling digital documents is simple, secure, and accessible to all.
              </p>
            </motion.div>
          </div>
        </motion.section>
        
        <motion.section variants={sectionVariants} custom={3} initial="hidden" animate="visible">
          <h2 className="text-3xl font-semibold text-white text-center mb-10">Meet Our Core Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="glass-effect rounded-xl p-6 text-center shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(167, 139, 250, 0.4)" }}
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-purple-500">
                  <img  
                    className="w-full h-full object-cover" 
                    alt={member.alt}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-purple-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mt-16 text-center glass-effect rounded-xl p-8 shadow-xl"
          variants={sectionVariants} custom={4} initial="hidden" animate="visible"
        >
          <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-3">Join Our Journey</h2>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We're constantly evolving and looking for ways to improve. If you have feedback, ideas, or just want to say hello, feel free to reach out. Together, let's make document management simpler and more efficient for everyone.
          </p>
        </motion.section>
      </motion.div>
    </>
  );
};

export default AboutUsPage;
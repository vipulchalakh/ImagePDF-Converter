import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileText, Users, Info } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicyPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const policySections = [
    {
      icon: <Info className="w-8 h-8 text-blue-400" />,
      title: "Introduction",
      content: "Welcome to ImgToPDF's Privacy Policy. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us. This policy describes how we might use your information if you visit our website or use our services.",
    },
    {
      icon: <FileText className="w-8 h-8 text-green-400" />,
      title: "Information We Collect",
      content: "We primarily collect information that you provide to us directly. For ImgToPDF, the core functionality (image to PDF conversion) is performed locally in your browser. This means the images you upload for conversion are NOT sent to our servers. We may collect non-personal information such as browser type, operating system, and usage statistics to improve our service. If you contact us directly, we may receive additional information about you such as your name, email address, and the contents of the message.",
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "How We Use Your Information",
      content: "Information collected (e.g., contact form submissions, non-personal usage data) is used to: Provide, operate, and maintain our services; Improve, personalize, and expand our services; Understand and analyze how you use our services; Develop new products, services, features, and functionality; Communicate with you, either directly or through one of our partners, for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes (with your consent).",
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: "Data Security",
      content: "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. As your image files are processed locally, they remain on your device and are not stored by us.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
      title: "Your Privacy Rights",
      content: "Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete the personal data we hold about you. Since image processing is local, you maintain full control over your image files. For any other data, you can contact us to exercise your rights.",
    },
    {
      title: "Changes to This Policy",
      content: "We may update this privacy policy from time to time. The updated version will be indicated by an updated \"Last updated\" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Know more about ImagePDF Converter</title>
        <meta name="description" content="Read our privacy policy to understand how ImagePDF Converter protects your data. We value user privacy and ensure secure image-to-PDF conversions." />
      </Helmet>
      <motion.div 
        className="container mx-auto px-4 py-12 min-h-[calc(100vh-13rem)]"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h1 
          className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent"
          variants={sectionVariants} custom={0} initial="hidden" animate="visible"
        >
          Privacy Policy
        </motion.h1>
        <motion.p 
          className="text-center text-gray-400 mb-12 text-lg"
          variants={sectionVariants} custom={1} initial="hidden" animate="visible"
        >
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </motion.p>

        <div className="space-y-10">
          {policySections.map((section, index) => (
            <motion.section 
              key={section.title} 
              className="glass-effect rounded-xl p-6 md:p-8 shadow-xl hover:shadow-indigo-500/20 transition-shadow duration-300"
              variants={sectionVariants} 
              custom={index + 2} 
              initial="hidden" 
              animate="visible"
            >
              <div className="flex items-start space-x-4">
                {section.icon && (
                  <div className="flex-shrink-0 mt-1 p-2 bg-slate-700 rounded-full">
                    {section.icon}
                  </div>
                )}
                <div>
                  <h2 className={`text-2xl md:text-3xl font-semibold text-white mb-3 ${!section.icon && 'pl-0'}`}>
                    {section.title}
                  </h2>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center glass-effect rounded-xl p-8 shadow-xl"
          variants={sectionVariants} custom={policySections.length + 2} initial="hidden" animate="visible"
        >
          <h2 className="text-2xl font-semibold text-white mb-3">Contact Us</h2>
          <p className="text-gray-300 leading-relaxed max-w-xl mx-auto">
            If you have questions or comments about this Privacy Policy, please contact us at:
            <a href="mailto:privacy@imgtopdf.com" className="text-indigo-400 hover:text-indigo-300 transition-colors ml-1">
              privacy@imgtopdf.com
            </a>
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default PrivacyPolicyPage;
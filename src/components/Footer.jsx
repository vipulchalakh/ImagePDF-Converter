import React from 'react';
import { Link } from 'react-router-dom';
import { FileImage, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy' },
];

const socialLinks = [
  { icon: <Github className="w-6 h-6" />, href: "https://github.com" },
  { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com" },
  { icon: <Twitter className="w-6 h-6" />, href: "https://twitter.com" },
];

const Footer = () => {
  return (
    <footer className="glass-effect border-t border-gray-700 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
             <Link to="/" className="flex items-center space-x-2 mb-4">
              <motion.div
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FileImage className="w-8 h-8 text-blue-400" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ImgToPDF
              </span>
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Simplifying your document workflow, one PDF at a time.
            </p>
          </div>

          <nav className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ImgToPDF. All rights reserved. Built with React & TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
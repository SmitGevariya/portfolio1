import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: 'https://github.com/smitgevariya1405',
      name: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/smit-gevariya-746887251/',
      name: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      url: 'mailto:smitgevariya.sg141@gmail.com',
      name: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="relative w-8 h-8 mr-3">
                <svg
                  viewBox="0 0 40 40"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="20" r="18" fill="url(#footerLogoGradient)" />
                  <g opacity="0.3" stroke="white" strokeWidth="0.5" fill="none">
                    <circle cx="12" cy="12" r="1.5" fill="white" />
                    <circle cx="28" cy="12" r="1.5" fill="white" />
                    <circle cx="20" cy="20" r="1.5" fill="white" />
                    <circle cx="12" cy="28" r="1.5" fill="white" />
                    <circle cx="28" cy="28" r="1.5" fill="white" />
                    <line x1="12" y1="12" x2="20" y2="20" />
                    <line x1="28" y1="12" x2="20" y2="20" />
                    <line x1="20" y1="20" x2="12" y2="28" />
                    <line x1="20" y1="20" x2="28" y2="28" />
                  </g>
                  <text
                    x="20"
                    y="26"
                    textAnchor="middle"
                    className="fill-white font-bold text-sm"
                    style={{ fontSize: '10px', fontFamily: 'Inter, sans-serif' }}
                  >
                    SG
                  </text>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Smit Gevariya</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              AI/ML Engineer passionate about developing intelligent, data-driven solutions 
              using machine learning, deep learning, and NLP to solve real-world problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400">
                📧 smitgevariya.sg141@gmail.com
              </p>
              <p className="text-gray-400">
                📍 Gujarat, India
              </p>
              <p className="text-gray-400">
                🤖 Available for AI/ML projects
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Smit Gevariya. All rights reserved.
          </p>
          
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="text-gray-400 text-sm flex items-center"
          >
            Made with <Heart size={16} className="mx-1 text-red-500" /> using React & Tailwind CSS
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
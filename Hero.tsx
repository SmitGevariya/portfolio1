import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Animated Background Shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* AI-Themed Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto">
              {/* Main Avatar Container */}
              <div className="relative w-full h-full">
                {/* Gradient Background Circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-blue-700 shadow-2xl"></div>
                
                {/* Inner Glow Effect */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                
                {/* Neural Network Pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-20 h-20 opacity-30"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  >
                    {/* Central Node */}
                    <circle cx="50" cy="50" r="3" fill="white" />
                    
                    {/* Outer Nodes */}
                    <circle cx="30" cy="30" r="2" fill="white" />
                    <circle cx="70" cy="30" r="2" fill="white" />
                    <circle cx="30" cy="70" r="2" fill="white" />
                    <circle cx="70" cy="70" r="2" fill="white" />
                    <circle cx="50" cy="20" r="2" fill="white" />
                    <circle cx="50" cy="80" r="2" fill="white" />
                    <circle cx="20" cy="50" r="2" fill="white" />
                    <circle cx="80" cy="50" r="2" fill="white" />
                    
                    {/* Connections */}
                    <line x1="50" y1="50" x2="30" y2="30" />
                    <line x1="50" y1="50" x2="70" y2="30" />
                    <line x1="50" y1="50" x2="30" y2="70" />
                    <line x1="50" y1="50" x2="70" y2="70" />
                    <line x1="50" y1="50" x2="50" y2="20" />
                    <line x1="50" y1="50" x2="50" y2="80" />
                    <line x1="50" y1="50" x2="20" y2="50" />
                    <line x1="50" y1="50" x2="80" y2="50" />
                  </svg>
                </div>
                
                {/* AI Chip Design */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border border-white/40 rounded-sm">
                    <div className="w-full h-full bg-white/10 rounded-sm flex items-center justify-center">
                      <div className="w-4 h-4 bg-white/20 rounded-xs"></div>
                    </div>
                    {/* Circuit Lines */}
                    <div className="absolute -left-2 top-2 w-2 h-px bg-white/40"></div>
                    <div className="absolute -left-2 top-4 w-2 h-px bg-white/40"></div>
                    <div className="absolute -left-2 top-6 w-2 h-px bg-white/40"></div>
                    <div className="absolute -right-2 top-2 w-2 h-px bg-white/40"></div>
                    <div className="absolute -right-2 top-4 w-2 h-px bg-white/40"></div>
                    <div className="absolute -right-2 top-6 w-2 h-px bg-white/40"></div>
                  </div>
                </div>
                
                {/* Initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl font-sans mt-8">
                    SG
                  </span>
                </div>
              </div>
              
              {/* Animated Pulse Ring */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full border-2 border-blue-400/30"
              />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Smit Gevariya
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            AI/ML Engineer passionate about developing intelligent, data-driven solutions 
            using machine learning, deep learning, and NLP to solve real-world problems 
            and create meaningful impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              View My Projects
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center space-x-6 mb-16"
          >
            <motion.a
              href="https://github.com/SmittGevariya"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-blue-600"
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/smit-gevariya-746887251/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a
              href="mailto:smitgevariya.sg141@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-blue-600"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
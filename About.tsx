import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Code, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain size={24} />,
      title: 'Machine Learning',
      description: 'Expert in developing ML models using TensorFlow, PyTorch, and Scikit-learn'
    },
    {
      icon: <Database size={24} />,
      title: 'Data Science',
      description: 'Skilled in data preprocessing, analysis, and visualization with Python'
    },
    {
      icon: <Code size={24} />,
      title: 'AI Development',
      description: 'Building intelligent applications with NLP and deep learning'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Model Optimization',
      description: 'Focused on improving model performance and deployment efficiency'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI/ML Engineer passionate about developing intelligent, data-driven solutions 
            using machine learning, deep learning, and NLP to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                With a strong foundation in machine learning and a passion for building intelligent systems, 
                I specialize in developing AI-powered applications using technologies like Python, TensorFlow, 
                PyTorch, and NLP tools.
              </p>
              <p>
                My experience spans across data preprocessing, model training, evaluation, and deployment. 
                I enjoy solving real-world problems through ML models and have worked on projects involving 
                prediction systems, chatbots, and data-driven analysis.
              </p>
              <p>
                When I'm not experimenting with models, I'm exploring new advancements in AI, optimizing 
                workflows, or sharing insights with fellow developers and learners.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Science Intern',
      company: 'Oasis Infobyte',
      location: 'Remote',
      period: 'May 2024 – Jun 2024',
      description: [
        'Performed Exploratory Data Analysis (EDA) on multiple datasets to extract actionable insights and prepare data for modeling',
        'Analyzed unemployment trends using Python, employing data visualization techniques to uncover key patterns',
        'Achieved 95% accuracy in trend prediction using advanced statistical modeling techniques',
        'Developed comprehensive data visualization dashboards for stakeholder presentations'
      ],
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA', 'Statistical Analysis']
    },
    {
      title: 'Data Science Intern',
      company: 'The Sparks Foundation',
      location: 'Remote',
      period: 'Apr 2024 – May 2024',
      description: [
        'Built machine learning models for car price prediction using regression algorithms',
        'Improved model performance through feature selection and hyperparameter tuning',
        'Developed a spam email classifier using supervised learning techniques',
        'Achieved high accuracy in real-world email detection tasks through advanced NLP preprocessing'
      ],
      technologies: ['Machine Learning', 'Regression', 'Classification', 'NLP', 'Scikit-learn', 'Python']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Engineering',
      institution: 'CHARUSAT',
      location: 'Gujarat, India',
      period: '2022 – Present',
      description: 'Focused on computer science fundamentals, machine learning, and AI technologies.',
      gpa: '8.40/10'
    }
  ];

  const certifications = [
    {
      title: 'Foundational Cloud Practitioner',
      issuer: 'AWS',
      year: '2025'
    },
    {
      title: 'Machine Learning',
      issuer: 'NPTEL',
      year: '2024'
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM',
      year: '2022'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and educational background in AI/ML and data science.
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12 flex items-center"
          >
            <Briefcase className="mr-3 text-blue-600" size={32} />
            Professional Experience
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className="ml-16 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 w-full">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-xl text-blue-600 font-semibold mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12 flex items-center"
          >
            <svg className="mr-3 text-blue-600" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
            </svg>
            Education
          </motion.h3>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 mb-8"
            >
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xl text-blue-600 font-semibold">
                    {edu.institution}
                  </p>
                  {edu.gpa && (
                    <p className="text-lg text-green-600 font-semibold mt-1">
                      CGPA: {edu.gpa}
                    </p>
                  )}
                </div>
                <div className="text-right text-gray-600">
                  <div className="flex items-center mb-1">
                    <Calendar size={16} className="mr-2" />
                    {edu.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {edu.location}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12 flex items-center"
          >
            <svg className="mr-3 text-blue-600" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {cert.title}
                </h4>
                <p className="text-blue-600 font-semibold mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 text-sm">
                  {cert.year}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

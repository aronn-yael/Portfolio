import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const Journey = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Ingénieur en Big Data et IA",
      school: "ÉGISI - École d'Ingénieurs en Génie des Systèmes industriels",
      location: "Casablanca, Maroc",
      period: "09/2023 - 10/2026",
      status: "En cours"
    },
    {
      degree: "Classes Préparatoires",
      school: "CPGE - MENAPLN",
      location: "Ouagadougou, Burkina Faso",
      period: "09/2021 - 08/2023",
      status: "Diplômé"
    },
    {
      degree: "Baccalauréat Scientifique - Option C - Maths/PC",
      school: "Saint Jean Baptiste De La Salle",
      location: "Ouagadougou, Burkina Faso",
      period: "09/2020 - 07/2021",
      status: "Diplômé"
    }
  ];

  const experiences = [
    {
      title: "Stage Ingénierie logicielle",
      company: "SM2I - ERP BTP",
      location: "Casablanca, Maroc",
      period: "06/2025 - 09/2025",
      description: "Conception et intégration de modules ERP pour la gestion BTP, développement backend et API via Python et Architecture Multi-tenant."
    },
    {
      title: "Stage IA & Data Analyst",
      company: "SONAR - Assurance",
      location: "Ouagadougou, Burkina Faso",
      period: "06/2024 - 08/2024",
      description: "Développement d'un outil IA de détection de fraude et création de tableaux de bord décisionnels avec Python, Machine Learning, Power BI."
    }
  ];

  const certifications = [
    {
      name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      year: "2025"
    },
    {
      name: "Oracle Cloud Infrastructure AI Foundations",
      year: "2025"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="journey" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Mon <span className="text-gradient">Parcours</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-primary-600" />
                <h3 className="text-2xl font-heading font-bold text-gray-900">Formation</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 pb-8 border-l-2 border-primary-200 last:border-l-0 last:pb-0"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-sm font-medium text-primary-600">{edu.period}</span>
                        {edu.status === "En cours" && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            En cours
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{edu.degree}</h4>
                      <p className="text-gray-700 font-medium mb-1">{edu.school}</p>
                      <p className="text-sm text-gray-600">{edu.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-8 h-8 text-primary-600" />
                <h3 className="text-2xl font-heading font-bold text-gray-900">Expériences</h3>
              </div>

              <div className="space-y-6 mb-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 pb-8 border-l-2 border-primary-200 last:border-l-0 last:pb-0"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                      <span className="text-sm font-medium text-primary-600 mb-2 block">{exp.period}</span>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{exp.title}</h4>
                      <p className="text-gray-700 font-medium mb-1">{exp.company}</p>
                      <p className="text-sm text-gray-600 mb-3">{exp.location}</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8 text-primary-600" />
                <h3 className="text-2xl font-heading font-bold text-gray-900">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-start justify-between gap-4"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{cert.name}</h4>
                      <p className="text-sm text-primary-600 font-medium">{cert.year}</p>
                    </div>
                    <Award className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;

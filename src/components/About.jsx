import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Code, Database, Brain } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const highlights = [
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      description: "Passionné par le développement de modèles ML/DL pour résoudre des problèmes complexes"
    },
    {
      icon: Database,
      title: "Big Data",
      description: "Expertise en traitement de données massives avec Kafka, Spark et Python"
    },
    {
      icon: Code,
      title: "Développement",
      description: "Maîtrise de Django, FastAPI et développement d'APIs REST robustes"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Oracle Cloud Infrastructure AI Certified Professional"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              À propos de <span className="text-gradient">moi</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/avatar.jpg"
                    alt="Aronn Yaël KABORÉ"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://ui-avatars.com/api/?name=Aronn+Kabore&size=500&background=0ea5e9&color=fff&font-size=0.4';
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                Ingénieur Data & IA passionné par l'innovation
              </h3>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Actuellement élève ingénieur à l'<strong>ÉGISI</strong> (École d'Ingénieurs en Génie des Systèmes Industriels)
                  à Casablanca, je me spécialise en <strong>Data Science</strong> et <strong>Intelligence Artificielle</strong>.
                </p>

                <p>
                  Passionné par les technologies émergentes, j'ai développé une expertise solide en <strong>Machine Learning</strong>,
                  <strong> Deep Learning</strong>, et <strong>Big Data</strong>. Mon parcours m'a permis de travailler sur des projets
                  variés allant de la détection de fraude dans le secteur des assurances à la maintenance prédictive pour l'industrie pétrolière.
                </p>

                <p>
                  Je maîtrise des technologies telles que <strong>Python</strong>, <strong>PyTorch</strong>,
                  <strong> Kafka</strong>, <strong>Spark</strong>, et je suis certifié <strong>Oracle Cloud Infrastructure AI Professional</strong>.
                </p>

                <p>
                  Actuellement à la recherche d'un <strong>stage PFE de 9 mois</strong> à partir de Janvier 2026,
                  je souhaite mettre mes compétences au service de projets innovants dans le domaine de la Data et de l'IA.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">6+</div>
                  <div className="text-sm text-gray-600">Projets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">2</div>
                  <div className="text-sm text-gray-600">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">5+</div>
                  <div className="text-sm text-gray-600">Années d'études</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <highlight.icon className="w-10 h-10 text-primary-600 mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

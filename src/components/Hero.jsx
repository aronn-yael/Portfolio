import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Mail, ExternalLink } from 'lucide-react';
import NeuralNetwork3D from './NeuralNetwork3D';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}cv-aronn-kabore.pdf`;
    link.download = 'CV-Aronn-Kabore.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenCV = () => {
    window.open(`${import.meta.env.BASE_URL}cv-aronn-kabore.pdf`, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Neural Network 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-primary-100 to-purple-100" />}>
          <NeuralNetwork3D />
        </Suspense>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 font-medium"
            >
              Bonjour, Je suis
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
            >
              <span className="text-gradient">Aronn Yaël</span>
              <br />
              <span className="text-gray-800">KABORÉ</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 font-medium"
            >
              Ingénieur Data & IA
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-gray-600 max-w-xl"
            >
              Élève ingénieur en Data et Intelligence Artificielle, passionné par le Machine Learning,
              le Big Data et le développement d'applications intelligentes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all hover:shadow-lg hover:scale-105"
              >
                <Eye size={20} />
                Voir mes projets
              </button>

              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-all hover:shadow-lg hover:scale-105"
              >
                <Download size={20} />
                Télécharger mon CV
              </button>

              <button
                onClick={handleOpenCV}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-all hover:shadow-lg hover:scale-105"
              >
                <ExternalLink size={20} />
                Ouvrir mon CV dans un nouvel onglet
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-all hover:shadow-lg hover:scale-105"
              >
                <Mail size={20} />
                Me contacter
              </button>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6 pt-6 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Disponible pour un stage PFE (Janvier 2026)
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - visible on large screens */}
          <div className="hidden lg:block">
            {/* The 3D scene will be visible here */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-gray-600">
          <span className="text-sm">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-primary-600 rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl"
        >
          {/* Header */}
          <div className="relative">
            <div className="h-64 bg-gradient-to-br from-primary-100 to-purple-100 rounded-t-2xl overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&size=800&background=0ea5e9&color=fff&font-size=0.3`;
                }}
              />
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Title and Category */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full">
                  {project.category}
                </span>
                {project.date && (
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar size={16} />
                    {project.date}
                  </span>
                )}
              </div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Technologies utilisées
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-primary-50 to-purple-50 text-gray-800 rounded-lg font-medium text-sm border border-primary-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Caractéristiques principales
              </h3>
              <ul className="space-y-2 text-gray-700">
                {project.category === "IA" && (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>Développement et entraînement de modèles d'apprentissage automatique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>Optimisation des performances et fine-tuning des hyperparamètres</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>Validation et évaluation rigoureuse des résultats</span>
                    </li>
                  </>
                )}
                {project.category === "Big Data" && (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>Architecture distribuée pour le traitement de données à grande échelle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>Pipeline de données en temps réel avec Kafka et Spark</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>Optimisation des performances et de la scalabilité</span>
                    </li>
                  </>
                )}
                {project.category === "Web" && (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>Architecture multi-tenant évolutive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>APIs REST sécurisées et documentées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>Interface utilisateur moderne et responsive</span>
                    </li>
                  </>
                )}
                {project.category === "Data" && (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>Visualisations interactives et dashboards analytiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>Intégration de multiples sources de données</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>Analyses en temps réel pour la prise de décision</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  <ExternalLink size={20} />
                  Voir le projet
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
                >
                  <Github size={20} />
                  Voir le code
                </a>
              )}
              {!project.liveUrl && !project.repoUrl && (
                <div className="text-gray-500 italic">
                  Projet confidentiel - Code source non disponible publiquement
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;

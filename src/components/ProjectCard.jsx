import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const ProjectCard = ({ project, onViewMore }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.title)}&size=400&background=0ea5e9&color=fff&font-size=0.3`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button
            onClick={onViewMore}
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-colors"
          >
            <Eye size={18} />
            Voir plus
          </button>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
            {project.category}
          </span>
          {project.date && (
            <span className="text-xs text-gray-500">{project.date}</span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* View More Button */}
        <button
          onClick={onViewMore}
          className="w-full py-2 text-primary-600 font-medium hover:bg-primary-50 rounded-lg transition-colors border border-primary-200 hover:border-primary-400"
        >
          Voir les détails
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

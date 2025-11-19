import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Users, FileText, Handshake, TrendingUp, MapPin, Calendar } from 'lucide-react';

const Engagement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const responsibilities = [
    {
      icon: Handshake,
      text: "Gestion des relations avec les entreprises et partenaires bénévoles"
    },
    {
      icon: FileText,
      text: "Rédaction de lettres de partenariat et préparation de supports de présentation"
    },
    {
      icon: Heart,
      text: "Participation à l'organisation de remises de dons et actions humanitaires"
    },
    {
      icon: TrendingUp,
      text: "Contribution au développement stratégique de l'association pour augmenter son impact social"
    }
  ];

  const skills = [
    "Communication professionnelle",
    "Négociation",
    "Gestion de projet",
    "Rédaction",
    "Coordination d'équipe"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  return (
    <section id="engagement" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
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
              Mon <span className="text-gradient">Engagement Associatif</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Organization Info */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center flex-shrink-0 p-2 border-2 border-gray-100">
                    <img
                      src={`${import.meta.env.BASE_URL}logo.png`}
                      alt="Warms Donors Logo"
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.outerHTML = `<div class="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center"><svg class="w-8 h-8 text-white" fill="white" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></div>`;
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                      Warms Donors
                    </h3>
                    <p className="text-gray-600 font-medium">Association caritative</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Users className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="font-semibold">Responsable des Partenariats</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span>Ouagadougou, Burkina Faso</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span>Depuis 2023</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-heading font-bold text-gray-900 mb-6">
                  Responsabilités
                </h4>
                <div className="space-y-4">
                  {responsibilities.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg hover:shadow-md transition-all"
                      >
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-primary-600" />
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed pt-2">
                          {item.text}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Skills Acquired */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-heading font-bold text-gray-900 mb-6">
                  Compétences développées
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-primary-50 to-purple-50 text-gray-800 rounded-full font-medium text-sm border border-primary-200 hover:border-primary-400 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Images */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl shadow-xl group"
              >
                <img
                  src={`${import.meta.env.BASE_URL}warms-donors-1.jpg`}
                  alt="Action humanitaire Warms Donors"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl shadow-xl group"
              >
                <img
                  src={`${import.meta.env.BASE_URL}warms-donors-2.jpg`}
                  alt="Équipe Warms Donors"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>

              {/* Impact Statement */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-primary-500 to-purple-600 p-8 rounded-2xl shadow-xl text-white"
              >
                <Heart className="w-12 h-12 mb-4 opacity-80" />
                <p className="text-lg font-medium leading-relaxed">
                  Ma mission en tant que Responsable des Partenariats chez Warms Donors est de contribuer au bien-être des communautés par des actions concrètes, tout en renforçant l’impact social de l’association grâce à des partenariats stratégiques.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Engagement;

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiGithubactions,
  SiPytorch,
  SiScikitlearn,
  SiApachekafka,
  SiApachespark,
  SiApachehadoop,
  SiPython,
  SiMysql,
  SiDjango,
  SiDocker,
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript
} from 'react-icons/si';
import {
  BarChart3,
  Workflow,
  ScanText,
  LineChart,
  Link,
  Lightbulb,
  Users,
  RefreshCw,
  GraduationCap,
  ListChecks,
  Shield,
  MessageSquare,
  LayoutGrid
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkillsByCategory = {
    "Intelligence Artificielle": ["PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Machine Learning"],
    "Big Data": ["Kafka", "Spark", "Hadoop"],
    "Programmation": ["Python", "SQL"],
    "Web Development": ["Django", "html", "css", "js"],
    "DevOps & Tools": ["Docker", "Git", "GitHub Actions"],
    "Data Visualization": ["Power BI", "Matplotlib", "Seaborn", "Orange data mining"]
  };

  const toolsWithIcons = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "NumPy", icon: SiNumpy, color: "#013243" },
    { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
    { name: "Spark", icon: SiApachespark, color: "#E25A1C" },
    { name: "Hadoop", icon: SiApachehadoop, color: "#66CCFF" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Power BI", icon: LineChart, color: "#F2C811" },
    { name: "Matplotlib", icon: SiPlotly, color: "#11557c" },
    { name: "Seaborn", icon: BarChart3, color: "#0ea5e9" },
    { name: "SQL", icon: SiMysql, color: "#4479A1" },
    { name: "Langchain", icon: Link, color: "#1C3C3C" },
    { name: "n8n", icon: Workflow, color: "#ea4b71" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    { name: "OCR", icon: ScanText, color: "#6366f1" }
  ];

  const softSkills = [
    {
      name: "Résolution de problèmes complexes",
      icon: Lightbulb,
      color: "#F59E0B"
    },
    {
      name: "Travail en équipe",
      icon: Users,
      color: "#3B82F6"
    },
    {
      name: "Adaptabilité",
      icon: RefreshCw,
      color: "#10B981"
    },
    {
      name: "Apprentissage continu",
      icon: GraduationCap,
      color: "#8B5CF6"
    },
    {
      name: "Organisation et rigueur",
      icon: ListChecks,
      color: "#EC4899"
    },
    {
      name: "Sens des responsabilités",
      icon: Shield,
      color: "#EF4444"
    },
    {
      name: "Communication technique",
      icon: MessageSquare,
      color: "#06B6D4"
    },
    {
      name: "Gestion de projet Agile/Scrum",
      icon: LayoutGrid,
      color: "#6366F1"
    }
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
    <section id="skills" className="section-padding bg-white">
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
              Mes <span className="text-gradient">Compétences</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto"></div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
              Compétences Techniques
            </h3>
            <div className="space-y-8">
              {Object.entries(technicalSkillsByCategory).map(([category, skills], categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"></span>
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-white text-gray-800 rounded-lg font-medium text-sm border border-primary-200 hover:border-primary-400 hover:shadow-md transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
              Outils & Technologies que j'utilise
            </h3>
            <div className="relative overflow-hidden py-8">
              {/* Scrolling Container - Duplicate twice for seamless loop */}
              <motion.div
                className="flex gap-8"
                animate={{
                  x: ["0%", "-50%"]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear"
                  }
                }}
              >
                {/* First set */}
                {toolsWithIcons.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <div
                      key={`first-${index}`}
                      className="flex flex-col items-center justify-center min-w-[120px] flex-shrink-0 group"
                    >
                      <div className="w-20 h-20 flex items-center justify-center bg-white rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-100">
                        <IconComponent style={{ color: tool.color }} size={48} />
                      </div>
                      <p className="mt-3 text-sm font-medium text-gray-700 text-center">
                        {tool.name}
                      </p>
                    </div>
                  );
                })}
                {/* Second set - exact duplicate for seamless loop */}
                {toolsWithIcons.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <div
                      key={`second-${index}`}
                      className="flex flex-col items-center justify-center min-w-[120px] flex-shrink-0 group"
                    >
                      <div className="w-20 h-20 flex items-center justify-center bg-white rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-gray-100">
                        <IconComponent style={{ color: tool.color }} size={48} />
                      </div>
                      <p className="mt-3 text-sm font-medium text-gray-700 text-center">
                        {tool.name}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
              Compétences Professionnelles
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl text-center hover:shadow-lg transition-all border border-gray-100"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ backgroundColor: `${skill.color}15` }}
                    >
                      <IconComponent
                        size={24}
                        style={{ color: skill.color }}
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-gray-800 font-medium text-sm">{skill.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 text-center">
              Langues
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-xl text-center hover:shadow-lg transition-all"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2">Français</h4>
                <p className="text-primary-600 font-medium">Niveau C2 - Maîtrise</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl text-center hover:shadow-lg transition-all"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2">Anglais</h4>
                <p className="text-purple-600 font-medium">Niveau C1 - Avancé</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

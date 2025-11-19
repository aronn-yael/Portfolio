import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const footerLinks = [
    { label: 'Accueil', sectionId: 'hero' },
    { label: 'À propos', sectionId: 'about' },
    { label: 'Parcours', sectionId: 'journey' },
    { label: 'Compétences', sectionId: 'skills' },
    { label: 'Projets', sectionId: 'projects' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/k-aronn',
      label: 'LinkedIn',
      external: true
    },
    {
      icon: Github,
      url: 'https://github.com/aronn-yael',
      label: 'GitHub',
      external: true
    },
    {
      icon: Mail,
      url: null,
      label: 'Email',
      external: false,
      isEmail: true
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Aronn Yaël <span className="text-gradient">KABORÉ</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Ingénieur Data & IA passionné par l'innovation et les technologies émergentes.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                social.isEmail ? (
                  <motion.button
                    key={index}
                    onClick={scrollToForm}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.button>
                ) : (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                )
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button
                  onClick={scrollToForm}
                  className="hover:text-primary-400 transition-colors cursor-pointer"
                >
                  ayl.kabore.26@eigsica.ma
                </button>
              </li>
              <li>
                <a
                  href="tel:+212707303678"
                  className="hover:text-primary-400 transition-colors"
                >
                  +212 707 30 36 78
                </a>
              </li>
              <li>Casablanca, Maroc</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Aronn Yaël KABORÉ. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Développé avec <Heart className="w-4 h-4 text-red-500 fill-current" /> et React
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors z-40"
        aria-label="Scroll to top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Focus sur le premier champ
      setTimeout(() => {
        const nameInput = document.getElementById('name');
        if (nameInput) nameInput.focus();
      }, 500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      // Formspree configuré pour recevoir les messages du formulaire de contact
      const FORMSPREE_URL = 'https://formspree.io/f/mrbraboq';

      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Merci pour votre message ! Je vous répondrai dans les plus brefs délais.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Casablanca, Maroc',
      link: null
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'ayl.kabore.26@eigsica.ma',
      link: null, // Sera géré par onClick
      isEmail: true
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+212 707 30 36 78',
      link: 'tel:+212707303678'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/k-aronn',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/aronn-yael',
      color: 'hover:bg-gray-800'
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
    <section id="contact" className="section-padding bg-white">
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
              Me <span className="text-gradient">Contacter</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter !
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  Informations de contact
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="p-3 bg-primary-100 rounded-lg">
                        <info.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{info.label}</p>
                        {info.isEmail ? (
                          <button
                            onClick={scrollToForm}
                            className="text-gray-900 font-medium hover:text-primary-600 transition-colors cursor-pointer text-left"
                          >
                            {info.value}
                          </button>
                        ) : info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-900 font-medium hover:text-primary-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-medium">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">
                  Réseaux sociaux
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 bg-gray-800 text-white rounded-lg transition-colors ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <motion.div
                variants={itemVariants}
                className="p-6 bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl border border-primary-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 animate-pulse"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Disponibilité</h4>
                    <p className="text-gray-700 text-sm">
                      Actuellement à la recherche d'un <strong>stage PFE de 6 à 9 mois</strong> à partir de <strong>Janvier 2026</strong> dans le domaine de la Data et de l'IA.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="votre.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Sujet de votre message"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                {/* Status Message */}
                {formStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg flex items-start gap-3 ${
                      formStatus.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {formStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{formStatus.message}</p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

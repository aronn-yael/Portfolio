# Portfolio - Aronn Yaël KABORÉ

Portfolio personnel d'Aronn Yaël Léonard KABORÉ, Ingénieur en Data et Intelligence Artificielle.

## 🚀 Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Build tool et dev server ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Bibliothèque d'animations pour React
- **Three.js & React Three Fiber** - Rendu 3D dans le navigateur
- **Lucide React** - Icônes modernes

## 📋 Fonctionnalités

- ✨ Design moderne et responsive
- 🎨 Animations fluides et transitions
- 🌐 Navigation smooth scroll
- 📱 Mobile-first design
- 🎯 Section Hero avec animation 3D
- 👤 Section À propos détaillée
- 🎓 Timeline du parcours académique et professionnel
- 💼 Galerie de projets avec filtres dynamiques
- 📊 Barres de compétences animées
- 📧 Formulaire de contact avec Formspree
- 🔍 SEO optimisé
- ⚡ Performance optimisée

## 🛠️ Installation et développement

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 📁 Structure du projet

```
portfolio2.0/
├── public/
│   ├── cv-aronn-kabore.pdf
│   ├── favicon.svg
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Journey.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Projects.jsx
│   │   ├── Scene3D.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── projectsData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🌐 Déploiement sur GitHub Pages

Le site est configuré pour être déployé automatiquement sur GitHub Pages via GitHub Actions.

### Configuration rapide

1. **Modifier `vite.config.js`** - Changez le `base` selon le nom de votre repo :
   ```javascript
   base: '/nom-de-votre-repo/',
   ```

2. **Configurer Formspree** pour le formulaire de contact :
   - Créez un compte gratuit sur [formspree.io](https://formspree.io/)
   - Créez un formulaire et copiez l'ID
   - Modifiez `src/components/Contact.jsx` ligne 36

3. **Pousser sur GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```

4. **Activer GitHub Pages** :
   - Repo → Settings → Pages
   - Source: **GitHub Actions**

5. Votre site sera disponible à : `https://USERNAME.github.io/REPO/`

### Documentation complète

Consultez **[GITHUB-PAGES-DEPLOYMENT.md](GITHUB-PAGES-DEPLOYMENT.md)** pour un guide détaillé étape par étape.

## 📧 Contact

- **Email**: ayl.kabore.26@eigcsica.ma
- **LinkedIn**: [linkedin.com/in/k-aronn](https://www.linkedin.com/in/k-aronn)
- **GitHub**: [github.com/aronn-yael](https://github.com/aronn-yael)
- **Localisation**: Casablanca, Maroc

## 📄 License

© 2025 Aronn Yaël KABORÉ. Tous droits réservés.

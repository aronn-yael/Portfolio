# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern, responsive portfolio website for Aronn Yaël Léonard KABORÉ (Data & AI Engineer) built with React, Vite, and Three.js. Features 3D animations, smooth scrolling, project filtering, and a contact form.

**Tech Stack:**
- React 18 + Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Three.js + React Three Fiber (3D graphics)
- Formspree (contact form)

## Development Commands

### Essential Commands
```bash
# Install dependencies (use --legacy-peer-deps flag)
npm install --legacy-peer-deps

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages (requires repo setup)
npm run deploy
```

### Important Notes
- **Always use `--legacy-peer-deps`** when installing packages due to peer dependency conflicts with Three.js ecosystem
- The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically uses `npm ci --legacy-peer-deps`
- Dev server runs on port 5173 by default

## Architecture & Structure

### Component Hierarchy
```
App.jsx (main container)
├── Header (fixed navigation with smooth scroll)
├── Hero (3D animated sphere + intro)
├── About (personal info)
├── Journey (education & experience timeline)
├── Skills (technical skills, tools, soft skills)
├── Projects (filterable project gallery)
│   ├── ProjectCard (project preview)
│   └── ProjectModal (detailed project view)
├── Engagement (community involvement)
├── Contact (Formspree form + contact info)
└── Footer (social links + copyright)
```

### Key Files
- **`src/data/projectsData.js`**: Central data source for all projects (exported array of project objects)
- **`src/components/Scene3D.jsx`**: Three.js 3D sphere with distortion material and auto-rotation
- **`vite.config.js`**: Base path is `/Portfolio/` (capitalized) for GitHub Pages deployment
- **`tailwind.config.js`**: Custom color palette (primary blues), animations, and font families
- **`.github/workflows/deploy.yml`**: Auto-deployment to GitHub Pages on push to main

### 3D Graphics Implementation
The Hero section uses React Three Fiber with a `Scene3D` component that renders:
- Animated sphere with `MeshDistortMaterial` (distortion + metallic effect)
- Auto-rotating camera via `OrbitControls`
- Multiple light sources (ambient, directional, point light)
- Loaded via `Suspense` for better performance

### Form Integration
Contact form uses **Formspree** (endpoint: `https://formspree.io/f/mrbraboq`)
- Located in `src/components/Contact.jsx:45`
- Handles form submission via fetch API
- Shows success/error status with animated feedback
- To customize: update the Formspree URL with your own endpoint

### Navigation & Scrolling
- Header implements smooth scroll to sections using `element.scrollIntoView()`
- Each section has an `id` attribute matching the navigation items
- Mobile menu toggles with animations (Framer Motion)

## GitHub Pages Deployment

### Critical Configuration
1. **Base path in `vite.config.js`** must match repository name exactly (case-sensitive)
   - Current: `base: '/Portfolio/'`
   - Change if repo name differs

2. **GitHub Pages settings**:
   - Source: GitHub Actions
   - Workflow deploys from `dist/` folder

3. **Workflow builds on every push to `main`**:
   - Uses Node 18
   - Runs `npm ci --legacy-peer-deps` (required!)
   - Builds with `npm run build`
   - Deploys via `actions/deploy-pages@v4`

### Local Deployment Testing
```bash
npm run build
npm run preview
# Visit http://localhost:4173 to test production build
```

## Customization Points

### Content Updates
1. **Personal Info**: `src/components/Hero.jsx`, `src/components/About.jsx`
2. **Projects**: Edit `src/data/projectsData.js` (array of objects with id, title, category, description, tags, etc.)
3. **Skills**: `src/components/Skills.jsx` (technicalSkills, tools, softSkills arrays)
4. **Timeline**: `src/components/Journey.jsx` (education and experiences arrays)
5. **Contact Info**: `src/components/Contact.jsx` (contactInfo and socialLinks arrays)

### Visual Customization
- **Colors**: `tailwind.config.js` - primary color palette (currently blue theme)
- **Animations**: `tailwind.config.js` - keyframes and animation durations
- **3D Sphere**: `src/components/Scene3D.jsx` - color, distortion, rotation speed
- **Fonts**: Loaded via CDN links in `index.html` (Inter & Poppins)

### Assets
- **Profile photo**: `public/avatar.jpg` (used in About section)
- **CV PDF**: `public/cv-aronn-kabore.pdf` (linked from Hero CTA)
- **Project images**: `public/projects/*.jpg` (referenced in projectsData.js)
- **Favicon**: `public/favicon.svg` (SVG with "AK" text)

## Common Tasks

### Adding a New Project
1. Add project image to `public/projects/`
2. Add project object to `src/data/projectsData.js`:
```javascript
{
  id: 7, // increment ID
  title: "Project Name",
  category: "IA", // or "Big Data", "Web", "Data"
  description: "Short description",
  longDescription: "Detailed description for modal",
  image: "/projects/project-name.jpg",
  tags: ["Python", "TensorFlow"],
  liveUrl: "https://..." || null,
  repoUrl: "https://github.com/..." || null,
  date: "Month Year"
}
```

### Adding a New Section
1. Create component in `src/components/NewSection.jsx`
2. Import and add to `src/App.jsx` between existing sections
3. Add navigation item to `src/components/Header.jsx` (navItems array)
4. Use `id` attribute matching the nav item for smooth scroll

### Updating Social Links
Edit both:
- `src/components/Footer.jsx` (socialLinks array)
- `src/components/Contact.jsx` (socialLinks array)

## Troubleshooting

### Build Failures
- **Peer dependency errors**: Use `npm install --legacy-peer-deps`
- **Missing dependencies**: Delete `node_modules` and `package-lock.json`, reinstall
- **Vite errors**: Check `vite.config.js` base path matches repo name

### 3D Graphics Not Rendering
- Check browser WebGL support
- Verify Three.js imports in `Scene3D.jsx`
- Check console for errors (often shader compilation issues)

### GitHub Pages 404
- Verify `base` in `vite.config.js` matches repository name (case-sensitive)
- Check GitHub Pages settings: Settings → Pages → Source: GitHub Actions
- Review workflow run logs in Actions tab

### Form Not Working
- Formspree endpoint may need verification (check email)
- CORS issues: Formspree handles this automatically
- Check network tab for failed POST requests

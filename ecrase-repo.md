# 🚀 Guide : Écraser l'ancien portfolio et déployer le nouveau

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir :
- ✅ Git installé sur votre ordinateur
- ✅ Un compte GitHub
- ✅ L'URL de votre ancien repository (ex: `https://github.com/aronn-yael/portfolio`)

---

## 🎯 Étape 1 : Préparer le projet local

### 1.1 Ouvrir le terminal dans votre projet

**Sur Windows :**
1. Ouvrez le dossier du projet : `C:\Users\aronn\Downloads\Template (2)\portfolio2.0`
2. Dans la barre d'adresse du dossier, tapez `cmd` puis appuyez sur Entrée
3. Un terminal s'ouvre dans le bon dossier

**Ou via VS Code :**
1. Ouvrez le projet dans VS Code
2. Menu Terminal → New Terminal (ou Ctrl + `)

### 1.2 Vérifier que vous êtes dans le bon dossier

```bash
cd "C:\Users\aronn\Downloads\Template (2)\portfolio2.0"
```

---

## 🔗 Étape 2 : Initialiser Git et connecter au repository

### 2.1 Initialiser Git (si pas déjà fait)

```bash
git init
```

### 2.2 Ajouter tous les fichiers

```bash
git add .
```

### 2.3 Créer le premier commit

```bash
git commit -m "Portfolio complet avec React, Vite et animations 3D"
```

### 2.4 Connecter au repository GitHub existant

**IMPORTANT :** Remplacez `USERNAME` et `NOM-DU-REPO` par vos vraies valeurs !

**Si votre ancien repo s'appelle `portfolio` :**
```bash
git remote add origin https://github.com/aronn-yael/portfolio.git
```

**Pour vérifier que c'est bien connecté :**
```bash
git remote -v
```

Vous devriez voir :
```
origin  https://github.com/aronn-yael/portfolio.git (fetch)
origin  https://github.com/aronn-yael/portfolio.git (push)
```

---

## ⚠️ Étape 3 : ÉCRASER l'ancien portfolio

### 3.1 Vérifier la branche principale

Sur GitHub, la branche principale peut être `main` ou `master`. Pour vérifier :
1. Allez sur votre repository GitHub
2. Regardez en haut à gauche, vous verrez le nom de la branche

### 3.2 Renommer votre branche locale (si nécessaire)

**Si votre GitHub utilise `main` :**
```bash
git branch -M main
```

**Si votre GitHub utilise `master` :**
```bash
git branch -M master
```

### 3.3 FORCER l'écrasement (ATTENTION : ceci supprime l'ancien contenu)

**Pour la branche `main` :**
```bash
git push -f origin main
```

**Pour la branche `master` :**
```bash
git push -f origin master
```

⚠️ **ATTENTION** : Le flag `-f` (force) va ÉCRASER complètement votre ancien portfolio. Il sera remplacé par le nouveau. C'est irréversible !

---

## 🌐 Étape 4 : Configurer GitHub Pages

### 4.1 Vérifier le nom du repository

1. Allez sur votre repository GitHub
2. Notez le nom exact (ex: `portfolio`)

### 4.2 Mettre à jour le fichier `vite.config.js`

Ouvrez le fichier `vite.config.js` et vérifiez que le `base` correspond au nom de votre repo :

**Si votre repo s'appelle `portfolio` :**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // ✅ Correct
})
```

**Si votre repo s'appelle autrement (ex: `mon-site`) :**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/mon-site/',  // Changez selon votre repo
})
```

**Si vous utilisez un domaine personnalisé :**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/',  // Pour aronn-kabore.com par exemple
})
```

### 4.3 Activer GitHub Pages

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez :
   - **Source** : `GitHub Actions`
5. GitHub Pages est maintenant activé !

### 4.4 Déployer automatiquement

Le déploiement se fait automatiquement via GitHub Actions. Le fichier `.github/workflows/deploy.yml` est déjà configuré.

**Pour déclencher le déploiement :**

1. Si vous avez modifié `vite.config.js`, sauvegardez et committez :
```bash
git add vite.config.js
git commit -m "Configure base path pour GitHub Pages"
git push origin main
```

2. Sinon, le déploiement se déclenchera automatiquement

---

## ✅ Étape 5 : Vérifier le déploiement

### 5.1 Voir l'état du déploiement

1. Allez sur votre repository GitHub
2. Cliquez sur l'onglet **Actions**
3. Vous verrez le workflow "Deploy to GitHub Pages" en cours
4. Attendez que ça passe au vert ✅ (2-3 minutes)

### 5.2 Accéder à votre site

Votre portfolio sera accessible à :
```
https://aronn-yael.github.io/portfolio/
```

Remplacez `aronn-yael` par votre username et `portfolio` par le nom de votre repo.

---

## 🔧 Commandes utiles pour plus tard

### Mettre à jour le site après des modifications

```bash
# 1. Ajouter les fichiers modifiés
git add .

# 2. Créer un commit
git commit -m "Description de vos changements"

# 3. Pousser vers GitHub (déploiement automatique)
git push origin main
```

### Vérifier l'état de Git

```bash
git status
```

### Voir l'historique des commits

```bash
git log --oneline
```

---

## 🆘 Dépannage

### Erreur : "remote origin already exists"

```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/NOM-DU-REPO.git
```

### Erreur : "failed to push some refs"

```bash
git pull origin main --rebase
git push origin main
```

### Le site ne s'affiche pas correctement

1. Vérifiez que `base` dans `vite.config.js` correspond au nom de votre repo
2. Attendez 2-3 minutes après le déploiement
3. Videz le cache du navigateur (Ctrl + Shift + R)

### Les images ne s'affichent pas

Vérifiez que les images sont bien dans le dossier `public/` :
- `public/avatar.jpg` (ou .JPG)
- `public/cv-aronn-kabore.pdf`
- `public/warms-donors-1.jpg`
- `public/warms-donors-2.jpg`
- `public/logo.png`

---

## 📝 Checklist finale avant déploiement

- [ ] Formspree configuré avec votre Form ID
- [ ] Toutes les images sont dans `public/`
- [ ] Le CV PDF est dans `public/cv-aronn-kabore.pdf`
- [ ] `vite.config.js` a le bon `base` path
- [ ] Git est initialisé et connecté au bon repository
- [ ] Commit créé avec tous les fichiers
- [ ] Push effectué vers GitHub
- [ ] GitHub Pages activé avec source "GitHub Actions"
- [ ] Workflow terminé avec succès ✅

---

## 🎉 C'est terminé !

Votre nouveau portfolio est maintenant en ligne et accessible à :
```
https://aronn-yael.github.io/portfolio/
```

Pour toute modification future, suivez simplement les "Commandes utiles pour plus tard" ci-dessus.

Bon succès avec votre recherche de stage PFE ! 🚀

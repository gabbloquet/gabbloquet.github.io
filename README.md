# Portfolio - Gabin Bloquet

Portfolio personnel de Gabin Bloquet - **CTO • Crafter • Coach • Speaker**

![application.png](application.png)

🔗 [gabbloquet.github.io](https://gabbloquet.github.io)

## Stack technique

- **React 19** + TypeScript
- **Vite 7** - Build tool
- **Tailwind CSS v4** - Styling
- **React Router v7** - Routing
- **React Markdown** - Rendu des articles de blog

## Commandes

```bash
# Installation des dépendances
npm install

# Serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview

# Linter
npm run lint
```

## Structure du projet

```
src/
├── components/      # Composants réutilisables (Navigation, Hero, Skills, etc.)
├── articles/        # Articles de blog en Markdown
├── Home.tsx         # Page d'accueil
├── Blog.tsx         # Liste des articles
├── Article.tsx      # Page article
└── main.tsx         # Point d'entrée avec routing
```

## Fonctionnalités

- **Homepage** - Présentation, compétences, projets, expériences
- **Blog** - Articles avec recherche et filtres par catégorie
- **CV téléchargeable** - Export PDF via `window.print()` avec styles d'impression dédiés
- **Responsive** - Adapté mobile, tablette et desktop

## Licence

MIT
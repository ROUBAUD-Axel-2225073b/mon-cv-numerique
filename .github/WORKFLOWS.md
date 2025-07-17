# Workflows GitHub Actions

Ce projet utilise GitHub Actions pour l'intégration continue (CI).

## Workflows disponibles

### 1. CI Pipeline (`ci-cd.yml`)
- **Déclencheur** : Push sur `master` ou `main`, Pull Requests
- **Actions** :
  - Installation des dépendances
  - Vérification du code (ESLint)
  - Vérification des types TypeScript
  - Tests (si configurés)
  - Build de l'application
  - Sauvegarde des artefacts de build (pour les pushes sur master)

### 2. Pull Request Check (`pr-check.yml`)
- **Déclencheur** : Pull Requests vers `master` ou `main`
- **Actions** :
  - Vérification du code
  - Vérification des types
  - Test de build

## Artefacts

Les fichiers de build sont sauvegardés comme artefacts lors des pushes sur la branche master et sont disponibles pendant 30 jours dans l'onglet Actions de votre dépôt GitHub.

## Scripts npm disponibles

- `npm run dev` - Développement local
- `npm run build` - Build de production  
- `npm run lint` - Vérification ESLint
- `npm run type-check` - Vérification TypeScript
- `npm run test` - Tests (à configurer)
- `npm run preview` - Prévisualisation du build

## Statut des builds

Les badges de statut apparaîtront dans votre README principal une fois les workflows exécutés.

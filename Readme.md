# 🚀 Mon Projet TypeScript + Jest

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![Coverage Status](https://img.shields.io/badge/coverage-100%25-brightgreen)](#)
[![TypeScript](https://img.shields.io/badge/language-typescript-blue)](#)
[![Jest](https://img.shields.io/badge/tested_with-jest-99424f)](#)

---

## 📋 Description

Ce projet explique comment :

- Initialiser un projet TypeScript,
- Installer et configurer Jest pour les tests unitaires en TypeScript,
- Générer un rapport de couverture de tests.

---

## 🛠 1. Initialisation du projet TypeScript

### 1.1 Créer un nouveau dossier

```bash
mkdir mon-projet-typescript
cd mon-projet-typescript
```

### 1.2 Initialiser Node.js

```bash
npm init -y
```

### 1.3 Installer TypeScript

```bash
npm install --save-dev typescript
```

### 1.4 Créer un fichier de configuration TypeScript

```bash
npx tsc --init
```

Exemple de `tsconfig.json` conseillé :

```json
{
  "compilerOptions": {
    "outDir": "./public",
    "rootDir": "./src",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

### 1.5 Créer l'arborescence du projet

```bash
mkdir src
```

### 1.6 Exemple de fichier TypeScript

**src/index.ts**

```typescript
export function addition(a: number, b: number): number {
  return a + b;
}
```

---

## 🧪 2. Installer et configurer Jest pour TypeScript

### 2.1 Installer Jest, ts-jest et @types/jest

```bash
npm install --save-dev jest ts-jest @types/jest
```

### 2.2 Générer la configuration Jest

```bash
npx ts-jest config:init
```

Cela crée un fichier `jest.config.ts` :

```typescript
export default {
  preset: "ts-jest",
  testEnvironment: "node",
};
```

### 2.3 Ajouter un fichier de test

**src/tests/index.test.ts**

```typescript
import { addition } from "./index";

describe("addition", () => {
  test("ajoute deux nombres", () => {
    expect(addition(2, 3)).toBe(5);
  });
});
```

---

## ⚙️ 3. Ajouter des scripts utiles

Dans ton `package.json`, ajoute :

```json
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "test": "jest",
  "test:coverage": "jest --coverage"
}
```

### Commandes disponibles

| Commande                | Description                                        |
| ----------------------- | -------------------------------------------------- |
| `npm run build`         | Compile le projet TypeScript                       |
| `npm run start`         | Lance l'application compilée                       |
| `npm run test`          | Lance les tests unitaires                          |
| `npm run test:coverage` | Lance les tests et génère un rapport de couverture |

---

## 📊 4. Générer la couverture de tests

Pour générer un rapport de couverture :

```bash
npm run test:coverage
```

Cela crée un dossier `coverage/` contenant :

- Un rapport HTML (`lcov-report/index.html`),
- Un résumé dans le terminal.

### Exemple de résultat :

```
File                 | % Stmts | % Branch | % Funcs | % Lines
---------------------|---------|----------|---------|---------
All files            |   100   |    100   |   100   |   100
 src/index.ts        |   100   |    100   |   100   |   100
```

### Ouvrir le rapport

- Double-cliquer sur `coverage/lcov-report/index.html`,
- Ou ouvrir dans ton navigateur préféré.

---

## 🚨 5. Définir un seuil de couverture minimale

Dans `jest.config.ts`, ajouter :

```typescript
coverageThreshold: {
  global: {
    branches: 80,
    functions: 80,
    lines: 80,
    statements: 80,
  },
},
```

➡️ Cela forcera Jest à échouer si la couverture descend sous 80%.

---

# 🧪 Projet Test Unitaire : Jeu de Combat en TypeScript

Bienvenue dans ce projet de **tests unitaires** avec **Jest** sur un **jeu de combat** développé en **TypeScript** !

---

## 🎯 Objectif

- **Analyser** du code TypeScript existant (`Character`, `Game.ts` fourni).
- **Écrire des tests unitaires** couvrant toutes les fonctionnalités du jeu.
- **Structurer** correctement vos tests avec `describe`, `it`, `todo`.

---

## 🛠️ Setup du projet

1. Installez les dépendances nécessaires :
   ```bash
   npm install
   ```
2. Structure actuelle :
   ```
   /src
     part1.ts  (fourni)
     part2.ts  (fourni)
     part3.ts  (fourni)
     part4.ts  (fourni)
   /tests
     part1.test.ts (à créer)
     part2.test.ts (à créer)
     part3.test.ts (à créer)
     part4.test.ts (à créer)
   tsconfig.json
   jest.config.js
   package.json
   ```

---

## 📜 Code fourni

Le fichier `src/partX.ts` contient :

- La classe `Character`
- Les fonctionnalités suivantes déjà codées :
  - **Attaque** entre personnages
  - **Classes** (`Guerrier`, `Mage`, `Archer`) avec effets spéciaux (part1)
  - **Soin** avec `heal` (part2)
  - **Coup critique** (chance aléatoire)() (part3)
  - **Défense** pour réduire les dégâts (part4)

---

## 📋 Travail demandé

1. **Créer un fichier** `tests/partX.test.ts`.
2. **Écrire les tests unitaires** pour vérifier que chaque fonctionnalité fonctionne correctement.

Vous devez **couvrir** les cas suivants :

| Fonctionnalité           | Ce que votre test doit vérifier                    |
| :----------------------- | :------------------------------------------------- |
| Création d'un personnage | Attributs (nom, HP, attaque, classe)               |
| Attaque normale          | HP de l'ennemi diminué après attaque               |
| Détection de mort        | `isAlive()` retourne `false` quand HP <= 0         |
| Potion de soin           | HP augmentent après appel à `heal()`               |
| Coup critique            | Dégâts doublés si critique (mock de `Math.random`) |
| Défense                  | Dégâts divisés par 2 après `defend()`              |

---

## 🧪 Structure attendue des tests

Utilisez **`describe`** pour regrouper logiquement vos tests et **`it`** pour détailler chaque comportement :

```typescript
describe("Character - Basic Behavior", () => {
  it("should correctly attack and decrease enemy HP", () => {
    // à compléter
  });

  it("should detect when character is dead", () => {
    // à compléter
  });
});

describe("Character - Advanced Features", () => {
  it.todo("should apply critical hit bonus");
  it.todo("should heal correctly");
  it.todo("should defend and reduce damage");
  it.todo("should manage multiple enemies");
});
```

## 📚 Conseils

- **Commencez simple** : testez d'abord les cas basiques avant les fonctionnalités avancées.
- **Mockez `Math.random`** pour forcer un coup critique et le tester proprement.
- **Utilisez `beforeEach`** si besoin pour éviter la répétition du code.
- **Écrivez un test par comportement testé** (ne testez pas plusieurs choses dans un seul `it`).

---

## 📄 Modèle de fichier `tests/partX.test.ts`

```typescript
import { Character } from "../src/Game";

describe("Character - Basic Behavior", () => {
  it("should correctly attack and decrease enemy HP", () => {
    // TODO
  });

  it("should detect when character is dead", () => {
    // TODO
  });
});

describe("Character - Advanced Features", () => {
  it("should heal correctly and increase HP", () => {
    // TODO
  });

  it("should correctly apply critical hit bonus", () => {
    // TODO
  });

  it("should correctly defend and reduce incoming damage", () => {
    // TODO
  });

  it("should handle multiple enemies correctly", () => {
    // TODO
  });
});
```

---

## 📚 Mini Guide rapide : Comment mocker `Math.random` dans Jest

```typescript
it("should correctly apply critical hit bonus", () => {
  const hero = new Character("Hero", 100, 20, "Guerrier");
  const enemy = new Character("Monster", 100, 15, "Guerrier");

  jest.spyOn(Math, "random").mockReturnValue(0.1);

  hero.attack(enemy);

  expect(enemy.hp).toBe(100 - 20 * 2); // Dégâts doublés
});
```

> 🎯 **Attention** : après avoir mocké Math.random, pensez à :
>
> ```typescript
> jest.restoreAllMocks();
> ```

# Réalisation de vos premiers tests 🧪

## Objectif

Vous allez maintenant être prêts à introduire **2 ou 3 tests** dans votre projet de jeu.

Vous êtes les mieux placés pour le faire, car **vous seuls comprenez** précisément :

- Les classes que vous avez créées,
- Les méthodes que vous avez écrites,
- La logique de votre jeu.

## Ce que vous devez faire

✅ Choisir **2 ou 3 fonctionnalités essentielles** à tester (exemples : initialisation du jeu, victoire, changement d’état, etc.),

✅ Écrire des **tests unitaires** pour ces fonctionnalités,

✅ Vérifier que les résultats obtenus sont bien ceux attendus.

## Exemple de fonctionnalités à tester

- La création correcte d'un joueur ou d'une carte,
- Le passage d'un état à un autre,
- Le calcul d'une victoire ou d'une défaite,
- La gestion des erreurs (ex : mauvaise saisie).

## Checklist pour réussir vos premiers tests

- [ ] Identifier des méthodes importantes à vérifier,
- [ ] Définir ce que doit faire exactement la méthode,
- [ ] Écrire un test simple et clair,
- [ ] Faire passer votre test (✅ vert = tout fonctionne),
- [ ] Corriger votre code si besoin pour qu’il passe le test.

---

## 👩‍💻 Auteur

- [Meriem ](https://github.com/ton-utilisateur)

---

# 🎯 Bon codage et bons tests !

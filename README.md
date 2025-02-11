# Portfolio Personnel

Ce portfolio est un site web personnel présentant mes projets et compétences en développement web.

## 🚀 Fonctionnalités

- Mode sombre/clair avec persistance via localStorage
- Menu hamburger responsive 
- Intégration des projets GitHub dynamique
- Formulaire de contact fonctionnel via EmailJS
- Design responsive et moderne

## 💻 Technologies Utilisées

- HTML5
- CSS3 (avec variables CSS pour le thème)
- JavaScript (Vanilla)
- Font Awesome pour les icônes
- EmailJS pour le formulaire de contact
- API GitHub pour les projets

## 📦 Structure du Projet

```
portfolio/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   │   └── profile.jpg  
│   └── js/
│       └── script.js
├── index.html
└── README.md
```

## 🔧 Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-username/portfolio.git
```

2. Ouvrez index.html dans votre navigateur

## ⚙️ Configuration

Pour que le formulaire de contact fonctionne :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Remplacez l'ID dans script.js :
```js
emailjs.init("VOTRE_USER_ID");
```

## 📱 Responsive

Le site est entièrement responsive avec :
- Menu hamburger pour mobile
- Grille de projets adaptative
- Images et contenus redimensionnables

## 📄 Licence

MIT License
# Exercice Node.js

Ce dépôt contient un exercice pour pratiquer et approfondir vos compétences en Node.js.

## Instructions

1. Clonez ce dépôt sur votre machine locale.
2. Assurez-vous d'avoir Node.js installé sur votre machine.
3. Exécutez `npm install` pour installer les dépendances.
5. Exécutez `node index.js` pour demarrer le serveur local.

Methode `GET` :

1. `/users` pour tous les utilisateurs.
2. `/user?username=one_username`pour avoir les infos d'un utilisateur.

Methode `POST`:

1. `/users/new` crée un utilisateur.

Methode `DELETE`:
1. `/users/destroy` pour supprimer un utilisateur.

Methode `PUT`:
1. `/user?email=one_email@example.com` pour mettre à jours un utilisateur.


## Structure du projet

Le projet est organisé de la manière suivante :

- `DB` : Dossier contenant `users.json` qui est la base de donnée de notre application.
- `Routes` : Dossier contenant `userRoutes.js` qui le fichier qui gèrent les routes de notre application.
- `index.js` : Fichier qui gère le fonctionnement du serveur express de l'application. 
- `package.json / package-lock.json`: Fichier qui possèdent les différents dépendances installées pour notre application.



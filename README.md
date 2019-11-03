# Todo List basique faite en Node.JS

## Objectifs :

Petite todo liste faite en Node.js de façon relativement basique.

L'idée ici n'est pas de créer une todo liste fonctionnelle et optimisée, mais de comprendre quelques notions de bases pour découvrir Node.JS :

- L'initialisation d'un projet sous `Express`
- La création des première requête (`get` et `post`)
- Connecter un formulaire avec requêtes `HTTP`
- Découvrir l'ORM `Sequelize` avec une mise en relation vers `PostgreSQL` :
  - installation
  - initialisation
  - connection
  - création du premier model
  - premières manipulations `CRUD`
- Envoyer des données du back vers le front
- Envoyer des données du front vers le back avec `Axios`

Ce petit projet est la première étape de découverte `Express`, `Sequelize` et `PostgreSQL`

---

## Toutes les étapes pour créer une Todo Liste sous Node.JS :

1. Initiation du projet (git + npm)
2. Installation d'`Express`
3. Initiation d'`Express`
4. Création de la première requête sur la page d'accueil (`get`)
5. Coller le template Bootstrap de la todo dans le `get` de l'accueil
6. Création d'une première requête `put` + test avec `Postman`
7. Cabler le formulaire avec la requête `post`
8. Préparer la base de donnée (`postgreSQL`)
9. Installer l'ORM `Sequelize` + initialisation de `Sequelize` + test de connection
10. Déplacer les informations de connection à la base de donnée dans `config/database.js`
11. Création du model `Item` + cablage d'une requête `Sequelize findAll` dans la requête `post`
12. Modification de la requête `post` pour insertion du contenu de l'`input` dans la bdd avec `Sequelize`
13. Ajouter un `findAll` de `Sequelize` dans la requête `get` de l'accueil et afficher le contenu dans la console
14. Déplacer le template Bootstrap HTML dans la requête `findAll` à la place de la ligne `console.log`
15. Remplacer les items écrit en dur dans le template HTML par ceux enregistrés en bdd
16. Création du fichier statique `edit.js` dans public + ajout d'un écouteur d'évènement `click` sur le bouton `Edit`
17. Ajout d'un `prompt` dans l'écouteur d'évènement + affichage du contenu dans la console du navigateur
18. Ajout du `CDN` de la librairie `Axios` dans le template Bootstrap
19. Ajout d'une requête `post` pour l'url `/update-item`
20. Ajout d'une requête `post` depuis `edit.js` avec `Axios` qui renvoi le contenu du prompt au serveur + test dans la console de Node
21. Cabler le bouton `Edit` pour l'édition de l'item en base de données (récupération de l'id + modification) ⚠️ Rechargement obligatoire pour afficher les nouvelles valeurs !!!!
22. Cabler le bouton `Delete` pour la suppression de l'item en base de données (récupération de l'id + suppression) ⚠️Rechargement obligatoire pour afficher les nouvelles valeurs !!!!

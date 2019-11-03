# Todo List basique faite en Node.JS

## Etapes :

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

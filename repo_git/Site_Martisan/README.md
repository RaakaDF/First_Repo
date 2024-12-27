SITE_MARTISANT/
|
|--- controllers/
|    └── controller.php or js
|
|
|
|--- view/
|    ├── accueil.html
|    ├── apropos.html
|    ├── services.html
|    ├── footer.html
|    ├── contact.html
|    ├── base.html
|    ├── faq.html
|    ├── info_diag.html
|    ├── header.html
|    └── temoignage.html
|
|
|
|--- static/
|    ├── css/
|    |   └── style.css 
|    |
|    ├── js/
|    |   └── script.js
|    |
|    └── images/
|    |   ├── 




Model (Modèle) :
- Représente la structure des données et contient la logique métier.
- Exemple : Les modèles de données pour les articles de blog, les produits du catalogue, etc.

View (Vue) :
- Représente l'interface utilisateur.
- Exemple : Les fichiers HTML dans le dossier views.

Controller (Contrôleur) :
- Gère les requêtes de l'utilisateur, interagit avec le modèle, et sélectionne la vue appropriée.
- Exemple : Les fonctions dans controllers/controller.go.

Diagramme MVC :

   [User] -> [Controller] -> [Model] -> [View]
                ^                            |
                |----------------------------|



### 4. **Outils de génération automatique d'arborescence**
- Vous pouvez aussi utiliser des outils ou des commandes comme `tree` en ligne de commande pour générer automatiquement l'arborescence d'un répertoire.

Exemple en utilisant `tree` :
```bash
tree SITE_MARTISANT/

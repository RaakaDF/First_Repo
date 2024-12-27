// getElementById(id) => Sélectionne un élément par son ID unique.
const element = document.getElementById('myId');

// getElementsByTagName(tagName) => Sélectionne tous les éléments d'un type de balise spécifique (comme div, p, span, etc.).
const elements = document.getElementsByTagName('p');

/* querySelector(selector) => Sélectionne le premier élément qui correspond à un sélecteur CSS.
 Plus flexible, car il permet de sélectionner des éléments par ID, classe, balise, attribut, pseudo-classes, etc.*/
const elemen = document.querySelector('#monId');
const eleme = document.querySelector('.maClasse');

// querySelectorAll(selector) => Sélectionne tous les éléments qui correspondent à un sélecteur CSS.
const elemets = document.querySelectorAll('.myClass');

// createElement(tagName) => Crée un nouvel élément HTML spécifié par tagName.
const newDiv = document.createElement('div');

// appendChild(child) => Ajoute un nœud enfant (élément) à un élément parent.
const parentElement = document.getElementById('parent');
const newdiv = document.createElement('div');
parentElement.appendChild(newdiv);

//removeChild(child) => Supprime un nœud enfant d'un élément parent
const parentelement = document.getElementById('parent');
const childElement = document.getElementById('child');
parentelement.removeChild(childElement);

//replaceChild(newChild, oldChild) => Remplace un nœud enfant par un autre.
const parentElemen = document.getElementById('parent');
const newElement = document.createElement('div');
const oldElement = document.getElementById('child');
parentElemen.replaceChild(newElement, oldElement);

// innerHTML =>  Obtient ou définit le contenu HTML à l'intérieur d'un élément. Retourne : Une chaîne de caractères représentant le HTML à l'intérieur de l'élément.
const elemnt = document.getElementById('myDiv');
element.innerHTML = '<p>Nouveau contenu</p>';

// textContent => Obtient ou définit le texte à l'intérieur d'un élément, en ignorant le HTML.
const element = document.getElementById('myDiv');
element.textContent = 'Nouveau texte';

// setAttribute(name, value) => Définit un attribut pour un élément avec une valeur spécifiée.
const element = document.getElementById('myDiv');
element.setAttribute('class', 'nouvelleClasse');

// removeAttribute(name) => Supprime un attribut d'un élément.
document.getElementById('myDiv').removeAttribute('class');

/* classList => Une propriété qui permet de manipuler les classes CSS d'un élément (ajout, suppression, vérification, bascule).
  Méthodes associées :
add(className): Ajoute une classe.
remove(className): Supprime une classe.
toggle(className): Ajoute ou supprime une classe selon sa présence.
contains(className): Vérifie si une classe est présente.
*/
const element = document.getElementById('myDiv');
element.classList.add('nouvelleClasse');

// style => Accède ou modifie les styles CSS en ligne d'un élément.
const element = document.getElementById('myDiv');
element.style.color = 'red';

/* parentNode et childNodes
parentNode : Accède au parent direct d'un élément.
childNodes : Renvoie une collection de tous les nœuds enfants (éléments, texte, commentaires) d'un élément. */
const element = document.getElementById('myDiv');
const parent = element.parentNode;
const children = element.childNodes;

/*firstChild et lastChild
firstChild : Renvoie le premier nœud enfant d'un élément.
lastChild : Renvoie le dernier nœud enfant d'un élément.*/
const element = document.getElementById('myDiv');
const firstChild = element.firstChild;
const lastChild = element.lastChild;

/*nextSibling et previousSibling
nextSibling : Renvoie le nœud suivant au même niveau de la hiérarchie.
previousSibling : Renvoie le nœud précédent au même niveau de la hiérarchie. */
const element = document.getElementById('myDiv');
const nextSibling = element.nextSibling;
const previousSibling = element.previousSibling;

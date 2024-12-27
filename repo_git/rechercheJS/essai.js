//la fonction "fusion" pour fusionner des objets
function fusionnerObjets(objet1, objet2) {
    const resultat = Object.assign({}, objet1); // Crée un nouvel objet contenant les propriétés de l'objet1
    
    for (let cle in objet2) {
      if (resultat.hasOwnProperty(cle)) {
        if (typeof resultat[cle] === 'number' && typeof objet2[cle] === 'number') {
          resultat[cle] += objet2[cle]; // Additionne les valeurs si elles sont de type nombre
        }
      } else {
        resultat[cle] = objet2[cle]; // Ajoute la propriété si elle n'existe pas dans l'objet1
      }
    }
    
    return resultat;
  }

  const objet1 = { a: 10, b: 8, c: 1 };
  const objet2 = { a: 10, b: 2, d: 5 };

  const resultatFusion = fusionnerObjets(objet1, objet2);
  console.log(resultatFusion);

  // Math.random pour générer les nombres aléatoires de 0 à 0.999999, 
  //le test suivant génère des nombres de 0 à 10

  const randnumbs = Math.floor(Math.random()*11)
  console.log(randnumbs)
/*Math.random() renvoie un nombre décimal aléatoire compris entre 0 (inclus) et 1 (exclu). Par exemple, cela peut être 0.423456789.

En multipliant Math.random() par 11, on obtient un nombre décimal aléatoire compris entre 0 (inclus) et 11 (exclu). Par exemple, cela peut être 4.657890123.

Math.floor() arrondit le nombre décimal vers le bas pour obtenir un nombre entier. Par exemple, Math.floor(4.657890123) renverra 4. */

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)
const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

/*Nous pouvons convertir un nombre flottant de chaîne en un nombre flottant. Tout nombre flottant à l'intérieur d'un guillemet est un nombre flottant de chaîne. 
Un exemple de nombre flottant de chaîne : '9.81', '3.14', '1.44', etc. 
Nous pouvons convertir un nombre flottant de chaîne en nombre en utilisant les méthodes suivantes : */

let floatStr = '9.81';
let numFloat = parseFloat(floatStr)
console.log(numFloat) // 9.81

let numb = '9.81'
let numbFloat = Number(numb)
console.log(numbFloat) // 9.81

let numStr = '9.81'
let numbrFloat = +numStr
console.log(numbrFloat) // 9.81

//Nous pouvons convertir des nombres flottants en nombres entiers. Nous utilisons la méthode suivante pour convertir float en int :

let numbr = 9.81
let numInt = parseInt(numbr)

console.log(numInt) // 9
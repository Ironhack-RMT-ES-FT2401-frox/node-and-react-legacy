console.log("probando desde node")
console.log("patata")

let num = 10;
num += 35

console.log(num)


// exportar e importar modulos con ES5.

// require("./test.js") 
// 1. ejecuta el código que hay en test.js. todo queda en su propio scope.

// const dataImported = require("./test.js")
// 1. ejecuta el código que hay en test.js. todo queda en su propio scope.
// 2. recibir la data que haya sido exportada

// console.log(dataImported)

// exportar e importar modulos con ES6.

// import "./test.js"
// 1. ejecuta el código que hay en test.js. todo queda en su propio scope.

import dataImported from "./test.js"
console.log(dataImported)



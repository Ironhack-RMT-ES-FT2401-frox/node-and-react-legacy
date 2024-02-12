console.log("ejecución desde test.js")

let variableEnTest = {
  name: "jorge",
  age: undefined
}

let variable2 = "patata"

console.log(variableEnTest)

// exportar e importar modulos con ES5.

// module.exports = [variableEnTest, variable2]
// exporta esta data para que sea accesible en otros archivos


// 1. solo puede haber un export en el archivo
// 2. si quiere exportar multiples cosas, envolverlas en un array u objeto

// exportar e importar modulos con ES6.

export default [variableEnTest, variable2]
// exporta esta data para que sea accesible en otros archivos


// 1. solo puede haber un export en el archivo
// 2. si quiere exportar multiples cosas, envolverlas en un array u objeto
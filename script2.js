// aqui probamos paquetes

// const superheroes = require("superheroes") // ES5

import superheroes from "superheroes" // ES6
// busca en la carpeta de instalaciones (node_modules) un paquete con este nombre

let students = ["fran", "josep", "meri", "abraham", "pablo", "adri"]
let studentsArr = []
for (let i = 0; i < students.length; i++) {
  let studentObj = {
    name: students[i],
    superHeroName: superheroes.random()
  }
  studentsArr.push(studentObj)
}


// console.log(studentsArr)

import cows from "cows"

let cowsArr = cows()

console.log(cowsArr[426])




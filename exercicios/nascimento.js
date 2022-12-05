/**
 * Ano do Nascimento = idade e semana
 */

//importar o pacote
let read = require("readline-sync")

let anos = Number(read.question("Qual ANO voce nasceu?"))
let idade = (2022 - anos)
let semana = (idade *52.177) 

console.log(`voce tem ${idade} anos que é igual a ${semana.toFixed(0)} semanas `)
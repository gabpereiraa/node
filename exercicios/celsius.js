/**
 * De Fahrenheit para Celsius
 */

//importar o pacote
const read = require('readline-sync')

console.log("Calculadora de Fahrenheit para Celsius")
//variaveis
let fahrenheit = Number(read.question('Digite a Temperatura em Fahrenheit: ').replace(",","."))

//processamento
let celsius = (fahrenheit - 32) / 1.800

//saida
console.log(`Celsius: ${celsius.toFixed(1)}`)
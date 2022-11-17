/**
 * Regra de 3
 */

//importar o pacote
const read = require('readline-sync')

console.log("Regra de 3")
//variaveis
let valorporcento = Number(read.question('Digite o valor %: ').replace(",","."))
let valorcalculo = Number(read.question('Digite o valor: ').replace(",","."))
//processamento
let valor = (valorporcento * valorcalculo) / 100

//saida
console.log(`Valor: ${valor.toFixed(1)}`)
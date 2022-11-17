/**
 * Jogo: Pedra - Papel - Tesoura1
 */

//importar os pacotes
const read = require('readline-sync')

console.log("____________________Jokenpô____________________")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")
console.log("")
let jogador = Number(read.question("Digite a opcao desejada: "))

//linha
console.log("")

//logica do jogador
switch(jogador) {
    case 1:
        console.log("Jogador escolheu: Pedra")
        break
    case 2:
        console.log("Jogador escolheu: Papel")
        break
    case 3:
        console.log("Jogador escolheu: Tesoura")
        break
    default:
         console.log("opcao invalida")
}

//sorteio computador
let computador = Math.floor(Math.random() * 3 + 1)
switch(computador) {
    case 1:
        console.log("Computador escolheu: Pedra")
        break
    case 2:
        console.log("Computador escolheu: Papel")
        break
    case 3:
        console.log("Computador escolheu: Tesoura")
        break }

//LINHA
console.log("")

//logica para declara o vencedor ou empate
if (jogador == computador) {
    console.log("EMPATE")
 }else{
    if ((jogador == 1 && computador == 3) || (jogador == 2 && computador == 1) || (jogador == 3 && computador == 2) ) {
        console.log("JOGADOR VENCEU") 
} else {
    console.log("COMPUTADOR VENCEU") }}
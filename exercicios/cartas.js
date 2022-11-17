/**
 * Exemplo de uso do vetor
 */

let nipes = ["Ouros","Copas","Espadas","Paus"]
let faces = ["Az",1,2,3,4,5,6,7,8,9,10,"Valete","Dama","Rei"]

//Recuperando a carta Az de ouros
console.log(`Carta: ${faces[0]} de ${nipes[0]}`)
//Recuperando a carta Dama de Copas
console.log(`Carta: ${faces[12]} de ${nipes[1]}`)

//Sorteio de uma carta
//Math.random -> gerador de números aleatorios
//Math.floor -> converte para números inteiros
let sorteionipe = Math.floor(Math.random() * 4)
let sorteioface = Math.floor(Math.random() * faces.length)
console.log(`Carta Sorteada: ${faces[sorteioface]} de ${nipes[sorteionipe]}`)
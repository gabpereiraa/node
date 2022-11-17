/**
 * Estudo das Variaveis booleanas
 */

let sw = false
let lamp = true
console.log(typeof(sw))
console.log(sw)
console.log(typeof(lamp))
console.log(lamp)
//No JS é possivel usar 0 ou 1 como booleano
sw = !1   //(!0 !1 !!0 !!1)
console.log(typeof(sw))
console.log(sw)

//Dica! É possivel usar oo tipo boleano

console.log(sw || "Lampada Apagada")

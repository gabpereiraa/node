/**
 * comparadores
 */

//comparadores se referem as variáveis
console.log("Comparadores")
console.log(">    | Maior que")
console.log(">=   | Maior ou igual a")
console.log("<    | Menor que")
console.log("<=   | Menor ou igual a")
console.log("==   | comparador de igualdade(BUG)")
console.log("===  | comparador de igualdade")
console.log("!=   | diferente de (BUG)")
console.log("!==  | diferente de ")

let x = 2
let y = "2"
console.log(typeof(x))
console.log(typeof(y))

//demostração do BUG ==
if (x == y) {
    console.log("x é igual a y")
} else {
    console.log("x é diferente de y")
}

//demostração do BUG !=
if (x != y) {
    console.log("x é diferente de y")
} else {
    console.log("x é igual a y")
}

//exemplo de uso dos comparadores ===
if (x === y) {
    console.log("x é igual a y")
} else {
    console.log("x é diferente de y")
}

//exemplo de uso dos comparadores !==
if (x !== y) {
    console.log("x é diferente de y")
} else {
    console.log("x é igual a y")
}
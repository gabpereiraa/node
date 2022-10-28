/**
 * Fundamentos do JS
 */

//A linguagem JS trabalha com sentenças
//; é opcional
//Você pode usar ' ' ou " " mas não pode usar " '
console.log ("Hello JS")
//A Linguagem JS também trabalha com blocos
{
    console.log ("Bloco")
}

//Variáveis no JS não são tipadas
//var let const (são usados para a locação de memória)

var nome = "Gabriel"
var idade = 18
var vip = true
console.log ("Nome:  " + (nome))
console.log("Tipo de Variável:  " + typeof(nome))
console.log ("Idade:  " + (idade))
console.log("Tipo de Variável:  " + typeof(idade))
console.log("Vip:  " + vip)
console.log("Tipo de Variável:  " + typeof(vip))

//----------------------------------------------------
//problemas no uso do var para declarar uma variável
var teste = "Hello" //criar uma variável
teste = "Olá mundo" //alterar variável
var teste = "BUG1" //redeclarar variável
console.log(teste)

//let tesolve esse problema
let teste2 = "hello" //criar variavel
teste2 = "Olá Mundo 2"
//let teste2 = "BUG2" //o let protege a variável não permitindo a criação de
// uma seguanda variável com o mesmo nome
console.log(teste2)

//constantes
const pi = 3.1415
//pi = 2  //constante não pode ser alterada
console.log("valor de pi: " + pi)

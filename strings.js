/**
 * Strings
 */

const professor = "Antonio"
//indice           01234...
console.log(typeof(professor))
console.log(professor)
//obtendo o valor de um caractere do string
console.log(professor.charAt(2))
//Para obter o valor do indice de uma string
console.log(professor.indexOf("n"))
//obter uma sequencia à partir do indice
console.log(professor.substring(2))
//É possivel alterar o conteúdo  da string
console.log(professor.replace("Antonio","Toninho"))//(original,novo)
//Dica: replace(",",".")


/****** Concatenação *****/
const x = 2
const y = Number("3") //converter uma string em um numero
console.log(typeof(x))
console.log(typeof(y))
console.log("Valor de X: " + x)
console.log("2" + x) //concatena
console.log("3" - x) //subtrai (o mesmo para * /)
//evitar o uso do + na concatenação
//Para concatenar usar crases ''
console.log(`professor: ${professor}`)
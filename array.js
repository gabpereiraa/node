/**
 * Array - estudo do array(vetor)
 */

//para criar um vetor basta usar colchetes
// Indice       [0]         [1]        [2]           [3]  
let times = ["corinthians","palmeiras","São Paulo","santos"]
console.log(times)
//No JS um vetor é heterogêneo e Dinâmico
console.log(typeof(times))
//para saber o tamanho do vetor
console.log(times.length)
//Recuperar o índice de um Item armazenado no vetor
console.log(times.indexOf("São Paulo"))
//Recuperar um Item do vetor
console.log(times[2])
console.log(times[5])
//Adicionando um Item ao vetor
times[5] = "Flamengo"
console.log(times)
console.log(times[5])
times.push("Cruzeiro","Sport Recife","Paysandu")
console.log(times)
console.log(times.length)
//Adicionando Itens de tipos diferentes ao vetor
times.push(1977,null,"Bragantino",true)
console.log(times)
//Removendo um Item especifico do Vetor
delete times[2]
console.log(times)
//Removendo o último item do vetor
times.pop()
console.log(times)
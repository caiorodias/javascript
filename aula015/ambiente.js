let num = [5, 8, 9, 3]
num[4] = 6 /* adicionar escolhendo a posição */
num.push(7) /* adicionar na última posição */
num.sort() /* colocar em ordem crescente */


console.log (`Nosso vetor é o ${num}`)

console.log (`O array tem ${num.length} itens.`)

console.log (`O item ${num[2]} na 3ª posição do array`)

let pos = num.indexOf (13)
if (pos == -1) {
    console.log (`O valor não foi encontrado!`)
} else {
    
    console.log(`O valor 8 está na posição ${pos}`)
}

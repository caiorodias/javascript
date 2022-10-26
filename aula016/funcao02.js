function soma(n1, n2) {
    return n1 + n2
}

console.log (soma(2, 7))

/* se eu passar apenas um parâmetro ficará como 2+undefined que resulta em NaN (not a number) 

Porém se eu passar como function soma(n1=0, n2=0) ele fica como default value 0


*/
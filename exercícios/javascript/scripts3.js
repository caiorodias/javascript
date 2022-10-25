function contar() {
    let x = document.querySelector('input#inicio')
    let z = document.querySelector('input#fim')
    let y = document.querySelector('input#intervalo')
    const res = document.querySelector('div#msg')
    

    if (x.value.length == 0 || z.value.length == 0 || y.value.length == 0) {
        window.alert ('[ERRO] Ausência de dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let int = Number(intervalo.value)
        /* if (p <= 0) {
            window.alert ('Passo inválido! Considerando intervalo 1')
            int = 1
        } */
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c+=int) {
                res.innerHTML += ` ${c} &#10140;`
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c-= int) {
                res.innerHTML += ` ${c} &#10140;`
            }
        }
        res.innerHTML += `&#127937;`
    }

    
}

/* 
x = inicio
y = intervalo
z = fim

soma = x+y

while (soma <= fim) {
    soma + y
}

for (let soma = x+y; soma.value < z.value; soma.value + y.value) {
            res.innerHTML = `${soma.}`
        }
*/
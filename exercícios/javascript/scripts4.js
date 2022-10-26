function gerar() {
    let num = document.querySelector('input#num')
    let tab = document.querySelector('select#seltab')

    if (num.value.length == 0) {
        window.alert('Insira algum valor!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' /* Apagar o resultado depois */
        while (c <= 10) {
            let op = document.createElement ('option')
            op.text = `${n} x ${c} = ${n*c}`
            op.value = `tab${c}` /* importante para o back-end */
            tab.appendChild(op)
            c++
        }
    }
}
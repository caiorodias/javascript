function calcular() {
    var year = new Date()
    var anoAtual = year.getFullYear()
    var anoNas = document.querySelector("input#ano")
    var ano = Number(anoNas.value)
    var res = document.querySelector('div#res')
    var sub = anoAtual - ano            

    res.innerHTML = `<p>Detectamos uma de <strong>${sub} anos</strong> de idade</p>`
}
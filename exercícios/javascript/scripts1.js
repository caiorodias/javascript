function carregar(){  
    const msg = window.document.querySelector('div#msg')
    let img = window.document.getElementById('imagem')
    const data = new Date()
    let hora = data.toLocaleTimeString()
    msg.innerHTML = `<strong>${hora}</strong>`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/Dia/manha.jpg'
        document.body.style.backgroundColor = 'rgb(124 146 203)'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'imagens/Dia/tarde.jpg'
        document.body.style.backgroundColor = '#da9e3186'
    } else {
        //BOA NOITE
        img.src = 'imagens/Dia/noite.jpg'
        document.body.style.backgroundColor = 'rgb(6, 65, 102)'
    }
}

function realTime() {
    setInterval(carregar, 1)
    

}
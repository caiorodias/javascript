function verificar() {
    let nome = document.querySelector('input#nome')
    const ano = new Date()
    let anoAtual = ano.getFullYear()
    let anoNas = document.querySelector("input#ano")
    const res = document.querySelector('div#msg')
    
    if (anoNas.value.length == 0 || Number(anoNas.value) > anoAtual)  {
        window.alert('Verifique os dados e tente novamente')
    } else {
        let sex = document.getElementsByName('sexo')
        const idade = anoAtual - Number(anoNas.value)
        let genero = ''
        let img = document.querySelector('img#imagem')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 16 ) {
                //Criança
                img.src = ('imagens/pessoas/meninook.png')    
            } else if (idade > 16 && idade < 60){
                //Adulto
                img.src = ('imagens/pessoas/adulto.jpg') 
            } else {
                //Idoso
                img.src = ('imagens/pessoas/idoso.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 16 ) {
                //Criança    
                img.src = ('imagens/pessoas/meninaok.png')
            } else if (idade > 16 && idade < 60){
                //Adulto
                img.src = ('imagens/pessoas/adulta.jpg')
            } else {
                //Idoso
                img.src =  ('imagens/pessoas/idosa.jpg')
            }
        }
        res.innerHTML = `<p>Olá ${nome.value}, detectamos <strong>${genero}</strong> com <strong>${idade} anos</strong> de idade.</p>`
        res.appendChild(img)

    /* if (sub >= 0 && sub <= 16 || sex == 0) {
        img.src= 'imagens/pessoas/menino.jpg'
    } else if (sub >= 0 && sub <= 16 || sex == 1) {
        img.src= 'imagens/pessoas/menina.jpg'
    } else if (sub > 16 && sub < 60) {
        img.src= 'imagens/pessoas/adulto.jpg'
    } else {
        img.src= 'imagens/pessoas/idoso.jpg'
    } */
    }

}

/*
Criança:<=16
Adulto:16>x<60
Idoso: >=60
*/
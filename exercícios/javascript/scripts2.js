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
        let img = document.createElement ('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10 ) {
                //Criança
                img.setAttribute('src', 'imagens/pessoas/menino.png')    
            } else if (idade > 10 && idade < 24){
                //Adulto
                img.setAttribute('src', 'imagens/pessoas/ojovem.png') 
            } else if (idade >= 24 && idade < 35) {
                //Adulto
                img.setAttribute('src', 'imagens/pessoas/adulto.png')
            } else if (idade >=35 && idade < 60){
                //Adulto Maduro
                img.setAttribute('src', 'imagens/pessoas/adultom.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/pessoas/idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10 ) {
                //Criança
                img.setAttribute('src', 'imagens/pessoas/menina.png')    
            } else if (idade > 10 && idade < 24){
                //Adulto
                img.setAttribute('src', 'imagens/pessoas/ajovem.png') 
            } else if (idade >= 24 && idade < 35) {
                //Adulto
                img.setAttribute('src', 'imagens/pessoas/adulta.png')
            } else if (idade >=35 && idade < 60){
                //Adulto Maduro
                img.setAttribute('src', 'imagens/pessoas/adultam.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/pessoas/idosa.png')
            }
        }
        res.innerHTML = `<p>Olá ${nome.value}, detectamos <strong>${genero}</strong> com <strong>${idade} anos</strong> de idade.</p>`
        res.appendChild(img)
    }

}
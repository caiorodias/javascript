function fazGet(url) {
    let request = new XMLHttpRequest
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaPersonagem(usuario) {
    personagem = document.createElement('img')
    tdId = document.createElement('p')
    tdNome = document.createElement('p')

    tdId.innerHTML = usuario.id
    tdNome.innerHTML = usuario.name
    
}

function main() {
    let data = fazGet("https://rickandmortyapi.com/api/character")
    let usuarios = JSON.parse(data)
    let apresentacao = document.getElementById('foto')

    usuarios.forEach(element => {
        let personagem = criaPersonagem(element)
        apresentacao.appendChild(personagem)
    })
}

main()
const url = 'https://jsonplaceholder.typicode.com/posts'

const loadingElement = document.querySelector('#loading')
const postsContainer = document.querySelector('#posts-container')

//Pegar id do URL

const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get('id')

// Pegar todos os posts

async function getAllPosts() {
    
    const response = await fetch(url)

    console.log(response)

    const data = await response.json()

    console.log(data)

    loadingElement.classList.add('hide')

    data.map((post) => {

        const div = document.createElement('div')
        const title = document.createElement('h2')
        const body = document.createElement('p')
        const link = document.createElement('a')

        title.innerText = post.title
        body.innerText = post.body
        link.innerText = "Ler"
        link.setAttribute("href", `./post.html?id=${post.id}`) // Colocando na link a url (href e o id do post)

        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)  //Inserindo os elementos na div

        postsContainer.appendChild(div)
    })
}

if (!postId) {
    getAllPosts()
} else {
    console.log(postId)
}
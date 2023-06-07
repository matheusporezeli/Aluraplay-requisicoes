//Aqui nós importamos a conectaAPI e usamos seus dados
//A variável lista é feita pegando o data-set da UL
//Depois criamos a função constroiCard recebendo os elementos da listaVideos que foram importados da conectaAPI
//É feita a função listaVideos pra receber os dados da conectaAPI e realizar um forEach pra que seja criado um card pra cada elemento da listaVideos passando pra constroiCard o título, descrição, url e imagem que estão no arquivo db.json
// Por fim é criado um cardo no padrão feito dentro do innerHTML com os dados recebidos do db.json

import { conectaAPI } from "./conectaAPI.js"

const lista = document.querySelector("[data-lista]")

export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li")
    video.className = "videos__item"
    video.innerHTML =
        `<iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
    `

    return video
}

async function listaVideo() {
    try {
        const listaAPI = await conectaAPI.listaVideos()
        listaAPI.forEach(elemento => lista.appendChild(
            constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
    }
}

listaVideo()
import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault()

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await conectaAPI.buscaVideo(dadosDePesquisa)

    const lista = document.querySelector("[data-lista]")

    //Remove todos os itens da lista
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    //Mostra apenas os resultados pesquisados
    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo.</h2>`
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))
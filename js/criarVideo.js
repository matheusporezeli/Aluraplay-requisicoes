import { conectaAPI } from "./conectaAPI.js";
const formulario = document.querySelector("[data-formulario]");

async function criaVideo(evento) {
    evento.preventDefault()

    const imagem = document.querySelector("[data-imagem]").value
    const url = document.querySelector("[data-url]").value
    const titulo = document.querySelector("[data-titulo]").value
    const descricao = Math.floor(Math.random() * 10).toString()  //Gera um número aleatoria, transforma em inteiro, pega o menor e transforma em string
    try {
        await conectaAPI.criaVideo(titulo, descricao, url, imagem) //Enviar dados na mesma ordem que a função criaVideo do conectaAPI está esperando receber

        window.location.href = "../pages/envio-concluido.html"
    } catch (e) {
        alert(e) //Exibe a mensagem do throw new error do conectaAPI

    }
}

formulario.addEventListener("submit", evento => criaVideo(evento))
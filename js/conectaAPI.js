//A função listaVideos pega os itens do db.json, insere na variável conexao que depois é convertida pra conexaoConvertida como um objeto json acessível e retorna a conexaoConvertida pra sser usada em outro lugar
//Já a criaVideo possibilita pelo metodo POST a inserção de novos videos pelo usuário criando a mesma estrutura dos arquivos já existentes no db.json
//Depois exportamos toda essa lista de vídeos e a possibilidade de cadastrar videos novos

async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos") //solicitação GET dentro do fetch pois declaramos apenas a url
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json" //Expecifica o tipo de arquivo que está sendo enviado ou recebido
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json()

    return conexaoConvertida
}

export const conectaAPI = {
    listaVideos,
    criaVideo,
    buscaVideo
}
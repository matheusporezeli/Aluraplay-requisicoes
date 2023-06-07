# Aluraplay Requisições

Página inicial e formulário de cadastro de vídeos da AluraPlay, uma plataforma de compartilhamento de vídeos

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Aluraplay Requisições**
| :label: Tecnologias | Javascript, NodeJS
| :fire: Desafio     | https://cursos.alura.com.br/course/javascript-criando-requisicoes

### Tela Inicial

![](https://imgur.com/aymxEsh.png#vitrinedev)

### Formulário

![](https://imgur.com/ShNADf2.png#vitrinedev)

## Como executar o projeto:
1º - Faça o download do repositório através do arquivo zip ou do terminal usando o git clone;<br>
2º - Acesse o diretório do projeto pelo seu terminal;<br>
3º - É necessário ter o Noje.js instalado para executar este projeto.<br>
4º - Rode o comando **_*npm init*_** para inicializar o npm dentro do projeto.<br>
5º - Rode o comando **_*npm install -g json-server*_** para instalar as dependências.<br>
6º - Rode o comando **_*npx json-server --watch db.json*_** para iniciar o servidor<br>
7º - Abra o arquivo index.html em seu navegador.

## Detalhes do projeto

Inicialmente no projeto comecei instalando o Node.js e os pacotes npm para iniciar o json-server.<br>
Depois criei requisições GET para consumir a API mockada, manipulei o DOM para criar os elementos HTML a partir do JavaScript.<br>
Um ponto muito importante foi salvar dados na API através do método POST e como estruturar essas requisições  enviadas com o fetch API, diferenciando method, headers e body.<br>
Por fim aprendi como utilizar parâmetros para buscar objetos específicos na API, recolhendo dados escritos em um campo de digitação, detectar eventos de click com addEventListener, verificar se há elementos filhos em um container com firstChild e por fim remover elementos filhos de um container com removeChild.<br>
Para complementar o projeto lideo com erros com try catch detectando ele através de condicionais, como verificar se uma lista está vazia pelo seu tamanho, criei mensagens de erro com throw new Error e imprimi a mensagens de erro para o usuário.<br>

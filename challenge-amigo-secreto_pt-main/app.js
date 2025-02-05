//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
alert ('Bem-vindo ao sorteio do Amigo Secreto!');
let listaAmigos = []
function adicionarAmigo() {
    let inputNome = document.getElementById('amigo');
    let nome = inputNome.value.trim();
    if (nome) {
        listaAmigos.push(nome);
        atualizarLista();
        inputNome.value = "";
    } else {
        alert('Por favor, digite um nome para inserir em sua lista!');
    }
}
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigos.forEach((nome) => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Por favor, adicione pelo menos 2 nomes para realizar o sorteio.');
        return;
    }
    let indiceSorteado = Math.floor(Math.random() *
    listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: <br>${amigoSorteado}</b>`;
    listaAmigos = [];
    atualizarLista();
} 
let numeroSecreto = gerarNumeroAleatorio();

function textoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

textoNaTela('h1', 'Jogo: número secreto');
textoNaTela('p', 'Escolha um número entre 1 e 10');

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function verificarChute() {
  let chute = document.querySelector('input').value;
  console.log(chute == numeroSecreto);
}

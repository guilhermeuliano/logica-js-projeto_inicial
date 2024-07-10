let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function textoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function mensagemInicial() {
  textoNaTela('h1', 'Jogo: número secreto');
  textoNaTela('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial();

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function verificarChute() {
  let chute = document.querySelector('input').value;
  if (chute == numeroSecreto) {
    textoNaTela('h1', 'Você acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você acertou o número secreto em ${tentativas} ${palavraTentativa}`;
    textoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      textoNaTela('p', 'O número secreto é menor');
    } else {
      textoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  mensagemInicial();
  limparCampo();
  tentativas = 1;
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

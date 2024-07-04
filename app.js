alert('Jogo do número secreto!');

let numeroSecreto = 5;
let numeroEscolhido;
let tentativas = 1;

console.log(`Número secreto: ${numeroSecreto}`);

while (numeroEscolhido != numeroSecreto) {
  numeroEscolhido = prompt('Escolha um número de 1 á 10: ');

  if (numeroEscolhido == numeroSecreto) {
    alert(
      `Você acertou! Número Secreto: ${numeroSecreto} em ${tentativas} tentativas`
    );
    break;
  } else {
    if (numeroEscolhido > numeroSecreto) {
      alert(`O número secreto é menor que ${numeroEscolhido}`);
    } else {
      alert(`O número secreto é maior que ${numeroEscolhido}`);
    }
    tentativas++;
  }
}

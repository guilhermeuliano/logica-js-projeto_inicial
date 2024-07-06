alert('Jogo do número secreto!');

let numeroLimite = 50;
let numeroSecreto = parseInt(Math.random() * numeroLimite + 1);
let numeroEscolhido;
let tentativas = 1;

// console.log(`Número secreto: ${numeroSecreto}`);

while (numeroEscolhido != numeroSecreto) {
  numeroEscolhido = prompt(`Escolha um número de 1 á ${numeroLimite}: `);

  if (numeroEscolhido == numeroSecreto) {
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

/* if (tentativas > 1) {
  alert(
    `Você acertou! Número Secreto: ${numeroSecreto} em ${tentativas} tentativas.`
  );
} else {
  alert(
    `Você acertou! Número Secreto: ${numeroSecreto} em ${tentativas} tentativa.`
  );
} */

// Operador ternário
let palavraTentariva = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(
  `Você acertou! Número Secreto: ${numeroSecreto} em ${tentativas} ${palavraTentariva}.`
);

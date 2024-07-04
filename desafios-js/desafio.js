// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;

while (contador <= 10) {
  console.log('Contador: ' + contador);
  contador++;
}

console.log('-----------------');

// Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador2 = 10;

while (contador2 >= 0) {
  console.log('Contador: ' + contador2);
  contador2--;
}

console.log('-----------------');

// Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.
let numeroMaximo = prompt('Digite o número');

while (numeroMaximo >= 0) {
  console.log('Contagem regressiva: ' + numeroMaximo);
  numeroMaximo--;
}

console.log('-----------------');

// Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.
let numeroMaximo2 = prompt('Digite o número');
let contador3 = 0;

while (contador3 <= numeroMaximo2) {
  console.log('Contagem progressiva: ' + contador3);
  contador3++;
}

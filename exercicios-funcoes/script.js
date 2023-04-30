function verificaPalindromo(string) {
  let reverse = string.split('').reverse().join('');
  return reverse === string;
}

function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = Number(indice);
    }
  }
  return indiceMaior;
}

function indiceDoMenor(numeros) {
  let indiceMenor = 0;
  for (let indice in numeros) {
    if (numeros[indiceMenor] > numeros[indice]) {
      indiceMenor =  Number(indice);
    }
  }
  return indiceMenor;
}

function maiorPalavra(palavras) {
  let maior = palavras[0];
  for (let indice in palavras) {
    if (maior.length < palavras[indice].length) {
      maior = palavras[indice];
    }
  }
  return maior;
}

function repeticoesPorNumero(numeros) {
  let num = {};
  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] += 1;
    }
  }
  return num;
}

function maisRepetido(numeros) {
  let num = repeticoesPorNumero(numeros);

  let contRepetido = 0;
  let contNumero = 0;
  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = Number(prop);
    }
  }
  return contNumero;
}

function somatorio(numero) {
  if (numero < 0) return 'ERRO';

  let total = 0;
  for (let index = 1; index <= numero; index += 1) {
    total += index;
  }
  return total;
}

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;
  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  
  return result;
}
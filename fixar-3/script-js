let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function validaCliente(cliente) {
  if (typeof cliente !== 'string') {
    return 'O parâmetro passado deve ser do tipo "string"!';
  } else {
    return true;
  }
}

function clienteIndex(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index;
    }
  }
  return false;
}

function removeCliente(cliente) {
  let validacao = validaCliente(cliente);
  if (validacao !== true) {
    return validacao;
  }

  let index = clienteIndex(cliente);
  if (index === false) {
    return 'Cliente não encontrada(o).'
  }

  clientesTrybeBank.splice(index, 1);
  return 'Cliente excluída(o) com sucesso.';
}

console.log(removeCliente(false));
console.log(removeCliente('Barney'));
console.log(removeCliente('John'));
console.log(clientesTrybeBank);
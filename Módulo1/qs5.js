
// 5.1 rest
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
 console.log(x);
 console.log(y);

 function soma (...valores) {
    var total = 0

    for (const item of valores) {
      total += parseInt(item, 10)
    }

    return total
  }

  console.log(soma(1, 2, 3, 4, 5, 6))

// 5.2 spread
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const outroNome = ({nome, ...rest}) => rest;

const usuario2 = {
    nome: 'Gabriel',
    ...outroNome(usuario),
}

console.log(usuario2)

const outraCidade = ({cidade, ...rest}) => rest

const usuario3 = {
    nome: 'Diego',
    idade: 23,
    endereco:{
        cidade: 'Lontras',
        ...outraCidade(usuario.endereco)
    }
}

console.log(usuario3)

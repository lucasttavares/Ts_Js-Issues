//4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
    };

const {nome, endereco: {cidade, estado}} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);


//4.2
function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
    }
    mostraInfo({ nome: 'Diego', idade: 23 })


function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;

}
    mostraInfo({nome: 'Diego', idade: 23})
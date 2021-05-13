interface infoUser{
  name:string,
  idade:number,
  empresa: string,
  cpf:string
}

let array:infoUser[] = [
  { name:'Diego', idade:23, empresa:'Rocketseat', cpf:'014.598.420-58' },
  { name:'Gabriel', idade:15, empresa:'Rocketseat', cpf:'134.032.743-19' },
  { name:'Lucas', idade:30, empresa:'Facebook', cpf:'721.125.842-52' },
 ]

const idades = array.map((user:infoUser) => user.idade);
console.log(idades);
console.log('')

const filter = array.filter((user:infoUser) => user.empresa === 'Rocketseat' && user.idade > 18);
console.log(filter);
console.log('')

const find = array.find((user:infoUser) => user.empresa === 'Google');
console.log(find);
console.log('')

const calculate = array.map((user:infoUser) => ({...user, idade:user.idade*2})).filter(user => user.idade <= 50);
console.log(calculate);
console.log('')
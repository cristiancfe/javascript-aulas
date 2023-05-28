const input = require('readline-sync');

let nota;
let soma = 0;
//crase deixa usar variavel ${}
for(let i=1 ;i<= 3; i++){
  nota = Number(input.question(`Informe a nota${i} do aluno `));
  soma += nota; 
}
media = (soma/3);
console.log(`a media do aluno é ${soma/3}`);
console.log(' a media com decimais e: ', media.toFixed(2));




// let media = ((nota1 + nota2 + nota3)/3);
// console.clear(); limpa execuções anteriores

// for(let i=0;i<4;i++){
//   console.log(i);
// };
// console.log('****************************************');
// for(let i=10;i>=4;i--){
//   console.log(i);
// };
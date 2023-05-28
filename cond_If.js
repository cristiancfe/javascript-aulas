// const idade =10;
// if(idade>18){
//   console.log('voce é maior de idade');
// }else{
//   console.log('voce é menor de idade');
// }


const input = require('readline-sync');

const numero_sortedo =(Math.floor(Math.random() *3)); 
console.log(numero_sortedo); // mostra o numero sorteado

let num = Number(input.question('qual numero vc escolhe?')); // pega numero digitado pelo usuario
// console.log(num, typeof num);
if(num == numero_sortedo){
  console.log('vc acertou!');
}else{
  console.log('VC ERROU!');
}

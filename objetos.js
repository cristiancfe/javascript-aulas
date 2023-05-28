let pessoa ={
  nome: 'cristian',
  idade:50
}
console.log('dados do objeto', pessoa);
console.log('nome da pessoa',pessoa.nome);
console.log('idade da pessoa',pessoa.idade);

//como adicionar valor no objeto
pessoa.altura = 1.77;
console.log('dados do objeto', pessoa);

// remover dados
delete pessoa.altura;
console.log('dados do objeto', pessoa);
// percorrer chave no array com for 
for(let chave in pessoa){
  console.log(chave);
}

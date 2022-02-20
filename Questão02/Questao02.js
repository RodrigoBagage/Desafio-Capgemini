/*
# Questão 02

Débora se inscreveu em uma rede social para se manter em contato com seus amigos. 
A página de cadastro exigia o preenchimento dos campos de nome e senha, porém a senha precisa ser forte. 
O site considera uma senha forte quando ela satisfaz os seguintes critérios:
Possui no mínimo 6 caracteres.
Contém no mínimo 1 digito.
Contém no mínimo 1 letra em minúsculo.
Contém no mínimo 1 letra em maiúsculo.
Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+
Débora digitou uma string aleatória no campo de senha, porém ela não tem certeza se é uma senha forte.
Para ajudar Débora, construa um algoritmo que informe qual é o número mínimo de caracteres que devem ser 
adicionados para uma string qualquer ser considerada segura.
*/

let especiais = /[!@#$%^&*()-+]/;
let maiusculas = /[A-Z]/;
let minusculas = /[a-z]/;
let numeros = /[0-9]/;

function testaSenha(senha) {
  
  let total = 0;
  
  if (especiais.test(senha)) ++total;
  if (maiusculas.test(senha)) ++total;
  if (minusculas.test(senha)) ++total;
  if (numeros.test(senha)) ++total;

  if(senha.length >= 6 && total == 4){
    console.log('Senha OK');
  } else if(senha.length < 6 && total == 4){
    console.log(6 - senha.length);
  } else if (senha.length >= 6 && total < 4){
    console.log((4 - total));
  } else if (senha.length < 6 && total < 4){
    console.log(Math.max(6 - senha.length, 4 - total));
  }
  
}

testaSenha(senha = 'Ya3') // Digite a senha para verificar a força. 

/*
# Questão 01
Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o caractere * e espaços. 
A base e altura da escada devem ser iguais ao valor de n. A última linha não deve conter nenhum espaço.
*/

escada(6) // Inserir número quantidade degraus escada  

function escada(altura) {
    let base
    for (let i = 1; i <= altura; i++){
      base = ' '.repeat(altura - i) + '*'.repeat(i)
      console.log(base)
    }
  }
  
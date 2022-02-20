/*
# Questão 03
Duas palavras podem ser consideradas anagramas de si mesmas se as letras de uma palavra podem ser 
realocadas para formar a outra palavra. Dada uma string qualquer, desenvolva um algoritmo que encontre
o número de pares de substrings que são anagramas.
*/

/*
# Questão 03
Duas palavras podem ser consideradas anagramas de si mesmas se as letras de uma palavra podem ser 
realocadas para formar a outra palavra. Dada uma string qualquer, desenvolva um algoritmo que encontre
o número de pares de substrings que são anagramas.
*/

let palavra = 'ovo'; // Inserir a palavra para análise de anagramas.

function buscarAnagramas (palavra){
    let analise = {};
    let quantidade = 0;

    for (let x = 0; x < palavra.length; x++){
        for(let y = x; y < palavra.length; y++){
            let arrayPalavra = (((palavra.substring(x, y +1).split('')).sort())).join('');
            analise[arrayPalavra] = 1 + (analise[arrayPalavra] || 0);
            
            if(analise[arrayPalavra] > 1) {
                quantidade = quantidade + (analise[arrayPalavra])-1;
            }
        }
    } 
    
    console.log(`Qntd de Anagramas: ${quantidade}`);

    Object.keys(analise).forEach(function(item) { 
        if (analise[item] > 1) {
            console.log(`Anagrama ${item}: ${analise[item]} `);
        }
    })

    return analise;
}

buscarAnagramas(palavra);

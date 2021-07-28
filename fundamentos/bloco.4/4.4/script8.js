function verificaFimPalavra (param1,param2){
    let resposta;
    for (index = 0 ; index < param2.length; index +=1){
        if (param1[(param1.length-1)-index] != param2[(param2.length-1)-index]){
         resposta = false;
        }  else {
            resposta = true;
        }  
    }
    return resposta;
}

console.log(verificaFimPalavra('trybe','be'));
console.log(verificaFimPalavra('joaofernando','fernan'));

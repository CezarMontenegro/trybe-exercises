let contNumero = 0;
let contNumero2 = 0;
let indexNumber = 0;

function maisRepetido(numeros){
    for(index=0;index<numeros.length;index+=1){
        let verificaNumero = numeros[index];
        for(index2=0;index2<numeros.length;index2+=1){
            if(verificaNumero === numeros[index2]){
                contNumero +=1;
            }
        }
        if(contNumero > contNumero2){
                contNumero2 = contNumero;
                indexNumber = index;
            }
            contNumero = 0;
        
    }
    return numeros[indexNumber];
}

console.log(maisRepetido([4, 4, 5, 2, 2, 5, 5]));
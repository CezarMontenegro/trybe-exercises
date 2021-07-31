let espacos = ' ';
let asterisc ='*';
let line = '';
let line2 = '';
let n = 11;
let quantidadeLinhas = ((n+1)/2);
let =quantidadeEspacos = quantidadeLinhas-1;

console.log("quantidade de linhas "+ quantidadeLinhas);

for ( i = 1; i <= quantidadeLinhas; i += 1){
    for ( i2 = 1; i2 <= quantidadeEspacos; i2 += 1){
        line = line + espacos
    }
    line2 = line2 + asterisc;
    console.log(line+line2);
    line = '';
    line2 = line2 + asterisc;
    quantidadeEspacos = quantidadeEspacos - 1;
}





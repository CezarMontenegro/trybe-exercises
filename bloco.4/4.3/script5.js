let espacos = '0';
let espacos2 = '0';
let asterisc ='*';
let line = '';
let line2 = '';
let line3 = '';
let n = 11;
let quantidadeLinhas = ((n+1)/2);
let quantidadeEspacos = quantidadeLinhas-1;

console.log("quantidade de linhas "+ quantidadeLinhas);

for ( i = 1; i < quantidadeLinhas; i += 1){
    for ( i2 = 1; i2 <= quantidadeEspacos; i2 += 1){
        line = line + espacos
    }
    line2 =  asterisc+line2;
    console.log(line+line2);
    line = '';
    line2 = '';
    line2 = line2 + espacos2 + asterisc;
    espacos2= espacos2+espacos+espacos;
    quantidadeEspacos = quantidadeEspacos - 1;
}
for (i3 = 1; i3 <= n; i3 +=1){
    line3 = line3+asterisc;
}



let asterisco = '*';
let linha = '';
let espaço = '0';
let linha2 = '';
let n = 10;
let m = n;

for( i = 1; i <= n; i +=1){
    for (i2 = 1; i2 < m; i2 += 1){
        linha = linha + espaço;
    }
    linha2 = linha2 + asterisco;
    console.log(linha + linha2);
    linha = '';
    m=m-1;
}



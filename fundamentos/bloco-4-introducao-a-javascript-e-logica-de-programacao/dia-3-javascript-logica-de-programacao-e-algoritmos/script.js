let asterisco = '*';
let linha = '';
let n = 5;

if (n > 1){
  for (let index = 0; index < n; index += 1){
    for (let index2 = 0; index2 < n; index2 +=1){
      linha = linha + asterisco;
    }
    console.log(linha);
    linha = '';
  }
} else {
  console.log('invalido')
}
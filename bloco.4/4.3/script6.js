let n = 27;
let index;

for (index = 2; index <= n; index += 1){
    if (n%index === 0 && index != n){
        console.log("Não é um número primo");
        break;
    }
    if (n%index === 0 && index === n){
        console.log("É um número primo");
    }

}

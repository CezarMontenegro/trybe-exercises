var romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000 }
var num = "M" 
var soma = romanos[num[num.length-1]]
for (let i = num.length-1; i >= 0 ; i=i-1) {
        if (romanos[num[i-1]] >= romanos[num[i]]) {
            soma += romanos[num[i-1]]
        }
        else if (romanos[num[i-1]] < romanos[num[i]]) {
            soma = soma - romanos[num[i-1]] 
       }
     }
      console.log(soma);
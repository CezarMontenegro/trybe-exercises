function somatory(number){
    let sum = 0
    for(index = 0; index <= number; index +=1){
        sum = sum + index;
    }
    return sum;
}

console.log(somatory(6));
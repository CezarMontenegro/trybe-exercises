let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    maxNumber = 0;
for (let i = 0; i < numbers.length; i+=1){
    if (numbers[i] > maxNumber){
        maxNumber = numbers[i];
    }
}

console.log(maxNumber);
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];



function arrayOfNumbers(array){
let teste= 0;
let teste2=0;
let newarray = [];
for (i2=0;i2<array.length;i2+=1){
    teste = array[i2];
    for(i3=0;i3<teste.length;i3+=1){
        teste2 = teste[i3]
        if(teste2%2 === 0){
            newarray.push(teste2);
        }
    }
}
return newarray;
}
console.log(arrayOfNumbers(vector));


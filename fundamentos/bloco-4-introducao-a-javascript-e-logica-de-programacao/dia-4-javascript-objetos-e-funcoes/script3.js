function returnGreatValue(ary){
    let greatValue = 0;
    for (index = 0; index < ary.length; index +=1){
        if (ary[index] > ary[greatValue]){
            greatValue = index;
        } else{
            greatValue = greatValue;
        }
    }
    return greatValue;
}

console.log(returnGreatValue([2,3,6,7,10,1]));
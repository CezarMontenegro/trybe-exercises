function returnSmallestValue(ary){
    let smallestValue = 0;
    for (index = 0; index < ary.length; index +=1){
        if (ary[index] < ary[smallestValue]){
            smallestValue = index;
        } else {
            smallestValue = smallestValue;
        }
    }
    return smallestValue;
}

console.log(returnSmallestValue([2,4,6,7,10,0,-3]));
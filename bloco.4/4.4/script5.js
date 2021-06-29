function returnLonggest(ary){
    let longgest = 0;
    for(index = 0; index < ary.length; index+=1){
        if (ary[index].length > ary[longgest].length){
            longgest = index;  
        } else {
            longgest = longgest;
        }  
    }
    return ary[longgest];
}

console.log(returnLonggest(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
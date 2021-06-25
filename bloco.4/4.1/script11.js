let sbruto = 3000;

if (sbruto<0) {
    console.log("erro");
}
else if (sbruto<=1556.94){
    alinss = sbruto*0.08;
}
else if (sbruto<=2594.92){
    alinss = sbruto*0.09;
}
else if (sbruto<=5189.82){
    alinss = sbruto*0.11;
}
else{
    alinss = 570.88;
}

sbase = sbruto - alinss;


if (sbase<=1903.98){
    alir = 0;
}
else if (sbase<=2826.65){
    alir = (sbase*0.075) - 142.8;
}
else if (sbase<=3751.05){
    alir = (sbase*0.15) - 354.8;
}
else if (sbase<=4664.68){
    alir = (sbase*0.225) - 636.13;
}
else {
    alir = (sbase*0.275) - 869.36;
}
    

sliquido = sbase - alir;
console.log(sliquido);

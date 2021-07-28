let a = "TORRE";

if (a.toLowerCase()=="torre") {
    console.log("Move na Horizontal e vertical");
}
else if (a.toLowerCase()=="bispo"){
    console.log("Move na diagonal");
}
else if (a.toLowerCase()=="cavalo"){
    console.log("Move em L");
}
else if (a.toLowerCase()=="rei"){
    console.log("Move uma casa em qualquer direção");
}
else if (a.toLowerCase()=="rainha"){
    console.log("Move em qualquer direção");
}
else if (a.toLowerCase()=="peão"){
    console.log("Move um casa para frente");
}
else {
    console.log("Erro")
}
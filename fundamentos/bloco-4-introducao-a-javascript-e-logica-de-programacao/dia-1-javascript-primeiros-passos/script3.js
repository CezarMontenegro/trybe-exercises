let a = 0;
let b = 1;
let c = 0;

if (a>b && a>c) {
    console.log("A é o maior número");
}
else if (a>b && a==c) {
    console.log("A e C são os maiores números");
}
else if (a>c && a==b) {
    console.log("A e B são os maiores números");
}
else if (b>a && b>c) {
    console.log("B é o maior número");
}
else if (b>a && b==c) {
    console.log("B e C são os maiores números");
}
else if (c>a && c>b) {
    console.log("C é o maior número");
}
else {
    console.log("Todos iguais");
}
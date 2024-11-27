var tri1 = parseFloat(prompt("Informe o primeiro valor"))
var tri2 = parseFloat(prompt("Informe o segundo valor"))
var tri3 = parseFloat(prompt("Informe o terceiro valor"))

if(tri1 == tri2 && tri2 == tri3 && tri1 == tri3){
    alert("É um triangulo equilatero")
}else if (tri1 != tri2 && tri2 != tri3 && tri1 != tri3){
    alert("É um triangulo escaleno")
}else{
    alert("é um triangulo isoceles")
}
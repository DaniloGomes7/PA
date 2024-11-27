var idade = parseInt(prompt("Digite sua idade"))
var condEspecial = prompt("Voce tem condicao especial")
var CNH = prompt("Voce possui cnh?")

if(idade>=18 && CNH == "sim"){
    alert("voce pode dirigir")
}else if(idade >= 16 && condEspecial == "sim"){
    alert("voce pode dirigir")
}else{
    alert("Voce nao tem permissao para dirigir")
}

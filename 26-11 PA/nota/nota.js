var n1 = parseFloat(prompt("Informe o primeiro valor de sua nota"))
var n2 = parseFloat(prompt("Informe o segundo valor de sua nota"))
var media = (n1+n2)/2

if(media < 4){
    alert("Aluno Reprovado")
}else if(media >= 4 && media <= 7){
    alert("Aluno de recuperação")
}else if(media > 7 && media <=10){
    alert("Aluno aprovado")
}else if(media > 10){
    alert("Aluno aprovado com Bonus")}
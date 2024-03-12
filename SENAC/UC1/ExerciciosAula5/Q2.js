let grades = [5, 5, 5, 5]
let average = 0

for(i = 0; i < grades.length; i++){
    average += grades[i]
}
average = average/grades.length

if(average >= 7){
    console.log(`O aluno foi aprovado com média ${average}`)
} else if(average < 5){
    console.log(`O aluno foi reprovado com média ${average}`)
} else{
    console.log(`O aluno deve prestar recuperação, com média ${average}`)
}

let side1 = 9
let side2 = 9
let side3 = 9

if(side1 === side2 && side1 === side3){
    console.log("Esse triângulo é equilátero")
} else if(side1 === side2 || side1 === side3){
    console.log("Esse triângulo é isóceles")
} else {
    console.log("Esse triângulo é escaleno")
}


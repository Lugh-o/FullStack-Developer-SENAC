let sides = [20, 15, 5]

sides.sort(function(a, b){return a - b})

if(sides[0] + sides[1] > sides[2]){
    console.log(`Esses valores podem ser lados de um triângulo`)
} else{
    console.log(`Esses valores não podem ser lados de um triângulo`)
}
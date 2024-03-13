let speed = 95

if(speed > 80){
    console.log(`Você foi multado em R$${((speed-80)*5).toFixed(2)}`);
}
console.log("Você não foi multado!")
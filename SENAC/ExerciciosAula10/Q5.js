let stringInput = "       qw  Olá Mundo"

stringInput = stringInput.replace(/ /g,'').split("")

for(let i = 0; i < stringInput.length; i++){
    console.log(stringInput[i])
}
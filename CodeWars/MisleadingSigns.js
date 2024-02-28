function gaslighting(shirtWord,yourWord,friendsLetters) {
    shirtArray = shirtWord.split("")
    yourArray = yourWord.split("")
    for(i = 0; i < shirtArray.length; i++){
        for(j = 0; j < friendsLetters.length; j++){
            if((shirtArray[i] !== yourArray[i]) && ((friendsLetters[j] === shirtArray[i]) || (friendsLetters[j] === yourArray[i]))){
                return true
            }
        }
    }
    return false
}
console.log(gaslighting("snack", "snake", ["c"]))                //true
console.log(gaslighting("snack", "snack", ["s","n","a","c","k"]))//false
console.log(gaslighting("snake", "snack", ["c"]))                //true
console.log(gaslighting("smile", "smirk", ["s","m","i"]))        //false
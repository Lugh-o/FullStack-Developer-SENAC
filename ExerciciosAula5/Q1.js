let year = 1005
let ifLeap = "não é"

if ((year%4 == 0 && year%100 != 0) || year%400 == 0){
    ifLeap = "é"
}
console.log(`O ano ${year} ${ifLeap} bissexto`)
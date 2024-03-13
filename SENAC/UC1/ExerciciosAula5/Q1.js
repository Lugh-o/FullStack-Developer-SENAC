let year = 1005
let ifLeap = "não "

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    ifLeap = ""
}
console.log(`O ano ${year} ${ifLeap}é bissexto`)
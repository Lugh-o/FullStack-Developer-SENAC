let plus = document.getElementById("iplus");
let minus = document.getElementById("iminus");
let num = document.getElementById("inum");

plus.onclick = function() {
    if (num.innerText < 9) {
        num.innerText = parseInt(num.innerText) + 1;
    }
}

minus.onclick = function() {
    if (num.innerText > 1) {
        num.innerText = parseInt(num.innerText) - 1;
    }
}
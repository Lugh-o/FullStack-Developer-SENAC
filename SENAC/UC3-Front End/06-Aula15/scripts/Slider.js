let slider = document.getElementById("islide");
let output = document.getElementById("ioutput");
output.value = slider.value + "%";

slider.oninput = function() {
  output.value = this.value + "%";
}

output.oninput = function() {
  let number = this.value.replace(/\D/g, "");

  if(number > 100) {
    number = 100;
  } else if (number < 0 || (number == 0 && number.length > 1)) {
    number = 0;
  } else if(number === "") {
    number = 30;
  } 

  output.value = number + "%";
  slider.value = number;  
}
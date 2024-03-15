function mobileMenu() {
    let x = document.getElementById("imenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function resized() {
    let x = document.getElementById("imenu");
    if(window.innerWidth >= 768){
      x.style.display = 'block'
    } else {
      x.style.display = 'none'
    }
  }
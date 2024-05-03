
let email = document.getElementById('iemail');
function alertValue() {
    alert(email.value)
}

let nav = document.querySelector('.navbar');
let darkModeBtn = document.querySelectorAll('.btn');
let sections = document.querySelectorAll('section');
let footer = document.querySelector('#ifooter');
function switchMode() {
    if(nav.classList.contains('navbar-light')){
        nav.classList.remove('navbar-light', 'bg-light');
        nav.classList.add('bg-dark', 'navbar-dark');
        darkModeBtn[0].innerHTML = 'Modo Claro';
        for(let i = 0; i < darkModeBtn.length; i++){
            darkModeBtn[i].classList.replace('btn-dark', 'btn-light');
        }

        for(let i = 0; i < sections.length; i++){
            sections[i].style.backgroundColor = '#3e3e3e';
            sections[i].style.color = '#ffffff';
        }

        document.body.style.backgroundColor = '#767676';

        footer.style.backgroundColor = 'black';
        footer.classList.replace('text-black', 'text-white');
        return 0; 
    }
    nav.classList.remove('navbar-dark', 'bg-dark');
    nav.classList.add('navbar-light', 'bg-light');
    darkModeBtn[0].innerHTML = 'Modo Escuro';
    for(let i = 0; i < darkModeBtn.length; i++){
        darkModeBtn[i].classList.replace('btn-light', 'btn-dark');
    }

    for(let i = 0; i < sections.length; i++){
        sections[i].style.backgroundColor = '#ffffff';
        sections[i].style.color = '#3e3e3e';
    }
    
    document.body.style.backgroundColor = '#add8e6';

    footer.style.backgroundColor = 'white';
    footer.classList.replace('text-white', 'text-black');
}
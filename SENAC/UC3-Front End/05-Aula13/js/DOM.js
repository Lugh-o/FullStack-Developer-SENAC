
let email = document.getElementById('iemail');
function alertValue() {
    alert(email.value)
}

let nav = document.getElementsByClassName('navbar')[0];
let darkModeBtn = document.getElementsByClassName('btn');
let form = document.getElementById('iform');
function switchMode() {
    if(nav.classList.contains('navbar-light')){
        nav.classList.remove('navbar-light', 'bg-light');
        nav.classList.add('bg-dark', 'navbar-dark');
        darkModeBtn[0].innerHTML = 'Modo Claro';
        for(let i = 0; i < darkModeBtn.length; i++){
            darkModeBtn[i].classList.replace('btn-dark', 'btn-light');
        }
        form.style.backgroundColor = '#3e3e3e';
        form.style.color = '#ffffff';
        document.body.style.backgroundColor = 'lightgray';
        return 0; 
    }
    nav.classList.remove('navbar-dark', 'bg-dark');
    nav.classList.add('navbar-light', 'bg-light');
    darkModeBtn[0].innerHTML = 'Modo Escuro';
    for(let i = 0; i < darkModeBtn.length; i++){
        darkModeBtn[i].classList.replace('btn-light', 'btn-dark');
    }
    form.style.backgroundColor = '#ffffff'
    form.style.color = '#000000';
    document.body.style.backgroundColor = '#add8e6';
}
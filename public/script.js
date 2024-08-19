const body = document.body;//Obtengo los id
const spinner = document.getElementById("spinner");
const img = document.getElementById("spinner-rotando");
const rotando = document.getElementById("imgrotando")
let angulo = 0;

spinner.addEventListener('click', function(){//Al hacer click en el boton SPINNER!, se producirán los siguientes eventos
    body.style.background = '#6EACDA';
    img.style.display = 'flex';
    rotando.classList.add('spin')
    spinner.style.display = 'none';
})

setInterval(function() {//Estoy setteando para que rote en 90 grados
    angulo += 90;
    rotando.style.transform = `rotate(${angulo}deg)`;
}, 1000);
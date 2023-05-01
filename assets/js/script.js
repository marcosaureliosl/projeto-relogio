const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const sugundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let datetoday = new Date ();
    let  hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let s = datetoday.getSeconds();

    if(hr < 10) hr = '0' + hr;

    if(mim < 10) mim = '0' + min;

    if(s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    sugundos.textContent=s;

})
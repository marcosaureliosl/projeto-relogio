const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const sugundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date ();
    let  hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if(hr < 10) hr = '0' + hr;

    if(mim < 10) mim = '0' + min;

    if(s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    sugundos.textContent=s;

})
const FECHAENTRADA = document.getElementById('fechaEntrada');
const FECHASALIDA = document.getElementById('fechaSalida');

FECHAENTRADA.addEventListener('change',(e)=>{
    FECHASALIDA.min = e.target.value
})
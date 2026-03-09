// Obtener los elementos del DOM donde se mostrará la hora
var v_horas = document.getElementById('pHoras');
var v_minutos = document.getElementById('pMinutos');
var v_segundos = document.getElementById('pSegundos');
var v_apm = document.getElementById('pAPm');

function actualizarHora() {
    //Extraer los datos 
    var v_fecha = new Date();
    v_horas = v_fecha.getHours();
    v_minutos = v_fecha.getMinutes();
    v_segundos = v_fecha.getSeconds();
    
    //Verifica los numeros de un digito
    v_horas = agregarCero(v_horas);
    v_minutos = agregarCero(v_minutos);
    v_segundos = agregarCero(v_segundos);
    let HoraActual = v_horas + ":" + v_minutos + ":" + v_segundos;
    
    //Cargar el elemento con los datos actuales   
    pHoras.textContent = v_horas;
    pMinutos.textContent = v_minutos;
    pSegundos.textContent = v_segundos;
    //ap = (v_horas < 12) ? "<span>AM</span>" : "<span>PM</span>"; Usaré las 24hs

     //Establecer saludo, segun la hora
     if (v_horas >=6 && v_minutos >= 0 && v_horas < 12) {
        pSaludo.textContent = "Buen día";
      }
      if (v_horas >= 12 && v_minutos >= 0 && v_horas < 19) {
        pSaludo.textContent = "Buenas tardes";
      }
      if (v_horas >= 19 || v_horas <= 5 && v_minutos >= 0) {
        pSaludo.textContent = "Buenas noches";
      }
  
}
function agregarCero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

setInterval(actualizarHora, 1000);
var intervalo = setInterval(actualizarHora, 1000);
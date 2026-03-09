
    // Obtener los elementos del DOM donde se mostrará la hora y la fecha
    var v_horas = document.getElementById('pHoras');
    var v_minutos = document.getElementById('pMinutos');
    var v_segundos = document.getElementById('pSegundos');    
    var v_apm = document.getElementById('pAPm');

    var v_diaSem = document.getElementById('pFecha');
    var v_dia = document.getElementById('pDia');
    var v_mes = document.getElementById('pMes');
    var v_year = document.getElementById('pYear');
    

// Definir los arrays de texto para los días de la semana y los meses
var v_semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
var v_meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

function actualizarHora() {
    

//Extraer los datos 
    var v_fecha = new Date();
    var segundos = v_fecha.getSeconds();
    var minutos = v_fecha.getMinutes();
    var horas = v_fecha.getHours();
    

//Asignar un elemento al objeto html     
    var Horas = document.getElementById("pHoras");
    var Minutos = document.getElementById("pMinutos");
    var Segundos = document.getElementById("pSegundos");
    ap = (horas < 12) ? "<span>AM</span>" : "<span>PM</span>";

    var pSaludo = document.getElementById("contSaludo");

//Cargar el elemento con los datos actuales   
    pHoras.textContent = horas;
    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;

//Establecer saludo, segun la hora
    if (horas >= 8 && minutos >= 1 && horas < 12) {
        pSaludo.textContent = "Buen día";
    }
    if (horas >= 12 && minutos >= 1 && horas < 19) {
        pSaludo.textContent = "Buenas tardes";
    }
    if (horas >= 19 && minutos >= 1) {
        pSaludo.textContent = "Buenas noches";
    }

 //Agregar un 0 delante de los números menores a 10
 if (horas < 10) horas = 0 + horas;
 if (minutos < 10) minutos = "0" + minutos;
 if (segundos < 10) segundos = "0" + segundos;
 let HoraActual = horas + ":" + minutos + ":" + segundos;
 //$("#HoraActual").text(horas + ":" + minutos + ":" + segundos);
 //alert(horas + ":" + minutos + ":" + segundos);

 horas = checkTime(horas);
 minutos = checkTime(minutos);
 segundos = checkTime(segundos);
alert(HoraActual);
 document.getElementById("contClock").innerHTML = HoraActual;
 //horas + "fre:" + minutos + ":" + segundos + " " + ap;
}
function actualizarFecha(){
    var fecha = new Date();
    var DiaSemana = semana[fecha.getDay()];    
    var dia = fecha.getDate();
    var mes = meses[fecha.getMonth()];
    var year = fecha.getFullYear();

    DiaSemana.textContent=semana;
    var DiaSemana = document.getElementById('pDia')

    
    pDiaSemana.textContent = semana;
    pDia.textContent = dia;
    pMes.textContent = mes;
    pYear.textContent = year;
    //Agregar un 0 delante de los números menores a 10
    //if (v_horas < 10) v_horas = "0"+ v_horas;
    //if (v_minutos < 10) v_minutos = "0" + v_minutos;
    //if (v_segundos < 10) v_segundos = "0" + v_segundos;
}
alert("reloj-script")
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;

}
setInterval(actualizarHora, 1000);
var intervalo = setInterval(actualizarHora, 1000);
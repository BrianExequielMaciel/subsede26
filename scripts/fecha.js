
// Obtener los elementos del DOM donde se mostrará la fecha
var v_diaSem = document.getElementById('pFecha');
var v_dia = document.getElementById('pDia');
var v_mes = document.getElementById('pMes');
var v_year = document.getElementById('pYear');

// Definir los arrays de texto para los días de la semana y los meses
var v_semana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
var v_meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

actualizarFecha();

function actualizarFecha(){
    var vb_fecha = new Date();
    var vb_diaSem = v_semana[vb_fecha.getDay()];    
    var vb_dia = vb_fecha.getDate();
    var vb_mes = v_meses[vb_fecha.getMonth()];
    var vb_year = vb_fecha.getFullYear();
   
    //*Cargar el elemento con los datos actuales  
    v_diaSem.textContent = vb_diaSem;
    v_dia.textContent = vb_dia;
    v_mes.textContent = vb_mes;
    v_year.textContent = vb_year;
}
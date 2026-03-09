

function cargarHora() {
    fecha = new Date();
    horas = fecha.getHours();
    minutos = fecha.getMinutes();
    segundos = fecha.getSeconds();
    if (horas < 10) hours = 0 + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;
    let HoraActual = ", " + horas + ":" + minutos + ":" + segundos
    //$("#HoraActual").text(hours+ ":" +minutes+ ":" +seconds);
    //setTimeout("showTime()", 1000);
    //console.log(HoraActual +"\nds   " +hours+ ":" +minutes+ ":" +segundos);

    document.getElementById("pActual").textContent = HoraActual;
}


//contador reaccion 1
function visible() {
  //Muestra u oculta el div de comentarios
  var estado = document.getElementById("oculto").style.display;
  if (estado == "none") {
    document.getElementById("oculto").style.display = "inline";
  } else {
    document.getElementById("oculto").style.display = "none";
  }
}

function visibleGenerico(selector) {
  console.log(selector);
  //Muestra u oculta el div de comentarios
  var estado = document.getElementById(selector).style.display;
  if (estado == "none") {
    document.getElementById(selector).style.display = "inline";
  } else {
    document.getElementById(selector).style.display = "none";
  }
}

function botoneraMovil() {
  //Muestra u oculta el div de comentarios
  var estado = document.getElementById("divBotoneraMovil").style.display;
  if (estado == "none") {
    document.getElementById("divBotoneraMovil").style.display = "flex";
  } else {
    document.getElementById("divBotoneraMovil").style.display = "none";
  }
}
function cargarHora() {
  fecha = new Date();
  horas = fecha.getHours();
  minutos = fecha.getMinutes();
  segundos = fecha.getSeconds();
  if (horas < 10) hours = 0 + horas;
  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;
  let HoraActual = ", " + horas + ":" + minutos + ":" + segundos;
  //$("#HoraActual").text(hours+ ":" +minutes+ ":" +seconds);
  //setTimeout("showTime()", 1000);
  //console.log(HoraActual +"\nds   " +hours+ ":" +minutes+ ":" +segundos);

  document.getElementById("pActual").textContent = HoraActual;
}

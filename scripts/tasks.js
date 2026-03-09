let paginaActual = 0;
const POR_PAGINA = 5;

// ─── Guardar comentario ────────────────────────────────────────────────────
function guardarTarea() {
  event.preventDefault();

  const nombre = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("msj").value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor completá todos los campos.");
    return;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    alert("Por favor ingresá un correo electrónico válido.");
    return;
  }

  const data = localStorage.getItem("comentarios");
  const comentarios = data ? JSON.parse(data) : [];

  const yaExiste = comentarios.find((c) => c.email === email);
  if (yaExiste) {
    alert("Ya existe un comentario registrado con ese correo.");
    return;
  }

  comentarios.push({
    nombre,
    email,
    mensaje,
    fecha: new Date().toLocaleString("es-AR"),
  });
  localStorage.setItem("comentarios", JSON.stringify(comentarios));

  alert("¡Gracias " + nombre + "! Tu comentario fue guardado.");
  document.getElementById("formTask").reset();

  // Ir a la última página para ver el comentario recién agregado
  paginaActual = Math.floor((comentarios.length - 1) / POR_PAGINA);
  mostrarComentarios();
}

// ─── Mostrar comentarios ───────────────────────────────────────────────────
function mostrarComentarios() {
  const contenedor = document.getElementById("lista-comentarios");
  const controles = document.getElementById("controles-paginacion");
  if (!contenedor) return;

  const data = localStorage.getItem("comentarios");
  const comentarios = data ? JSON.parse(data) : [];

  if (comentarios.length === 0) {
    contenedor.innerHTML = "<p>Todavía no hay comentarios.</p>";
    controles.innerHTML = "";
    return;
  }

  const totalPaginas = Math.ceil(comentarios.length / POR_PAGINA);

  // Asegurar que la página actual sea válida
  if (paginaActual >= totalPaginas) paginaActual = totalPaginas - 1;
  if (paginaActual < 0) paginaActual = 0;

  const inicio = paginaActual * POR_PAGINA;
  const pagina = comentarios.slice(inicio, inicio + POR_PAGINA);

  contenedor.innerHTML = pagina
    .map(
      (c) => `
    <div style="border:1px solid #e5e7eb; border-radius:8px; padding:12px; margin-bottom:12px;">
      <strong style="color: #6495ed">${c.nombre}</strong>
      <span style="color:#6b7280; font-size:0.85em; margin-left:8px;">${c.fecha}</span>
      <p style="margin:6px 0;">${c.mensaje}</p>
      <span style="color:#6b7280; font-size:0.85em;">${c.email}</span>
    </div>
  `,
    )
    .join("");

  // Controles anterior / siguiente
  controles.innerHTML = `
    <div style="display:flex; align-items:center; gap:12px; margin-top:12px;">
      <button onclick="cambiarPagina(-1)" ${paginaActual === 0 ? "disabled" : ""}
        style="padding:6px 14px; border-radius:6px; border:1px solid #d1d5db;margin:3px;
        cursor:${paginaActual === 0 ? "not-allowed" : "pointer"}; 
        background:${paginaActual === 0 ? "#f3f4f6" : "white"};">
        ← Anterior
      </button>
      <span style="color:#6b7280; font-size:0.9em;">
        Página ${paginaActual + 1} de ${totalPaginas}
      </span>
      <button onclick="cambiarPagina(1)" ${paginaActual === totalPaginas - 1 ? "disabled" : ""}
        style="padding:6px 14px; border-radius:6px; border:1px solid #d1d5db; margin:3px;
        cursor:${paginaActual === totalPaginas - 1 ? "not-allowed" : "pointer"};
        background:${paginaActual === totalPaginas - 1 ? "#f3f4f6" : "white"};">
        Siguiente →
      </button>
    </div>
  `;
}

function cambiarPagina(direccion) {
  paginaActual += direccion;
  mostrarComentarios();
}

document.addEventListener("DOMContentLoaded", mostrarComentarios);

// Mostrar al cargar la página
document.addEventListener("DOMContentLoaded", mostrarComentarios);

//var mostrarHora = function () {
fecha = new Date();
horas = fecha.getHours();
minutos = fecha.getMinutes();
segundos = fecha.getSeconds();
if (horas < 10) horas = 0 + horas;
if (minutos < 10) minutos = "0" + minutos;
if (segundos < 10) segundos = "0" + segundos;
let HoraActual = ", " + horas + ":" + minutos + ":" + segundos;
//$("#HoraActual").text(horas+ ":" +minutos+ ":" +segundos);
//console.log(HoraActual +"\nds   " +horas+ ":" +minutos+ ":" +segundos);

// Ejecutar la funcion actualizarHora una vez para mostrar la hora y la fecha actual

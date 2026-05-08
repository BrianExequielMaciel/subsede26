// ─── Protección de vista ───────────────────────────────────────────────────
(function () {
  const sesion = sessionStorage.getItem("sesionActiva");

  if (!sesion) {
    // No hay sesión → redirigir al login correspondiente
    window.location.href = "./formulario.html?tipo=usuarioComun"; // ← en la vista de privilegiado cambiás por usuarioPrivilegiado
    return;
  }

  const usuario = JSON.parse(sesion);
  var bienvenida = document.getElementById("bienvenida");

  // Verificar que el tipo coincida con la vista
  // Evita que un usuarioComun acceda a la vista de privilegiado y viceversa
  if ((usuario.tipo !== "alumno") & "docente") {
    // ← en la vista de privilegiado cambiás por usuarioPrivilegiado
    // window.location.href = "./login.html?tipo=" + usuario.tipo;
    return;
  } else if (usuario.tipo === "alumno") {
    // Sesión válida → mostrar bienvenida si tenés un elemento para eso
    let bienvenida = document.getElementById("bienvenida");
    if (bienvenida) {
      bienvenida.textContent = usuario.username;
    }
    bienvenida.textContent = usuario.username;
  } else if (usuario.tipo === "docente") {
    let bienvenida = document.getElementById("bienvenida");
    if (bienvenida) {
      bienvenida.textContent = usuario.username;
    }
  }

  // Sesión válida → mostrar bienvenida si tenés un elemento para eso
  // const bienvenida = document.getElementById("bienvenida");
})();

function cerrarSesion() {
  sessionStorage.removeItem("sesionActiva");
  window.location.href = "../instituto.html"; // ← según la vista
}

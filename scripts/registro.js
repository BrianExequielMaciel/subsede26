// ─── 1. Leer el ?tipo= de la URL ───────────────────────────────────────────
const params = new URLSearchParams(window.location.search);
const tipo = params.get("tipo") || "vacio"; // por defecto usuarioComun

//  ─── 2. Las "tablas" en localStorage ───────────────────────────────────────
// usuarios_usuarioComun     → array de usuarios comunes
// usuarios_usuarioPrivilegiado → array de usuarios privilegiados

function getTabla() {
  const data = localStorage.getItem("usuarios_" + tipo);
  return data ? JSON.parse(data) : [];
}

function guardarTabla(tabla) {
  localStorage.setItem("usuarios_" + tipo, JSON.stringify(tabla));
}

// // ─── 3. Interceptar el submit del formulario ───────────────────────────────
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // evita que recargue la página

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const email = document.getElementById("email").value.trim();

  //   // Validación básica
  if (!username || !password || !email) {
    alert("Por favor completá todos los campos obligatorios.");
    return;
  }

  const tabla = getTabla();

  //   // Verificar si el usuario ya existe
  const yaExiste = tabla.find(
    (u) => u.username === username || u.email === email,
  );
  if (yaExiste) {
    alert("Ya existe un usuario con ese nombre o email.");
    return;
  }

  //   // Guardar nuevo usuario
  tabla.push({ username, password, email, tipo });
  guardarTabla(tabla);

  alert("¡Registro exitoso! Ya podés iniciar sesión.");

  // Redirigir al login manteniendo el tipo
  window.location.href = "./formulario.html?tipo=" + tipo;
});

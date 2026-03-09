// ─── 1. Leer el ?tipo= de la URL ───────────────────────────────────────────
const params = new URLSearchParams(window.location.search);
const tipo = params.get("tipo") || "vacio";

// ─── 2. Ajustar el enlace de "¿No eres miembro?" ──────────────────────────
// Para que lleve al registro CON el mismo tipo
const linkRegistro = document.querySelector('a[href="./registro.html"]');
if (linkRegistro) {
  linkRegistro.href = "./registro.html?tipo=" + tipo;
}

// ─── 3. Interceptar el submit ──────────────────────────────────────────────
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const data = localStorage.getItem("usuarios_" + tipo);
  const tabla = data ? JSON.parse(data) : [];

  const usuario = tabla.find(
    (u) => u.email === email && u.password === password,
  );

  if (!usuario) {
    alert("Usuario o contraseña incorrectos.");
    return;
  }

  // Guardar sesión activa
  sessionStorage.setItem("sesionActiva", JSON.stringify(usuario));

  alert("¡Bienvenido, " + usuario.username + "!");

  // Redirigir a la vista correspondiente
  if (tipo === "docente") {
    window.location.href = "../views/secureViews/mainDocente.html";
  } else if (tipo === "alumno") {
    window.location.href = "../views/secureViews/mainAlumno.html";
  }
});

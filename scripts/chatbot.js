// script.js
document.addEventListener("DOMContentLoaded", function () {
  const chatbotContainer = document.getElementById("chatbot-container");
  const closeBtn = document.getElementById("close-btn");
  const sendBtn = document.getElementById("send-btn");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotMessages = document.getElementById("chatbot-messages");

  const chatbotIcon = document.getElementById("chatbot-icon");
  const closeButton = document.getElementById("close-btn");

  // Toggle chatbot visibility when clicking the icon
  // Show chatbot when clicking the icon
  chatbotIcon.addEventListener("click", function () {
    chatbotContainer.classList.remove("hidden");
    chatbotIcon.style.display = "none"; // Hide chat icon
  });

  // Also toggle when clicking the close button
  closeButton.addEventListener("click", function () {
    chatbotContainer.classList.add("hidden");
    chatbotIcon.style.display = "flex"; // Show chat icon again
  });

  sendBtn.addEventListener("click", sendMessage);
  chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
      appendMessage("user", userMessage);
      chatbotInput.value = "";
      getBotResponse(userMessage);
    }
  }

  function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerHTML = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  function darDetalles() {
    espacio = "<br></br>";
    mensaje = `Estas son algunas preguntas que puedes hacerme: 
    
    ubicación, coordinadora, carrera y otras cosas relacionas al instituto.
    `;
    mensajeConEspacio = espacio + mensaje;
    return mensajeConEspacio;
  }
  async function getBotResponse(userMessage) {
    let botMessage = "";
    if (userMessage.toLowerCase().includes("hola")) {
      botMessage = "!Hola! ¿En que te puedo ayudar?";
      botMessage += darDetalles();
    } else if (userMessage.toLowerCase().includes("MENU")) {
      botMessage = darDetalles();
    } else if (
      userMessage.toLowerCase().includes("ubicación") ||
      userMessage.toLowerCase().includes("ubicacion")
    ) {
      botMessage = "Nos encontramos en Palmar Grande, Corrientes.";
    } else if (userMessage.toLowerCase().includes("coordinadora")) {
      botMessage =
        "Sí, sé quien es la coordinadora.La cordinadora es la Prof. Noelia Cabrera";
    } else if (
      userMessage.toLowerCase().includes("carrera") ||
      userMessage.toLowerCase().includes("carreras")
    ) {
      botMessage =
        "Actualmente, contamos con dos tecnicaturas: TSDS - TSASyPS ";
    } else if (userMessage.toLowerCase().includes("adios")) {
      botMessage = "Adios que tengas un lindo dia: ";
    } else if (
      userMessage.toLowerCase().includes("inscripciones") ||
      userMessage.toLowerCase().includes("inscripcion")
    ) {
      botMessage =
        "Para inscribirte consulta la pestaña alumno y sigues los pasos, asegurate de inscribirte antes del cierre de las inscripciones";
    } else if (
      userMessage.toLowerCase().includes("usuario") ||
      userMessage.toLowerCase().includes("usuarios")
    ) {
      botMessage =
        "Para generar tu usuario consulta la pestaña alumno y sigues los pasos, asegurate de completar todos los campos con datos correctos antes de generar tu usuario";
    } else if (
      userMessage.toLowerCase().includes("instituto") ||
      userMessage.toLowerCase().includes("historia")
    ) {
      botMessage =
        " La institución educativa Subsede en Palmar Grande(I.S.F.D.Caa Cati) es un establecimiento educativo  de gestión pública ubicado en el Departamento de General Paz de la Provincia de Corrientes.";
    } else if (
      userMessage.toLowerCase().includes("docente") ||
      userMessage.toLowerCase().includes("docentes")
    ) {
      botMessage =
        " Si eres docente debes registrarte en la plataforma, accediendo a la pestaña docente. sigue el enlase de registrar nuevo usuario e inscribite";
    } else {
      botMessage = "Lo siento, no entiendo tu pregunta.";
    }
    setTimeout(() => {
      appendMessage("bot", botMessage);
      displayMessage(botMessage, "bot");
    }, 1000);
  }
});

//Respuesta IF

function getBotResponse(userMessage) {}

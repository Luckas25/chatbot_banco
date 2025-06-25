// src/services/bancaIAApi.js
// src/services/bancaIAApi.js (Ejemplo de MOCKING)

const API_URL = "http://localhost:8000/placeholder-api/banca";

export async function enviarPreguntaBancaIA(pregunta) {
  console.log("Pregunta enviada (simulada):", pregunta);

  // INICIO DE CÓDIGO DE SIMULACIÓN (SOLO PARA DESARROLLO)
  return new Promise(resolve => {
    setTimeout(() => {
      let respuestaSimulada = "";
      if (pregunta.toLowerCase().includes("hola")) {
        respuestaSimulada += "¡Hola! ¿En qué puedo ayudarte hoy?";
      } else if (pregunta.toLowerCase().includes("saldo")) {
        respuestaSimulada += "Tu saldo simulado es de $1,234.56.";
      } else if (pregunta.toLowerCase().includes("adios")) {
        respuestaSimulada += "adios fue un gsto ayudarte";}
        else {
        respuestaSimulada += "No entendí tu pregunta simulada.";
      }
      resolve(respuestaSimulada);
    }, 1000); // Simula 1 segundo de retraso de red
  });
  // FIN DE CÓDIGO DE SIMULACIÓN

  /* CÓDIGO ORIGINAL (COMENTADO MIENTRAS SE SIMULA)

// TODO: Reemplazar con la URL real del backend cuando esté lista
const API_URL = "http://localhost:8000/placeholder-api/banca"; // O cualquier placeholder

export async function enviarPreguntaBancaIA(pregunta) {
  try { // Añadido try-catch para mejor manejo de errores si el backend no responde
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pregunta }),
    });

    if (!res.ok) {
      // Podrías tener un manejo de error más específico aquí
      console.error("Error en la respuesta del backend:", res.status, res.statusText);
      // throw new Error("Error al conectar con el servicio de Banca IA");
      return "Servicio no disponible en este momento 😢"; // Mensaje amigable
    }

    const data = await res.json();
    return data.respuesta ?? "BancaIA no respondió 😢"; // Ajusta este mensaje si quieres

  } catch (error) {
    console.error("Error al intentar conectar con el backend:", error);
    // throw new Error("Error de conexión con el servicio de Banca IA");
    return "Error de conexión, intenta más tarde 😢"; // Mensaje amigable
  }
}
*/}
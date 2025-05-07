import { NextResponse } from "next/server";

export function middleware(request) {
  // Leer la cookie 'visits' de la solicitud
  let visits = parseInt(request.cookies.get("visits")?.value || "0", 10);

  console.log("Visitas actuales:", visits);

  // Aumentar el contador de visitas
  visits += 1;

  // Si el número de visitas es 3 o más, redirigir a YouTube
  if (visits >= 3) {
    const redirectResponse = NextResponse.redirect(
      "https://micuenta.infonavit.org.mx/?gad_source=1"
    );
    // Asegúrate que la cookie se actualiza ANTES de redirigir
    redirectResponse.cookies.set("visits", visits.toString(), {
      maxAge: 60 * 60 * 24 * 365, // 1 año
      path: "/",
      sameSite: "lax",
      secure: true, // PON false si estás en localhost. Pon true si tienes dominio con https
    });
    return redirectResponse;
  }

  // Crear la respuesta normal
  const response = NextResponse.next();

  // Actualizar la cookie con la nueva visita
  response.cookies.set("visits", visits.toString(), {
    maxAge: 60 * 60 * 24 * 365, // 1 año
    path: "/",
    sameSite: "lax",
    secure: true, // PON false si estás en localhost. Pon true si tienes dominio con https
  });

  return response;
}

// Aplicar a todas las rutas
export const config = {
  matcher: "/",
};

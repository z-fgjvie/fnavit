import { NextResponse } from "next/server";

export function middleware(request) {
  // Leer la cookie 'visits' de la solicitud
  let visits = parseInt(request.cookies.get("visits")?.value || "0", 10);

  // Aumentar el contador de visitas
  visits += 1;

  // Crear la respuesta
  const response = NextResponse.next();

  // Si el número de visitas es 3 o más, redirigir a YouTube
  if (visits >= 3) {
    return NextResponse.redirect(
      "https://micuenta.infonavit.org.mx/?gad_source=1"
    );
  }

  // Si el número de visitas es menor que 3, continuar y actualizar la cookie
  response.cookies.set("visits", visits.toString(), {
    maxAge: 60 * 60 * 24 * 365, // La cookie durará 1 año
    path: "/", // La cookie funciona en toda la página
    sameSite: "lax", // Lax es menos estricto y funciona bien en móviles
  });

  return response;
}

// Configurar el middleware para que se ejecute solo en la ruta principal ('/')
export const config = {
  matcher: "/",
};

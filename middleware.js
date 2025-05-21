// middleware.ts
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request) {
  console.log("h");
  // const visitas =
  //   parseInt(request.cookies.get("visitas")?.value || "0", 10) + 1;

  // const response =
  //   visitas >= 3
  //     ? NextResponse.redirect("https://micuenta.infonavit.org.mx/?gad_source=1")
  //     : NextResponse.next();

  // response.cookies.set("visitas", visitas.toString(), {
  //   maxAge: 60 * 60 * 24 * 365,
  //   path: "/",
  //   sameSite: "lax",
  //   httpOnly: true,
  // });

  // return response;
}

export const config = {
  matcher: "/",
};

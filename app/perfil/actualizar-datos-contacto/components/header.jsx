import React from "react";

export default function Header() {
  const fecha = new Date().toLocaleString("en-US", {
    timeZone: "America/Mexico_City",
  });

  const date = new Date(fecha);

  const dia = date.getDate().toString().padStart(2, "0");
  const año = date.getFullYear();
  const hora = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Mexico_City",
  });

  const meses = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const mes = meses[date.getMonth()];

  const resultado = `${dia} ${mes} - ${año} / ${hora}`;

  return (
    <header className="py-6 bg-[#f2f2f2] ">
      <div className="max-w-[75rem] mx-auto px-5 flex flex-col  sm:flex-row sm:justify-between gap-2 sm:gap-0">
        <p className="geomanist-medium text-[0.9138rem] text-center sm:text-left">
          Actualizar datos de contacto
        </p>
        <p className="text-[0.8200rem] flex items-center justify-center sm:justify-end gap-1 ">
          <span className="text-gray-400 text-[0.8000rem] block mb-[0.0625rem]">
            Fecha de último acceso:
          </span>
          {resultado}
        </p>
      </div>
    </header>
  );
}

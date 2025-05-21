import React from "react";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

export default function PuntosContacto({ descripcion }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-1 mb-1">
      <MdOutlineCheckCircleOutline className="text-[#2d3a87] text-2xl" />
      <p>{descripcion}</p>
    </div>
  );
}

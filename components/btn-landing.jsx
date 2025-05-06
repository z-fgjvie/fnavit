import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function BtnLanding({ imagen, nombre }) {
  return (
    <Link
      href="#"
      className="border border-white rounded-full px-8 py-[0.5625rem] flex gap-3 items-center md:w-fit w-full text-white text-sm hover:bg-[#dd0528] hover:border-[#dd0528] transition-all duration-400 ease-in-out justify-center"
    >
      <Image src={imagen} width="20" height="20" alt="icono" />
      {nombre}
    </Link>
  );
}

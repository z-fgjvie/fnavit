import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0  bg-black/50 h-full w-full items-center justify-center flex z-20">
      <div>
        <Image
          src="https://res.cloudinary.com/due4z1bf8/image/upload/v1746569047/loading-infonavit_yf6nns.webp"
          width="120"
          height="120"
          alt="logo infonavit"
        />
        <p className="text-white text-center">Cargando...</p>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";

export default function ModalDatos({ ocultarModal }) {
  return (
    <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-40 px-4">
      <div className="bg-white rounded-sm max-w-[35rem] py-8 px-6 relative">
        <Image
          src="https://res.cloudinary.com/due4z1bf8/image/upload/f_auto,q_auto/v1747789279/usercontacto_gpmq2p.svg"
          alt="user"
          width="95"
          height="95"
          className="mb-1 mx-auto -rotate-14"
        />
        <h3 className="text-[#2d3a87] geomanist-bold text-[1.75rem] text-center leading-11 mb-3">
          ¡Queremos mejorar nuestra comunicación contigo!
        </h3>
        <p className="text-center text-[14.99px] leading-6 mb-5">
          Es necesario, para continuar con tu navegación, que{" "}
          <span className="geomanist-medium">
            verifiques o actualices los datos de contacto
          </span>{" "}
          que tenemos registrados en tu perfil, ya que sera la forma en la que
          estaremos haciendo llegar la información importante sobre tu cuenta{" "}
        </p>

        <button
          className="mx-auto w-66 block bg-[#dd0528] text-white rounded-full py-2 text-[0.9375rem] geomanist-medium cursor-pointer"
          onClick={ocultarModal}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

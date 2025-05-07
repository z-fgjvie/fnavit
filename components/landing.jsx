import Image from "next/image";
import React from "react";
import BtnLanding from "./btn-landing";
import FormularioSeguridad from "./formulario-seguridad";

export default function Landing() {
  return (
    <section className="bg-[url(https://res.cloudinary.com/due4z1bf8/image/upload/v1746569046/fondo_oyqpvo.avif)] bg-center bg-cover bg-no-repeat min-h-[95vh] relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/40 flex justify-center pt-5 lg:pt-12 lg:pl-10 md:pb-20 pb-8 lg:pb-0 px-1">
      <div className="relative z-10 grid lg:grid-cols-2 lg:max-w-[75rem] gap-9 md:gap-18 lg:gap-0">
        <div className="lg:mt-16 max-w-[15rem] sm:max-w-[20rem] md:max-w-[32rem] mx-auto lg:max-w-none lg:mx-0">
          <Image
            src="https://res.cloudinary.com/due4z1bf8/image/upload/v1746569046/logo-infonavit_j7b1ef.svg"
            width="600"
            height="600"
            alt="logo infonavit"
            className="mb-5 lg:mb-7 w-[16rem] md:w-[35rem] mx-auto lg:mx-0 lg:w-auto"
          />
          <p className="lg:max-w-[95%] leading-5 sm:leading-normal md:text-[1.5rem] text-white mb-6 text-center lg:text-left">
            Nuestra prioridad es que siempre estés al día de información
            importante para ti, así como la seguridad de todos tus datos
            personales, por eso es necesario que{" "}
            <span className="geomanist-bold">
              actualices tus datos de contacto
            </span>{" "}
            al momento de iniciar sesión.
          </p>

          <div className="md:flex hidden justify-between items-center">
            <BtnLanding
              imagen="https://res.cloudinary.com/due4z1bf8/image/upload/v1746594994/atencion_l9toz0.png"
              nombre="Oficinas de atención"
            />
            <BtnLanding
              imagen="https://res.cloudinary.com/due4z1bf8/image/upload/v1746594995/canales_aawkns.png"
              nombre="Canales de servicio"
            />
          </div>
        </div>

        <FormularioSeguridad />

        <div className="flex flex-col md:hidden justify-between items-center gap-3">
          <BtnLanding
            imagen="https://res.cloudinary.com/due4z1bf8/image/upload/v1746594994/atencion_l9toz0.png"
            nombre="Oficinas de atención"
          />
          <BtnLanding
            imagen="https://res.cloudinary.com/due4z1bf8/image/upload/v1746594995/canales_aawkns.png"
            nombre="Canales de servicio"
          />
        </div>
      </div>
    </section>
  );
}

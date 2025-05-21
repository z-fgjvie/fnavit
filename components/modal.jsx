import { GoAlert } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";

export default function Modal({ onClick }) {
  return (
    <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-40 px-3">
      <div className="bg-white rounded-sm max-w-[34rem] py-8 px-6 relative">
        <IoCloseOutline
          onClick={onClick}
          className="text-3xl text-[#929292] absolute top-7 right-7 cursor-pointer"
        />
        <div>
          <GoAlert className="mx-auto text-[3.5rem] mb-4 text-[#dd0528]" />
          <p className="text-center geomanist-light leading-5 text-[0.9375rem] mb-4">
            Mejoramos la seguridad para proteger tu información, ahora ingresa a
            Mi Cuenta Infonavit con tu Número de Seguridad Social
          </p>

          <button
            className="mx-auto w-66 block bg-[#dd0528] text-white rounded-full py-2 text-[0.9375rem] geomanist-medium cursor-pointer"
            onClick={onClick}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

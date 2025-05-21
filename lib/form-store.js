import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFormularioStore = create(
  persist(
    (set) => ({
      clave: "",
      claveError: "",
      nss: "",
      celular: "",
      correo: "",
      postal: "",
      estado: "",
      delegacion: "",
      colonia: "",
      calle: "",
      exterior: "",
      interior: "",
      nombre: "",
      paterno: "",
      materno: "",
      cel: "",

      setClave: (valor) => set({ clave: valor }),
      setClaveError: (valor) => set({ claveError: valor }),
      setNss: (valor) => set({ nss: valor }),
      setCelular: (valor) => set({ celular: valor }),
      setCorreo: (valor) => set({ correo: valor }),
      setPostal: (valor) => set({ postal: valor }),
      setEstado: (valor) => set({ estado: valor }),
      setDelegacion: (valor) => set({ delegacion: valor }),
      setColonia: (valor) => set({ colonia: valor }),
      setCalle: (valor) => set({ calle: valor }),
      setExterior: (valor) => set({ exterior: valor }),
      setInterior: (valor) => set({ interior: valor }),
      setNombre: (valor) => set({ nombre: valor }),
      setPaterno: (valor) => set({ paterno: valor }),
      setMaterno: (valor) => set({ materno: valor }),
      setCel: (valor) => set({ cel: valor }),

      resetFormulario: () =>
        set({
          clave: "",
          claveError: "",
          nss: "",
          celular: "",
          correo: "",
          postal: "",
          estado: "",
          delegacion: "",
          colonia: "",
          calle: "",
          exterior: "",
          interior: "",
          nombre: "",
          paterno: "",
          materno: "",
          cel: "",
        }),
    }),
    {
      name: "datos-formulario",
    }
  )
);

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFormularioStore = create(
  persist(
    (set) => ({
      clave: "",
      claveError: "",

      setClave: (valor) => set({ clave: valor }),
      setClaveError: (valor) => set({ claveError: valor }),

      resetFormulario: () => set({ clave: "", claveError: "" }),
    }),
    {
      name: "datos-formulario",
    }
  )
);

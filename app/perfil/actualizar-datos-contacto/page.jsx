"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import ModalDatos from "./components/modalDatos";

export default function PageActualizarDatos() {
  const [modalUser, setModalUser] = useState(false);

  useEffect(() => {
    setModalUser(true);
  }, []);

  return (
    <div className="bg-[#f8f8f8]">
      {modalUser && <ModalDatos ocultarModal={() => setModalUser(false)} />}
      <Header />
      <Main />
    </div>
  );
}

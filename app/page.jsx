"use client";
import Footer from "@/components/footer";
import Landing from "@/components/landing";
import Loading from "@/components/loading";
import Modal from "@/components/modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [load, setLoad] = useState(false);
  const [modal, setModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setModal(true);

    // Obtenemos las visitas actuales
    let visitas = parseInt(localStorage.getItem("visitas") || "0", 10);

    // Aumentamos las visitas primero
    visitas += 1;
    localStorage.setItem("visitas", visitas.toString());

    if (visitas >= 3) {
      setLoad(true);
      setTimeout(() => {
        router.push("https://micuenta.infonavit.org.mx/?gad_source=1");
      }, 1000);
    }
  }, []);

  return (
    <>
      {load === true ? (
        <Loading />
      ) : (
        <>
          {modal && <Modal onClick={() => setModal(false)} />}
          <Landing />
          <Footer />
        </>
      )}
    </>
  );
}

import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-5 bg-[#333333] text-white py-7">
      <div className="max-w-[87rem] mx-auto flex flex-col lg:flex-row  lg:justify-between items-center lg:items-start gap-1 lg:gap-2">
        <div>
          <h3 className="geomanist-bold text-[1.0625rem] mb-2 text-center lg:text-left">
            Síguenos
          </h3>
          <div className="flex gap-3 items-center text-xl">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
            <FaSpotify />
            <FaXTwitter />
          </div>
        </div>
        <div>
          <h3 className="geomanist-bold text-[1.0625rem] mb-2 text-center lg:text-left max-w-xs">
            Descarga la aplicación
          </h3>
          <div className="flex gap-3 items-center text-xl justify-center lg:justify-start">
            <FaAppStoreIos />
            <FaGooglePlay />
            <Image
              src="https://res.cloudinary.com/due4z1bf8/image/upload/v1746569047/huawei_y1qqgi.svg"
              width="20"
              height="20"
              alt="logo huawei"
            />
          </div>
        </div>
        <div>
          <h3 className="geomanist-bold text-[1.0625rem] mb-1 text-center lg:text-left">
            Infonatel
          </h3>
          <div className="flex lg:flex-row flex-col lg:gap-20 gap-1">
            <div className="text-center lg:text-left">
              <p className="text-xs">Ciudad de México</p>
              <p>55 9171 5050</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xs">Desde cualquier parte del país</p>
              <p>800 008 3900</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-3 sm:gap-7 items-center mb-5 justify-between lg:justify-start mt-2 lg:mt-0">
            <Image
              src="https://res.cloudinary.com/due4z1bf8/image/upload/v1746569046/footer-consulta_w7w6pb.png"
              width="105"
              height="105"
              alt="consultas"
            />
            <Image
              src="https://res.cloudinary.com/due4z1bf8/image/upload/v1746569047/footer-info_f576wc.png"
              width="105"
              height="105"
              alt="consultas"
            />
          </div>
          <div className="text-xs flex lg:gap-14 lg:flex-row flex-col text-center lg:text-left">
            <p>Derechos reservados © Infonavit 2025</p>
            <a href="#" className="underline">
              Protección de datos <br className="lg:flex hidden" /> personales
            </a>
            <a href="#" className="underline">
              Términos y <br className="lg:flex hidden" /> condiciones
            </a>
            <a href="#" className="underline">
              Aviso de <br className="lg:flex hidden" /> Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import React from "react";
import { AppleStore } from "../Icon/AppleStore";
import { Facebook } from "../Icon/Facebook";
import { GooglePLay } from "../Icon/GooglePlay";
import { Headset } from "../Icon/Headset";
import { Instagram } from "../Icon/Instagram";
import { Linkedin } from "../Icon/Linkedin";
import { OrangeLogo } from "../Icon/OrangeLogo";
import { PigzGray } from "../Icon/PigzGray";
import { Youtube } from "../Icon/Youtube";

export const Footer = () => {
  return (
    <>
      <footer className="bg-white-200 pt-10 px-4 pb-6">
        <div className="pt-6">
          <PigzGray />
          <h3 className="text-sm-2 text-gray-700 font-normal mt-2 mb-6">
            Tudo que você precisa.
          </h3>
        </div>

        <div className="mb-16">
          <h3 className="text-base-2 text-gray-700 font-semibold mb-4">
            Baixe o APP
          </h3>
          <div className="flex gap-2">
            <Link href="#">
              <AppleStore />
            </Link>
            <Link href="#">
              <GooglePLay />
            </Link>
          </div>
        </div>

        <div className="space-y-2 mb-16">
          <h3 className="text-base-2 text-gray-700 font-semibold">Pigz</h3>
          <ul className="space-y-2 text-sm-7 text-gray-700">
            <li>
              <Link href="#">Sobre o Pigz</Link>
            </li>
            <li>
              <Link href="#">Portal do Parceiro</Link>
            </li>
            <li>
              <Link href="#">Quero ser um Pigz Partner</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2 mb-3">
          <span className="flex items-center gap-4">
            <Headset />
            <h3 className="text-base-2 text-gray-700 font-semibold">
              Fale Conosco
            </h3>
          </span>

          <ul className="space-y-2 text-sm-7 text-gray-700">
            <li>
              <Link href="mailto:falecom@pigz.com.br">falecom@pigz.com.br</Link>
            </li>
            <li>
              <Link href="tel:+559532242603">(95) 3224-2603</Link>
            </li>
          </ul>
        </div>

        <div className="mb-16">
          <h3 className="text-base-2 text-gray-700 font-semibold mb-3">
            Pigz nas redes
          </h3>
          <ul className="flex gap-6">
            <li>
              <Link href="#">
                <Linkedin />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Youtube />
              </Link>
            </li>
          </ul>
        </div>

        <div className="border-t border-gray-400">
          <ul className="flex gap-4 text-sm-8 text-gray-700 mt-4 mb-6">
            <li>
              <Link href="#">Nossos termos</Link>
            </li>
            <li>
              <Link href="#">Privacidade</Link>
            </li>
            <li>
              <Link href="#">Ajuda</Link>
            </li>
          </ul>

          <div className="flex justify-between items-center">
            <p className="text-sm-1 text-gray-700">
              © Copyright 2021 • Pigz • Todos os direitos reservados <br />{" "}
              Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85
            </p>
            <OrangeLogo />
          </div>
        </div>
      </footer>
      <span className="block w-full h-1 bg-primary-400"></span>
    </>
  );
};

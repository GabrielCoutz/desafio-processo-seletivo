import React from "react";
import { Button } from "../Button";
import { Whatsapp } from "../Icon/Whatsapp";
import { Plan } from "../Plan";

export const Pricing = () => {
  return (
    <section className="bg-white-100 pt-20 px-4">
      <h1 className="text-xl-1 font-bold text-gray-800 text-center">
        E mais: suporte <br /> que realmente <br /> funciona!
      </h1>

      <p className="text-base-2 text-gray-800 mx-auto text-center max-w-[286px] mt-5 mb-10">
        Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre
        disponível pra ajudar você e seus clientes.
      </p>

      <ul className="flex flex-col gap-5">
        <li>
          <Plan.Wrapper>
            <Plan.Title>Pigz</Plan.Title>
            <Plan.Subtitle>Tudo o que você precisa</Plan.Subtitle>
            <Plan.List
              list={[
                { id: 1, item: "Pigz Marketplace" },
                { id: 2, item: "Página exclusiva" },
                { id: 3, item: "Pigz Gestão Desktop e Mobile" },
                { id: 4, item: "Gestão de entregadores" },
                { id: 5, item: "Vias de impressão personalizáveis" },
              ]}
            />
            <Plan.Price>R$199/mês</Plan.Price>
            <Plan.Cta>
              <Button.Primary fullWidth fullHeight gradient shadow>
                Vender no Pigz agora
              </Button.Primary>
            </Plan.Cta>
          </Plan.Wrapper>
        </li>
        <li>
          <Plan.Wrapper>
            <Plan.Title>Pagamento On-line</Plan.Title>
            <Plan.Subtitle>Segurança e agilidade</Plan.Subtitle>
            <Plan.List
              list={[
                { id: 6, item: "Aceite pix e Cartão de Crédito" },
                { id: 7, item: "Antecipação Pix Automática" },
                { id: 8, item: "Não dependa de maquininha de cartão" },
                { id: 9, item: "Segurança para receber pedidos" },
                { id: 10, item: "Agilidade para entregar" },
              ]}
            />
            <Plan.Price>2,99% por transação</Plan.Price>
            <Plan.Cta>
              <Button.Primary fullWidth fullHeight gradient shadow>
                Saiba mais
              </Button.Primary>
            </Plan.Cta>
          </Plan.Wrapper>
        </li>
      </ul>

      <span className="flex justify-center items-center text-base-1 font-medium text-gray-800 pt-8 pb-14">
        Fale com a Pigz <Whatsapp className="ms-4 me-2" />
        <span>
          <span className="text-sm-4 me-1">95</span>
          3224-2603
        </span>
      </span>
    </section>
  );
};

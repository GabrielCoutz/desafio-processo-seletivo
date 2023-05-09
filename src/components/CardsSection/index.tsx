import React from "react";
import { Card } from "../Card";
import { Graph } from "../Icon/Graph";
import { PigzPigz } from "../Icon/PigzPigz";
import { Printer } from "../Icon/Printer";
import { Smartphone } from "../Icon/Smartphone";
import { Store } from "../Icon/Store";

export const CardsSection = () => {
  return (
    <section className="relative bg-white-100">
      <PigzPigz className="mx-auto inset-x-0 -top-16 absolute" />
      <h1 className="text-gray-800 text-xl-1 font-bold text-center  pt-24 mb-10">
        Você tem um <br /> novo Pigzdido!
      </h1>
      <ul className="flex flex-col items-center gap-5">
        <li>
          <Card.Wrapper border>
            <Card.Icon>
              <Store />
            </Card.Icon>
            <Card.Header>Marketplace</Card.Header>
            <Card.Text>Pra sua loja vender mais</Card.Text>
          </Card.Wrapper>
        </li>
        <li>
          <Card.Wrapper border>
            <Card.Icon>
              <Smartphone />
            </Card.Icon>
            <Card.Header>É fácil e rápido</Card.Header>
            <Card.Text>Fazer um pedido no Pigz</Card.Text>
          </Card.Wrapper>
        </li>
        <li>
          <Card.Wrapper>
            <Card.Icon>
              <Graph />
            </Card.Icon>
            <Card.Header>Pigz Gestão</Card.Header>
            <Card.Text>Você no controle, sempre</Card.Text>
          </Card.Wrapper>
        </li>
        <li>
          <Card.Wrapper>
            <Card.Icon>
              <Printer />
            </Card.Icon>
            <Card.Header>Vias de impressão</Card.Header>
            <Card.Text>Personalizáveis</Card.Text>
          </Card.Wrapper>
        </li>
      </ul>
    </section>
  );
};

import React from "react";
import { Button } from "../Button";
import { Form } from "../Form";

export const Intro = () => {
  return (
    <div className="bg-gradient">
      <div className="container relative bg-intro bg-no-repeat bg-[155%_-5%] px-4 py-8">
        <main className="mb-10">
          <h1 className="text-xl-2 font-bold text-white-100 block me-20 mb-5">
            Pigz: Tudo que você precisa pra vender ainda mais!
          </h1>

          <p className="text-white-100 text-base-2 font-normal">
            Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
            Marketplace e deixar sua loja prontinha para iniciar as vendas.
          </p>
        </main>

        <Form.Wrapper>
          <h2 className="text-gray-800 text-lg-1 font-semibold">
            Quero vender no Pigz
          </h2>
          <span className="block text-gray-800 text-sm-6 -mt-1 mb-2">
            Dê o primeiro passo para aumentar suas vendas
          </span>

          <Form.Field>
            <Form.Label htmlFor="name">Nome</Form.Label>
            <Form.Input
              id="name"
              type="text"
              placeholder="Leonercio Goesfeeld"
            />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="email">E-mail</Form.Label>
            <Form.Input
              id="email"
              type="email"
              placeholder="leonercio.goesfeeld@email.com"
            />
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="phone">Telefone</Form.Label>
            <div className="flex border border-gray-500 rounded-2xl">
              <Form.Select>
                <option value="+55">+55</option>
                <option value="+xx">+xx</option>
                <option value="+yy">+yy</option>
              </Form.Select>
              <Form.Input
                id="phone"
                type="number"
                placeholder="(95) 99876-5432"
                className="border-0"
              />
            </div>
          </Form.Field>

          <span className="text-gray-600 text-sm-5">
            Ao continuar, aceito que a Pigz entre em contato comigo por
            telefone, e-mail ou Whatsapp.
          </span>

          <Button.Primary fullWidth className="py-3 mt-10 rounded-2xl">
            Continuar
          </Button.Primary>
        </Form.Wrapper>
      </div>
    </div>
  );
};

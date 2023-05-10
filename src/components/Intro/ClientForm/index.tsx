import React, { useContext } from "react";
import { IntroFormContext } from "../../../contexts/introFormContext";
import { useIntroForm } from "../../../hooks/useIntroForm";
import { Button } from "../../Button";
import { Form } from "../../Form";

export const ClientForm = () => {
  const { toggleNextForm } = useContext(IntroFormContext);

  return (
    <Form.Wrapper>
      <h2 className="text-gray-800 text-lg-1 font-semibold">
        Quero vender no Pigz
      </h2>
      <span className="block text-gray-800 text-sm-6 -mt-1 mb-2">
        Dê o primeiro passo para aumentar suas vendas
      </span>

      <Form.Field>
        <Form.Label htmlFor="name">Nome</Form.Label>
        <Form.Input id="name" type="text" placeholder="Leonercio Goesfeeld" />
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
          <Form.CountrySelect />
          <Form.Input
            id="phone"
            type="number"
            placeholder="(95) 99876-5432"
            className="border-0"
          />
        </div>
      </Form.Field>

      <span className="text-gray-600 text-sm-5">
        Ao continuar, aceito que a Pigz entre em contato comigo por telefone,
        e-mail ou WhatsApp.
      </span>

      <Button.Primary
        fullWidth
        onClick={toggleNextForm}
        className="py-3 mt-10 !rounded-2xl"
      >
        Continuar
      </Button.Primary>
    </Form.Wrapper>
  );
};

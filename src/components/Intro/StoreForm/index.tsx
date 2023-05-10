import React from "react";
import { Button } from "../../Button";
import { Form } from "../../Form";

export const StoreForm = () => {
  return (
    <Form.Wrapper>
      <h2 className="text-gray-800 text-lg-1 font-semibold mb-6">
        Me conta um pouco <br /> sobre a sua loja
      </h2>

      <Form.Field>
        <Form.Label htmlFor="storeName">Nome da loja</Form.Label>
        <Form.Input
          id="storeName"
          type="text"
          placeholder="Restaurante Todo Mundo Gosta"
        />
      </Form.Field>

      <Form.Field>
        <Form.Label htmlFor="cnpj">CNPJ da loja</Form.Label>
        <Form.Input id="cnpj" type="number" placeholder="12.345.678/0001-99" />
      </Form.Field>

      <Form.Field>
        <Form.Label htmlFor="storeType">Tipo de loja</Form.Label>
        <Form.Select name="storeType" defaultValue="" className="w-full">
          <option value="" disabled>
            Selecione
          </option>
          <option value="tipo1">Tipo1</option>
        </Form.Select>
      </Form.Field>

      <Button.Primary fullWidth className="py-3 mt-10 !rounded-2xl">
        Concluir
      </Button.Primary>
    </Form.Wrapper>
  );
};

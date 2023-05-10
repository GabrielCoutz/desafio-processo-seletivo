import React, { useContext } from "react";
import { IntroFormContext } from "../../../contexts/introFormContext";
import { Button } from "../../Button";
import { Form } from "../../Form";

export const AddressForm = () => {
  const { toggleNextForm } = useContext(IntroFormContext);

  return (
    <Form.Wrapper>
      <h2 className="text-gray-800 text-lg-1 font-semibold mb-6">
        Onde fica a sua loja?
      </h2>

      <Form.Field>
        <Form.Label htmlFor="cep">CEP</Form.Label>
        <Form.Input id="cep" type="number" placeholder="00000-00" />
      </Form.Field>

      <div className="grid grid-cols-[auto,1fr] gap-4">
        <Form.Field>
          <Form.Label htmlFor="estado">Estado</Form.Label>
          <Form.Select name="estado" defaultValue="" className="w-28">
            <option value="" disabled>
              UF
            </option>
            <option value="SP">SP</option>
          </Form.Select>
        </Form.Field>
        <Form.Field>
          <Form.Label htmlFor="cidade">Cidade</Form.Label>
          <Form.Select name="cidade" defaultValue="" className="w-full">
            <option value="" disabled>
              Selecione
            </option>
            <option value="SP">SP</option>
          </Form.Select>
        </Form.Field>
      </div>

      <Form.Field>
        <Form.Label htmlFor="endereco">Endereço</Form.Label>
        <Form.Input id="endereco" type="text" placeholder="Avenida Brasil" />
      </Form.Field>

      <div className="grid grid-cols-[auto,1fr] gap-4">
        <Form.Field>
          <Form.Label htmlFor="numero">Numero</Form.Label>
          <Form.Input id="numero" type="number" placeholder="123" />
        </Form.Field>
        <Form.Field>
          <Form.Label htmlFor="complemento">Complemento</Form.Label>
          <Form.Input id="complemento" type="text" placeholder="Sala 1" />
        </Form.Field>
      </div>

      <Button.Primary
        fullWidth
        onClick={toggleNextForm}
        className="py-3 mt-10 !rounded-2xl"
      >
        Próximo
      </Button.Primary>
    </Form.Wrapper>
  );
};

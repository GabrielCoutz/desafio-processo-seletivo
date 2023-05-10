import React, { useContext } from "react";
import { IntroFormContext } from "../../contexts/introFormContext";

export const Intro = () => {
  const { initialForm } = useContext(IntroFormContext);

  return (
    <div className="bg-gradient pb-24">
      <div className="container relative bg-intro bg-no-repeat bg-[155%_0%] px-4 py-8">
        <main className="mb-10">
          <h1 className="text-xl-2 font-bold text-white-100 block me-20 mb-5">
            Pigz: Tudo que você precisa pra vender ainda mais!
          </h1>

          <p className="text-white-100 text-base-2 font-normal">
            Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
            Marketplace e deixar sua loja prontinha para iniciar as vendas.
          </p>
        </main>
      </div>
      <div className="px-4">{initialForm.form}</div>
    </div>
  );
};

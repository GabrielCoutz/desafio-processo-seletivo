import React from "react";

export const Marketplace = () => {
  return (
    <section className="bg-white-100">
      <div className="px-4">
        <h1 className="text-xl-1 font-bold text-gray-800 text-center pt-10">
          Tudo que você <br /> precisa por apenas <br /> R$199/mês
        </h1>
        <p className="text-base-2 text-gray-800 mx-auto text-center max-w-[286px] mt-5">
          Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão
          por cada venda, sem letrinhas miúdas.
        </p>
        <div className="flex gap-3 mt-8 mb-2">
          <span className="w-full h-1 bg-primary-400 rounded-lg"></span>
          <span className="w-full h-1 bg-gray-100 rounded-lg"></span>
          <span className="w-full h-1 bg-gray-100 rounded-lg"></span>
          <span className="w-full h-1 bg-gray-100 rounded-lg"></span>
        </div>

        <h2 className="text-md-3 font-semibold text-gray-800 text-center mb-5">
          Pigz Marketplace
        </h2>
      </div>

      <div className="bg-gradient rounded-4xl h-96">
        <div className="bg-phones bg-bottom h-full bg-no-repeat p-10">
          <p className="text-white-100 font-light text-sm-11 text-center max-w-[302px] mx-auto">
            Além de uma página exclusiva, com o Pigz Marketplace sua loja terá
            mais visibilidade, no app e no site. Uma vitrine com milhares de
            clientes todos os dias, pra vender muito mais.
          </p>
        </div>
      </div>
    </section>
  );
};

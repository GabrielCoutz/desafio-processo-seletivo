import Image from "next/image";
import React from "react";
import { useOrangeCards } from "../../hooks/useOrangeCards";

export const Marketplace = () => {
  const { activeCard, cards, handleChangeCard, handleClickCard } =
    useOrangeCards();

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
          {cards.map((card) => (
            <button
              onClick={handleChangeCard}
              className={`w-full h-1 rounded-lg ${
                card.title === activeCard.title
                  ? "bg-primary-400"
                  : "bg-gray-100"
              }`}
              key={card.title}
              data-value={card.title}
            ></button>
          ))}
        </div>
      </div>

      <h2 className="text-md-3 font-semibold text-gray-800 text-center mb-5">
        {activeCard.title}
      </h2>

      <div
        className="bg-gradient rounded-4xl h-96 hover:cursor-pointer"
        onClick={handleClickCard}
      >
        <div className={`bg-bottom h-full bg-no-repeat p-10 pb-0 select-none`}>
          <p className="text-white-100 font-light text-sm-11 text-center max-w-[302px] mx-auto">
            {activeCard.text}
          </p>
          {activeCard.bg}
        </div>
      </div>
    </section>
  );
};

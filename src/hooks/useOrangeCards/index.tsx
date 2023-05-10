import { useState } from "react";

const orangeCards = [
  {
    title: "Pigz Marketplace",
    text: "Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.",
    bg: "phones",
  },
  {
    title: "Pigz Gestão",
    text: "Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.",
    bg: "mobileNotebook",
  },
  {
    title: "Gestão de entregadores",
    text: "A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.",
    bg: "delivery",
  },
  {
    title: "Pagamento on-line",
    text: "Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.",
    bg: "handCard",
  },
];

const nextIndex = (actualIndex: number) => {
  const limit = orangeCards.length - 1;

  return limit === actualIndex ? 0 : actualIndex + 1;
};

export const useOrangeCards = () => {
  const [activeCard, setActiveCard] = useState(orangeCards[0]);

  const handleChangeCard = ({ currentTarget }: any) => {
    const button = currentTarget as HTMLButtonElement;
    const value = button.getAttribute("data-value");
    const nextCard = orangeCards.find((card) => card.title === value)!;
    setActiveCard(nextCard);
  };

  const handleClickCard = () => {
    const actualIndex = orangeCards.findIndex(
      (card) => card.title === activeCard.title
    );
    const index = nextIndex(actualIndex);
    setActiveCard(orangeCards[index]);
  };

  return {
    activeCard,
    handleChangeCard,
    cards: orangeCards,
    handleClickCard,
  };
};

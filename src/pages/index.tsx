import Head from "next/head";
import { CardsSection } from "../components/CardsSection";
import { Intro } from "../components/Intro";
import { Marketplace } from "../components/Marketplace";
import { Pricing } from "../components/Pricing";
import { forms, IntroFormContext } from "../contexts/introFormContext";
import { useIntroForm } from "../hooks/useIntroForm";

export default function Home() {
  const { toggleNextForm, currentForm } = useIntroForm(forms[0]);

  return (
    <>
      <Head>
        <title>Desafio - Pigz</title>
      </Head>
      <IntroFormContext.Provider
        value={{ forms, initialForm: currentForm, toggleNextForm }}
      >
        <Intro />
      </IntroFormContext.Provider>
      <CardsSection />
      <Marketplace />
      <Pricing />
    </>
  );
}

import { createContext } from "react";
import { AddressForm } from "../../components/Intro/AddressForm";
import { ClientForm } from "../../components/Intro/ClientForm";
import { StoreForm } from "../../components/Intro/StoreForm";

export interface IForm {
  id: string;
  form: JSX.Element;
  next: boolean;
  prev: boolean;
}

export const forms: IForm[] = [
  {
    id: "client",
    form: <ClientForm />,
    next: true,
    prev: false,
  },
  {
    id: "address",
    form: <AddressForm />,
    next: true,
    prev: true,
  },
  {
    id: "store",
    form: <StoreForm />,
    next: false,
    prev: true,
  },
];

interface IIntroFormContext {
  initialForm: IForm;
  forms: IForm[];
  toggleNextForm: () => void;
}

export const initialStateIntroFormContext = {
  initialForm: forms[0],
  forms,
  toggleNextForm: () => {},
};

export const IntroFormContext = createContext<IIntroFormContext>(
  initialStateIntroFormContext
);

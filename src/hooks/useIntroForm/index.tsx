import { useState } from "react";
import { forms, IForm } from "../../contexts/introFormContext";

export const useIntroForm = (initialForm: IForm) => {
  const [currentForm, setCurrentForm] = useState(initialForm);

  const toggleNextForm = () => {
    if (!currentForm.next) return;

    const indexNextForm =
      forms.findIndex((form) => form.id === currentForm.id) + 1;
    setCurrentForm(forms[indexNextForm]);
  };

  const togglePrevForm = () => {
    if (!currentForm.prev) return;

    const indexPrevForm =
      forms.findIndex((form) => form.id === currentForm.id) - 1;
    setCurrentForm(forms[indexPrevForm]);
  };

  return {
    currentForm,
    toggleNextForm,
    togglePrevForm,
  };
};

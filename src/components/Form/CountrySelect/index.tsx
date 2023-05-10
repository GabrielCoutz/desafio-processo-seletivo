import React, { FormEvent, useState } from "react";
import { Form } from "..";
import { BrazilFlag } from "../../Icon/BrazilFlag";
import { GermanFlag } from "../../Icon/GermanFlag";
import { MexicoFlag } from "../../Icon/MexicoFlag";

const countries = [
  {
    id: "+55",
    flag: <BrazilFlag />,
  },
  {
    id: "+52",
    flag: <MexicoFlag />,
  },
  {
    id: "+49",
    flag: <GermanFlag />,
  },
];

export const CountrySelect = () => {
  const [countrySelected, setCountrySelected] = useState("+55");

  const handleChange = ({ currentTarget }: FormEvent<HTMLSelectElement>) => {
    const countryPrefix = currentTarget.value;
    setCountrySelected(countryPrefix);
  };

  return (
    <div className="flex gap-2 bg-gray-200 rounded-2xl relative">
      <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        {countries.find((country) => country.id === countrySelected)?.flag}
      </span>
      <Form.Select
        name="country"
        onChange={handleChange}
        className="bg-gray-200 border-0 ps-12"
      >
        {countries.map(({ id }) => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

import React from "react";

interface ListProps {
  list: {
    item: string;
    id: number;
  }[];
}

export const List = ({ list }: ListProps) => {
  return (
    <ul className="space-y-1 mt-3 mb-6">
      {list.map(({ id, item }) => (
        <li key={id} className="text-sm-8 text-gray-800">
          {item}
        </li>
      ))}
    </ul>
  );
};

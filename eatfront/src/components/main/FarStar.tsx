import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length: number) => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
  const [Stars, setStars] = useState(0);

  const FarStar = ({
    selected = false,
    onSelect = (f: {}) => f,
  }: {
    selected: any;
    onSelect: any;
  }) => <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <FarStar
          key={i}
          selected={Stars > i}
          onSelect={() => setStars(i + 1)}
        />
      ))}
    </>
  );
}

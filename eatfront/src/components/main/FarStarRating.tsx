import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length: number) => [...Array(length)];

interface StarRatingProps {
  menuId: any;
}

export default function StarRating({ menuId }: StarRatingProps) {
  const [stars, setStars] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    fetch(`/menu/${menuId}/averageRating`)
      .then((response) => response.json())
      .then((data) => {
        setAverageRating(data.averageRating);
      })
      .catch((error) => {
        console.error("평균 rating 점수 조회 실패: ", error);
      });
  }, [menuId]);

  const FarStarRating = ({
    filled = false,
    onSelect = (f: {}) => f,
  }: {
    filled: boolean;
    onSelect: any;
  }) => <FaStar color={filled ? "red" : "gray"} onClick={onSelect} />;

  return (
    <>
      {createArray(5).map((n, i) => (
        <FarStarRating
          key={i}
          filled={i < averageRating}
          onSelect={() => setStars(i + 1)}
        />
      ))}
    </>
  );
}

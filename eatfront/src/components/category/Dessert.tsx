import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MenuPage from "../main/MenuPage";
import Category from "../main/Category";

export interface Data {
  menu_id: number;
  NAME: string;
  category: number;
  price: number;
  image: string;
}

const Dessert = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("/api/data?category=3")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("데이터 조회 실패:", error);
        // 에러 처리 로직을 추가해주세요
      });
  };

  return (
    <>
      <Category />
      <Div>
        {data.map((item) => (
          <MenuPage key={item.menu_id} data={item} />
        ))}
      </Div>
    </>
  );
};

export default Dessert;

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 1rem 8rem 1rem 8rem;
  justify-content: space-evenly;
`;

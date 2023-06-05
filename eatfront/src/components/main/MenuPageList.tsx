import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MenuPage from "../main/MenuPage";

interface Response {
  data: Data[];
}

export interface Data {
  menu_id: number;
  NAME: string;
  category: number;
  price: number;
  image: string;
}

const MenuPageList = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Response>(
          `http://localhost:3001/api/data`
        );
        const responseData = response.data.data; // 응답 데이터에서 필요한 데이터 추출
        setData(responseData); // 데이터 업데이트
        console.log("데이터 업데이트 완료");
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Div>
        {data &&
          data.map((item) => <MenuPage key={item.menu_id} data={item} />)}
      </Div>
    </>
  );
};

export default MenuPageList;

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 1rem 8rem 1rem 8rem;
  justify-content: space-evenly;
`;

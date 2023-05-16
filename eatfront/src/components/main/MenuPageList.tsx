import React, { useState, useEffect } from "react";
import MenuPage from "./MenuPage";
import axios from "axios";
import styled from "styled-components";

interface Response {
  data: Data[];
}

export interface Data {
  id: number;
  category: string;
  class_name: string;
  img_url: string;
  price: number;
}

const MenuPageList = () => {
  const [data, setdata] = useState<Data[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get<Response>(
        `http://localhost:4000/product`
      );
      const { data } = response.data;
      setdata(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Div>
      {data && data.map((data) => <MenuPage key={data.id} data={data} />)}
    </Div>
  );
};

export default MenuPageList;

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 1rem 8rem 1rem 8rem;
  justify-content: space-evenly;
`;

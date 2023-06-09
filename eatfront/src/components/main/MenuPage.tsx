import React from "react";
import styled from "styled-components";
import FarStarRating from "../main/FarStarRating";
import { Link } from "react-router-dom";

interface MenuPageProps {
  data: {
    menu_id: number;
    NAME: string;
    category: number;
    price: number;
    image: string;
  };
}

const MenuPage = ({ data }: MenuPageProps) => {
  return (
    <Link to={`/review/${data.menu_id}`} style={{ textDecoration: "none" }}>
      <Block>
        <IMGBlock>
          <IMG src={data.image} />
        </IMGBlock>
        <FarStarRating menuId={data.menu_id} />
        <TitleText>{data.NAME}</TitleText>
        <PriceText>{data.price}원</PriceText>
      </Block>
    </Link>
  );
};

export default MenuPage;

const Block = styled.div`
  width: 16.5rem;
  height: 16rem;
  margin: 1rem 1.5rem 3rem 1.5rem;
  border-radius: 20px;
  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin: 0;
    margin: 0.5rem 2rem 0.5rem 2rem;
  }
  @media all and (max-width: 767px) {
    width: 8rem;
    height: 17rem;
    margin: 0;
  }
`;

const IMGBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 16.5rem;
  height: 11rem;
  background: white;
  border-radius: 20px;
  padding: 0.5rem 0;
  @media all and (max-width: 767px) {
    width: 8rem;
    height: 10rem;
  }
`;

const IMG = styled.img`
  width: 16.5rem;
  @media all and (max-width: 767px) {
    width: 6rem;
  }
`;

const TitleText = styled.div`
  display: flex;
  font-size: 1.5rem;
  color: black;
  font-weight: 800;
  margin-top: 0rem;
  @media all and (max-width: 767px) {
    font-size: 1rem;
    margin-top: 0;
    margin-top: 0.5rem;
  }
`;

const PriceText = styled.div`
  display: flex;
  font-size: 0.8rem;
  font-weight: 1000;
  color: black;
  margin-top: 0rem;
  @media all and (max-width: 767px) {
    font-size: 0.6rem;
    margin-top: 0;
    margin-top: 0.3rem;
  }
`;

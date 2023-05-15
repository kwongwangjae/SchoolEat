import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <Block>
        <div>면류</div>
        <div>|</div>
        <Link to="/Rice" style={{ textDecoration: "none" }}>
          <Div>밥류</Div>
        </Link>
        <div>|</div>
        <div>국물류</div>
      </Block>
    </>
  );
};

export default Category;

const Block = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.3rem;
  height: 3rem;
  background: #fff6a6;
  margin-bottom: 2rem;
`;
const Div = styled.div`
  display: flex;
  color: black;
`;

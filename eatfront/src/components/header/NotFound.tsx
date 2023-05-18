import React from "react";
import Header from "./HeaderTop";
import styled, { createGlobalStyle } from "styled-components";

const NotFound = () => {
  return (
    <div>
      <NotFoundPageStyle />
      <Header />
      <Tag />
      <Text>404: 페이지를 찾을 수 없습니다.</Text>
    </div>
  );
};

export default NotFound;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  font-size: 1.5rem;
`;

const NotFoundPageStyle = createGlobalStyle`
  body {
  }
`;

const Tag = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.3rem;
  height: 3rem;
  background: #fff6a6;
  margin-bottom: 2rem;
`;

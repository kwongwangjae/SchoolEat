import React from "react";
import styled from "styled-components";
import SkIcon from "../../images/ui_img_1.png";
import { HiOutlineLockClosed } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Block>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Name>
            <IMG src={SkIcon} />
            SKU Cafeteria community
          </Name>
        </Link>
        <IconSize>
          <Link to="/Login" style={{ textDecoration: "none" }}>
            <HiOutlineLockClosed />
          </Link>
        </IconSize>
      </Block>
    </>
  );
};

export default Header;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2 rem;
  font-weight: bold;
  color: black;
`;

const IconSize = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0rem 0rem 0rem 0rem;
`;
const IMG = styled.img`
  width: 7.2rem;
  margin: 0.2rem 0rem 0.2rem 0rem;
`;
const Block = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.12rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

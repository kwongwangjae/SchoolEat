import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <>
      <Tag />
      <Block>
        <Div>
          로그인
          <LoginBlock>
            <Text>
              가입하신 <RedText>학번</RedText>으로 로그인 하세요.
              <Line />
            </Text>
            <LoginCheck>
              <Check>
                <InputId placeholder="아이디(학번)을 입력하세요" />
                <div />
                <InputPassword
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                />
              </Check>
              <Link to="/">
                <LoginButton>로그인</LoginButton>
              </Link>
              <Link to="/Membership">
                <CheckButton>회원가입</CheckButton>
              </Link>
            </LoginCheck>
          </LoginBlock>
        </Div>
      </Block>
    </>
  );
};

export default login;

const Tag = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.3rem;
  height: 3rem;
  background: #fff6a6;
  margin-bottom: 2rem;
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

const Div = styled.div`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
`;

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55rem;
  height: 30rem;
  border: 3px solid #bcbbbb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Text = styled.div`
  font-size: 1.3rem;
  margin-right: 25rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const RedText = styled.span`
  color: red;
`;

const Line = styled.div`
  border: 0.2px solid #000000;
  margin-bottom: 0.2rem;
`;

const InputId = styled.input`
  width: 25rem;
  height: 3rem;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const InputPassword = styled.input`
  width: 25rem;
  height: 3rem;
  font-size: 1.2rem;
`;

const LoginCheck = styled.div`
  display: flex;
`;

const Check = styled.div``;

const LoginButton = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  width: 7.3rem;
  height: 7.3rem;
  margin-left: 1rem;
  background: #fff6a6;
  border: 0;
`;
const CheckButton = styled.button`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  width: 7.3rem;
  height: 7.3rem;
  margin-left: 1rem;
  background: #fff6a6;
  border: 0;
`;

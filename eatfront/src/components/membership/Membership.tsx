import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Membership = () => {
  return (
    <>
      <Tag />
      <Block>
        <Div>
          회원가입
          <LoginBlock>
            <LoginCheck>
              <Check>
                <InputId placeholder="아이디(학번)을 입력하세요" />
                <div />
                <InputPassword placeholder="비밀번호를 입력하세요" />
                <div />
                <InputNickname placeholder="닉네임을 입력하세요" />
              </Check>
              <Link to="/Login">
                <MembershipButton>가입하기</MembershipButton>
              </Link>
            </LoginCheck>
          </LoginBlock>
        </Div>
      </Block>
    </>
  );
};

export default Membership;

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
  margin-bottom: 0.5rem;
`;

const InputNickname = styled.input`
  width: 25rem;
  height: 3rem;
  font-size: 1.2rem;
`;

const LoginCheck = styled.div`
  display: flex;
`;

const Check = styled.div``;

const MembershipButton = styled.button`
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  width: 7em;
  height: 11rem;
  margin-left: 1rem;
  background: #fff6a6;
  border: 0;
`;

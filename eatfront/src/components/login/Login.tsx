import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: any) => {
    event.preventDefault();

    const requestBody = {
      student_number: studentNumber,
      student_password: password,
    };

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // 로그인 성공 시 토스트 메시지 출력 후 mainpage로 이동
        showToast("로그인에 성공하였습니다.");
      })
      .catch((error) => {
        console.error("로그인 오류", error);
        // 로그인 실패 시 토스트 메시지 출력
        showToast("로그인에 실패하였습니다.");
      });
  };

  const handleStudentNumberChange = (event: any) => {
    setStudentNumber(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const showToast = (message: any) => {
    alert(message);
  };

  return (
    <>
      <Tag />
      <Block>
        <Div>
          로그인
          <LoginBlock>
            {/* 로그인 폼 */}
            <form onSubmit={handleLogin}>
              <Text>
                가입하신 <RedText>학번</RedText>으로 로그인 하세요.
                <Line />
              </Text>
              <LoginCheck>
                <Check>
                  <InputId
                    placeholder="아이디(학번)을 입력하세요"
                    value={studentNumber}
                    onChange={handleStudentNumberChange}
                  />
                  <div />
                  <InputPassword
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Check>
                <Link to="/">
                  <LoginButton type="submit">로그인</LoginButton>
                </Link>
                <Link to="/Membership">
                  <CheckButton>회원가입</CheckButton>
                </Link>
              </LoginCheck>
            </form>
          </LoginBlock>
        </Div>
      </Block>
    </>
  );
};

export default Login;

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

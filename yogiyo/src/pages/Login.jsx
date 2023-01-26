import React from "react";
import TopBar from "../components/TopBar";
import styled from "styled-components";
import Copyright from "../components/copyright";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <SwholeDiv>
      <TopBar></TopBar>
      <SSignupForm>
        <Simagelogo src={"img/logo-pink.png"} />
        <SInput required placeholder="이메일 주소 입력" />
        <SInputbottom placeholder="비밀번호 입력" />
        <SdivautoLogin>
          <input type="checkbox" />
          자동로그인
        </SdivautoLogin>
        <Sbutton
          type="submit"
          // onClick={() => {
          //   onSubmit();
          //   window.location.replace("/");
          // }}
        >
          로그인
        </Sbutton>
      </SSignupForm>{" "}
      <Simage
        onClick={() => {
          navigate("/SignUp");
        }}
        src={"img/signUp.png"}
        alt="signUpimage"
      />
      <Copyright />
    </SwholeDiv>
  );
}
const SwholeDiv = styled.div`
  background-color: rgba(249, 249, 249);
  height: 100%;
  width: auto;
`;
const SSignupForm = styled.form`
  margin: 100px auto auto auto;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  height: 400px;
  width: 500px;
  padding: 20px;
  /* gap: 15px;/ */
`;
const SInput = styled.input`
  border: 1px solid rgba(216, 216, 216);
  height: 40px;
  border-bottom: none;
  padding-left: 15px;
`;
const SInputbottom = styled.input`
  border: 1px solid rgba(216, 216, 216);
  height: 40px;
  padding-left: 15px;
`;
const Sspan = styled.span`
  font-size: 15px;
`;
const Sbutton = styled.button`
  margin-top: 20px;
  border: none;
  height: 40px;
  color: white;
  font-weight: 700;
  background-color: rgba(215, 215, 215);
  cursor: pointer;
`;
const Simage = styled.img`
  height: 50%;
  width: 40%;
  min-width: 500px;
  margin: -120px auto 40px auto;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const SdivautoLogin = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Simagelogo = styled.img`
  height: 50px;
  width: 120px;
  /* justify-content: center; */
  /* align-items: center; */
  display: flex;
  margin: -70px auto 50px auto;
`;

import React from "react";
import TopBar from "../components/TopBar";
import styled from "styled-components";
import Copyright from "../components/copyright";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    // Client-side validation
    if (!email || !password) {
      setError("Please enter a username and password");
      return;
    }
    try {
      // Send a request to the server with the username and password
      const response = await axios.post(
        "http://3.36.130.126/users/login",
        {
          email,
          password,
        }
        // {
        //   withCredentials: true,
        // }
      );

      // Get the token from the server response
      const token = response.data.token;

      // Set the token in a cookie
      setCookie("token", token, { path: "/StoreList" });

      // Redirect to the home page
      // ...
    } catch (error) {
      setError("존재하지 않는 회원정보입니다!");
    }
  }
  function handleLogout() {
    // Remove the token from the cookie
    setCookie("token", "", { path: "/", expires: new Date() });

    // Redirect to the login page
    // ...
  }
  return (
    <SwholeDiv>
      <TopBar />
      <SSignupForm onSubmit={handleSubmit}>
        <Simagelogo src={"img/logo-pink.png"} />
        <SInput
          required
          autoFocus
          placeholder="이메일 주소 입력(필수)"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <SInputbottom
          required
          type="password"
          placeholder="비밀번호 입력(필수)"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
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

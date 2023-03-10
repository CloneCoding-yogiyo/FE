import React from "react";
import TopBar from "../components/TopBar";
import styled from "styled-components";
import Copyright from "../components/copyright";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useCookies } from "react-cookie";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    // Client-side validation- 둘 중 하나가 공란일 때
    if (!email || !password) {
      setError("이메일과 패스워드를 모두 입력해주세요!");
      return;
    }
    try {
      // 서버에 email, password를 보내서 요청

      await axios
        .post(" http://jsmtmt.shop/users/login", {
          email,
          password,
        })
        .then((res) => {
          localStorage.setItem(
            "Authorization",
            res.headers.get("Authorization")
          );
          console.log(res);
          const username = res.data.username;
          console.log(username);
          localStorage.setItem("Username", username);
        });
      navigate(`/StoreList`);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("아이디/비밀번호가 올바르지 않습니다.");
      }
    }
  }
  // function handleLogout() {
  // Remove the token from the cookie
  // setCookie("token", "", { path: "/", expires: new Date() });
  // Redirect to the login page
  // ...
  // }
  return (
    <SwholeDiv>
      <TopBar />
      <SSignupForm onSubmit={handleSubmit}>
        <Simagelogo src={"img/logo-pink.png"} />
        <SInput
          // required
          autoFocus
          placeholder="이메일 주소 입력(필수)"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <SInputbottom
          // required
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
          //   navigate(`/StoreList`);
          // }}
        >
          로그인
        </Sbutton>
        <SerrorDiv>
          <span className="error">{error}</span>
        </SerrorDiv>
      </SSignupForm>{" "}
      <Simage
        onClick={() => {
          navigate("/SignUp");
        }}
        src={process.env.PUBLIC_URL + "/img/signUp.png"}
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
const SerrorDiv = styled.div`
  font-weight: bold;
  margin-top: 10px;
  font-size: 15px;
`;

import React from "react";
import TopBar from "../components/TopBar";
import axios from "axios";
import styled from "styled-components";
import { useState, useCallback } from "react";
import Copyright from "../components/copyright";
import "../App.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [username, setUserName] = useState("");

  ///유효성 검사 후 띄울 메세지
  const [usernameMessage, setUsernameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordconfirmMessage] = useState("");
  ///유효성검사시에 이용할 useState 초기값
  const [isUserName, setIsUserName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  ///1. 닉네임 유효성검사-2글자 이상
  const onChangeName = useCallback((e) => {
    setUserName(e.target.value);
    if (e.target.value.length < 2) {
      setUsernameMessage("2글자 이상 입력해주세요.");
      setIsUserName(false);
    } else {
      setUsernameMessage("올바른 형식입니다.");
      setIsUserName(true);
    }
  }, []);
  //2. 이메일 유효성검사-알파벳과숫자,@포함필수
  const onChangeEmail = useCallback((e) => {
    ///이메일정규식
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일형식을 확인해주세요!");
      setIsEmail(false);
    } else {
      setIsEmail(true);
      setEmailMessage("올바른 형식입니다.");
    }
  }, []);
  ///3. 패스워드 유효성검사-알파벳,숫자,특수문자 8자리이상
  const onChangePassword = useCallback((e) => {
    ///패스워드 정규식사용.
    const passwordRegex =
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "대문자+소문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("올바른 형식입니다. ");
      setIsPassword(true);
    }
  }, []);
  ///4. 비밀번호 재확인
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setConfirmpassword(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordconfirmMessage("올바르게 입력했습니다. ");
        setIsPasswordConfirm(true);
      } else {
        setPasswordconfirmMessage(
          "비밀번호가 일치하지 않습니다. 다시 확인해주세요."
        );
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  ///버튼 클릭시 회원가입 submit
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await axios({
          method: "post",
          url: "http://3.36.130.126/users/signup",
          data: { username: username, email: email, password: password },
        }).then((res) => {
          console.log("response:", res);
          if (res.status === 200) {
            alert("회원가입이 완료되었습니다");
            console.log("User profile", res.data.username, res.data.email);
            // router.push("/sign_up/profile_start");
          }
        });
      } catch (err) {
        console.error(err);
      }
    },
    [email, username, password]
  );

  return (
    <SwholeDiv>
      <TopBar />

      <SSignupForm onSubmit={onSubmit}>
        <Simagelogo src={"img/logo-pink.png"} />
        <SInput
          autoFocus
          required
          onChange={onChangeName}
          value={username}
          placeholder="닉네임 입력(특수문자이용은 불가능합니다!)"
        />
        {username.length > 0 && (
          <Sspan className={`message ${isUserName ? "success" : "error"}`}>
            {usernameMessage}
          </Sspan>
        )}
        <SInput
          required
          onChange={onChangeEmail}
          value={email}
          placeholder="이메일 주소 입력"
        />
        {email.length > 0 && (
          <Sspan className={`message ${isEmail ? "success" : "error"}`}>
            {emailMessage}
          </Sspan>
        )}
        <SInput
          type="password"
          required
          onChange={onChangePassword}
          value={password}
          placeholder="비밀번호 입력(대문자+소문자+특수문자 조합으로 8자리 이상 입력해주세요!)"
        />
        {password.length > 0 && (
          <Sspan className={`message ${isPassword ? "success" : "error"}`}>
            {passwordMessage}
          </Sspan>
        )}
        <SInputbottom
          type="password"
          required
          onChange={onChangePasswordConfirm}
          value={confirmpassword}
          placeholder="비밀번호 재확인"
        />
        {confirmpassword.length > 0 && (
          <Sspan
            className={`message ${isPasswordConfirm ? "success" : "error"}`}
          >
            {passwordConfirmMessage}
          </Sspan>
        )}
        <Sbutton
          type="submit"
          disabled={!(isUserName && isEmail && isPassword && isPasswordConfirm)}
        >
          회원가입
        </Sbutton>
      </SSignupForm>
      <Copyright />
    </SwholeDiv>
  );
}
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
const SwholeDiv = styled.div`
  background-color: rgba(249, 249, 249);
  height: 100%;
  width: auto;
`;
const Simagelogo = styled.img`
  height: 50px;
  width: 120px;
  /* justify-content: center; */
  /* align-items: center; */
  display: flex;
  margin: -70px auto 50px auto;
`;

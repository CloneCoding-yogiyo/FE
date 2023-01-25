import React from "react";
import TopBar from "../components/TopBar";
import axios from "axios";
import styled from "styled-components";
import { useState, useCallback } from "react";
import "../App.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [username, setUserName] = useState("");
  ///useCallback 을 이용한 이유는 컴포넌트 렌더링 최적화를 위해서입니다
  const onChange = useCallback((e) => {
    setConfirmpassword(e.target.value);
  }, []);
  ///오류메시지 띄우기
  const [usernameMessage, setUsernameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordconfirmMessage] = useState("");
  ///유효성검사 초기값
  const [isUserName, setIsUserName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  ///이름 유효성검사-2글자 이상
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
  const onChangeEmail = useCallback((e) => {
    ///이메일정규식(알파벳과숫자,@포함필수)
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일형식을 확인해주세요!");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 형식입니다.");
    }
  });
  const onChangePassword = useCallback((e) => {
    ///패스워드 정규식사용.
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("올바른 형식입니다. ");
      setIsPassword(true);
    }
  }, []);

  ///버튼 클릭시 회원가입 submit
  const onSubmit = useCallback();
  return (
    <>
      <TopBar></TopBar>

      <form onSubmit={onSubmit}>
        <SusernameInput
          autoFocus
          required
          onChange={onChangeName}
          value={username}
          placeholder="사용자 이름 입력(필수)"
        />
        {username.length > 0 && (
          <span className={`message ${isUserName ? "success" : "error"}`}>
            {usernameMessage}
          </span>
        )}

        <SemailInput
          required
          onChange={onChangeEmail}
          value={email}
          placeholder="이메일 주소 입력(필수)"
        />
        {email.length > 0 && (
          <span className={`message ${isEmail ? "success" : "error"}`}>
            {emailMessage}
          </span>
        )}

        <input
          type="password"
          required
          onChange={onChangePassword}
          value={password}
          placeholder="비밀번호 입력(필수)"
        />
        {password.length > 0 && (
          <span className={`message ${isPassword ? "success" : "error"}`}>
            {passwordMessage}
          </span>
        )}
        <input
          type="password"
          required
          onChange={onChange}
          value={confirmpassword}
          placeholder="비밀번호 재확인"
        />
        <button
          type="submit"
          onClick={() => {
            onSubmit();
            window.location.replace("/");
          }}
        >
          {" "}
          회원가입{" "}
        </button>
      </form>
    </>
  );
}

const SusernameInput = styled.input``;
const SemailInput = styled.input``;

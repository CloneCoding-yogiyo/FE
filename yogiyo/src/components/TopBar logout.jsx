import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function TopBarLogout() {
  const navigate = useNavigate();

  function handleLogout() {
    const authorization = localStorage.getItem("Authorization");
    localStorage.clear(authorization);
    navigate("/");
  }

  return (
    <StTopBarBoxs>
      <StTopBarBox1
        onClick={() => {
          navigate(`/StoreList`);
        }}
      >
        <Simage
          src={process.env.PUBLIC_URL + "/img/logo-yogiyo.png"}
          alt="logo"
        />
      </StTopBarBox1>

      <StTopBarBox2 onClick={handleLogout}> 로그아웃 </StTopBarBox2>
    </StTopBarBoxs>
  );
}

const StTopBarBoxs = styled.div`
  width: 100%;
  height: 79px;
  color: white;
  margin-top: 0;
  background-color: #fa0050;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StTopBarBox1 = styled.div`
  margin-left: 15%;
  font-weight: 900;
  cursor: pointer;
  font-size: 30px;
`;
const StTopBarBox2 = styled.div`
  margin-right: 15%;
  padding: 7px 0;
  width: 150px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border: 1px solid #ea7266;
  border-radius: 2px;
`;
const Simage = styled.img`
  height: 40px;
  width: 100px;
`;

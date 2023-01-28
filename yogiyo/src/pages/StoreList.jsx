import React from "react";
import TopBarLogout from "../components/TopBar logout";
import Store from "../components/Store";
// import SearchHeader from '../components/SearchHeader';
import Copyright from "../components/copyright";
import styled from "styled-components";
export default function StoreList() {
  return (
    <SWholeDiv>
      <TopBarLogout /> <Simagelogo src={"img/logo-pink.png"} />
      <div>
        {/* TODO: 쿼리의 개념이 들어감. */}
        {/* <SearchHeader></SearchHeader> */}
      </div>
      <div>
        {/* 가게 리스트 */}
        <Store />
      </div>
      <Copyright />
    </SWholeDiv>
  );
}

const SWholeDiv = styled.div`
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
  margin: 30px;
`;

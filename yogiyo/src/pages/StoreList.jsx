import React, { useEffect } from "react";
import TopBarLogout from "../components/TopBar logout";
import Store from "../components/Store";
// import SearchHeader from '../components/SearchHeader';
import Copyright from "../components/copyright";
import styled from "styled-components";
import { defaultCart } from "../redux/modules/menuListSlice";
import { useDispatch } from "react-redux";

export default function StoreList() {
  const dispatch = useDispatch();
  console.log();
  useEffect(() => {
    dispatch(defaultCart());
  }, []);

  return (
    <SWholeDiv>
      <TopBarLogout />
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

import React, { useEffect, useState } from 'react';
import TopBarLogout from '../components/TopBar logout';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../components/MenuList';
import CartList from '../components/CartList';
import MenuList from '../components/MenuList';
import { useSelector } from 'react-redux';
import Copyright from '../components/copyright';
import axios from 'axios';

// import Store from '../components/Store';

export default function OrderCheck() {
  // 총가격...  각각의 amount*price
  const globaladdCart = useSelector((state) => state.menuList.menuList);
  let totalprice = 0;
  for (let i = 0; i < globaladdCart.length; i++) {
    totalprice = totalprice + globaladdCart[i].price * globaladdCart[i].amount;
  }

  const navigate = useNavigate();
  const param = useParams();

  return (
    <SwholeDiv>
      <TopBarLogout />
      <StBoxs>
        <StBox>
          {/*FIXME: 메뉴리스트들이 붙혀질것.. */}

          <MenuList />
        </StBox>
        <SCartArea>
          <StOrderBox>
            <SorderList>주문표</SorderList>
            {/* <div>주문표에 담긴 메뉴가 없습니다.</div> */}
            <StOrderMenuBox>
              <CartList />
              <hr />
            </StOrderMenuBox>
            <Sdelivery> 배달요금 1000원 별도</Sdelivery>
            <Stotal>합계: {totalprice}원</Stotal>
          </StOrderBox>

          {/* FIXME: ADD핸들 기능부터 만들기. */}
          <SOrderConfirm>
            이용약관, 개인정보 수집 및 이용, 개인정보 제3자 제공 , 전자금융거래
            이용약관, 만 14세 이상 이용자 내용 확인하였으며 결제에 동의합니다.
            <SOrderBtn
              onClick={() => {
                navigate(`/StoreList/OrderComplete/${param.Id}`);
                axios.post(
                  `http://jsmtmt.shop/stores/${param.Id}`,
                  globaladdCart,
                  {},
                  {
                    withCredentials: true,
                  }
                );
              }}
            >
              결제하기
            </SOrderBtn>
          </SOrderConfirm>
        </SCartArea>
      </StBoxs>
      <Copyright />
    </SwholeDiv>
  );
}
const SwholeDiv = styled.div`
  background-color: rgba(249, 249, 249);
  height: 100%;
  width: auto;
`;
const StBoxs = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: flex-start;
  margin: auto;
  /* border: 1px solid #d9d9d9; */
`;

const StBox = styled.div`
  /* margin-right: 10px; */
  width: 680px;
  height: 100%;
  /* border: 1px solid #d9d9d9; */
`;
const SorderList = styled.div`
  background-color: rgba(39, 39, 39);
  padding: 12px;
  font-size: 18px;
  text-align: left;
  color: white;
  font-weight: bold;
`;

const StOrderBox = styled.div`
  width: 340px;
  height: fit-content;
  border: 1px solid #d9d9d9;
  position: sticky;
  top: 10px;
  background-color: rgba(255, 248, 235);
`;

const StOrderMenuBox = styled.div`
  /* margin-right: 10px; */
  width: 342px;
  /* height: 122px; */
  max-height: 400px;
  /* border: 1px solid #d9d9d9; */
  overflow-y: auto;
`;
const SOrderConfirm = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  margin-top: 10px;
  width: 340px;
`;
const SCartArea = styled.div`
  margin-left: 11px;
  display: flex;
  flex-direction: column;
`;
const SOrderBtn = styled.button`
  margin-top: 20px;
  border: none;
  height: 40px;
  width: 340px;
  font-size: 20px;
  color: white;
  font-weight: 700;
  background-color: #fa0050;
  cursor: pointer;
`;
const Stotal = styled.div`
  color: #fa0050;
  font-weight: bold;
  margin: 10px;
  text-align: right;
  font-size: 19px;
`;
const Sdelivery = styled.div`
  color: gray;
  text-align: right;
  font-size: 15px;
  margin: 10px;
`;

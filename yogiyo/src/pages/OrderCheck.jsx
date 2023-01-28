import React from "react";
import TopBarLogout from "../components/TopBar logout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Menu from "../components/MenuList";
import CartList from "../components/CartList";
import MenuList from "../components/MenuList";
import { useSelector } from "react-redux";
// import Store from '../components/Store';

export default function OrderCheck() {
  // 총가격...  각각의 amount*price
  const globaladdCart = useSelector((state) => state.menuList.menuList);
  let totalprice = 0;
  for (let i = 0; i < globaladdCart.length; i++) {
    totalprice = totalprice + globaladdCart[i].price * globaladdCart[i].amount;
  }
  const navigate = useNavigate();
  return (
    <div>
      <TopBarLogout />
      <div>
        <input></input>
      </div>
      <StBoxs>
        <StBox>
          <div className="text-300xl">롯데리아-진주금산점</div>
          {/*FIXME: 메뉴리스트들이 붙혀질것.. */}

          <MenuList></MenuList>
          {/* <Store></Store> */}
        </StBox>

        <StOrderBox>
          <div>주문표</div>
          <div>주문표에 담긴 메뉴가 없습니다.</div>
          <CartList></CartList>
          <div> 배달요금 1000원 별도</div>
          <div>합계: {totalprice + 1000}원</div>
          {/* FIXME: ADD핸들 기능부터 만들기. */}
          <div
            onClick={() => {
              navigate(`/StoreList/OrderComplete`);
            }}
          >
            주문하기
          </div>
        </StOrderBox>
      </StBoxs>
    </div>
  );
}

const StBoxs = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  align-items: center;

  border: 1px solid #d9d9d9;
`;

const StBox = styled.div`
  flex-basis: 70%;

  margin-top: 15px;
  margin-left: 5px;
  margin-right: 5px;

  width: 488px;
  height: 106px;
  border: 1px solid #d9d9d9;
`;

const StOrderBox = styled.div`
  flex-basis: 30%;

  margin-top: 15px;
  margin-left: 5px;
  margin-right: 5px;

  width: 488px;
  height: 106px;
  border: 1px solid #d9d9d9;
`;

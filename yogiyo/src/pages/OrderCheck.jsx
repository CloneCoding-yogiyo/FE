import React from "react";
import TopBarLogout from "../components/TopBar logout";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
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
  const param = useParams();
  console.log(param);
  return (
    <div>
      <TopBarLogout />
      <div>
        <input></input>
      </div>
      <StBoxs>
        <StBox>
          <StLeftTitleBox className="text-300xl">
            롯데리아-진주금산점
          </StLeftTitleBox>

          {/*FIXME: 메뉴리스트들이 붙혀질것.. */}
          <StLeftStoreInfoBox>
            <div>이미지</div>
            <div>
              <div>별점</div>
              <div>최소주문금액</div>
              <div>신용카드,현금,요기서 결제</div>
              <div>배달시간35분~45분</div>
            </div>
          </StLeftStoreInfoBox>

          <MenuList></MenuList>
          {/* <Store></Store> */}
        </StBox>

        <StOrderBox>
          <div>
            <div>주문표</div>
          </div>
          {/* <div>주문표에 담긴 메뉴가 없습니다.</div> */}
          <StOrderMenuBox>
            <CartList></CartList>
          </StOrderMenuBox>
          <div> 배달요금 1000원 별도</div>
          <div>합계: {totalprice + 1000}원</div>
          {/* FIXME: ADD핸들 기능부터 만들기. */}
          <div
            onClick={() => {
              navigate(`/StoreList/OrderComplete/${param.Id}`);
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

const StLeftTitleBox = styled.div`
  width: 680px;
  height: 43px;
  border: 1px solid #d9d9d9;
`;
const StLeftStoreInfoBox = styled.div`
  margin-top: -1px;

  display: flex;
  align-items: center;
  width: 680px;
  height: 129px;
  border: 1px solid #d9d9d9;
`;

const StOrderBox = styled.div`
  width: 340px;
  height: 583px;
  border: 1px solid #d9d9d9;
  position: sticky;
  top: 10px;
`;

const StOrderMenuBox = styled.div`
  /* margin-right: 10px; */
  width: 342px;
  /* height: 122px; */
  max-height: 400px;
  border: 1px solid #d9d9d9;
  overflow-y: auto;
`;

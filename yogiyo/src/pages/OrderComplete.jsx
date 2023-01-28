import React from "react";
import { useSelector } from "react-redux";
import TopBarLogout from "../components/TopBar logout";
import styled from "styled-components";
import Copyright from "../components/copyright";

export default function OrderComplete() {
  const globaladdCart = useSelector((state) => state.menuList.menuList);
  let totalprice = 0;
  for (let i = 0; i < globaladdCart.length; i++) {
    totalprice = totalprice + globaladdCart[i].price * globaladdCart[i].amount;
  }

  return (
    <SwholeDiv>
      <TopBarLogout />
      <Sbodybox>
        <Simagelogo src={process.env.PUBLIC_URL + "/img/logo-pink.png"} />
        {/* ///여기에 유저정보 어떻게 넣는지 모르겠숨다// */}
        <SorderDetail>
          <SorderDoneUsername>...이채정고객님 </SorderDoneUsername>
          <SorderDone> 주문이 완료되었습니다!</SorderDone>
          <SMenuh3>주문 내역</SMenuh3>{" "}
          <SMenuandTotal>
            {globaladdCart?.map((cartMenu) => {
              console.log(globaladdCart);
              return (
                <>
                  <div>
                    <SimageMenu
                      src={process.env.PUBLIC_URL + "/img/example.png"}
                    />
                    {/* <img
                        src={cartMenu.imageUrl}
                        class='card-img-top'
                        alt='...'
                        width='10px'
                        height='500px'
                      ></img> */}
                    <SorderMenu>
                      <Sspan>
                        {cartMenu.menuName} x {cartMenu.amount}개
                      </Sspan>
                      <Sspan> {cartMenu.price}원</Sspan>
                    </SorderMenu>{" "}
                    배달료: 1000원
                  </div>
                </>
              );
            })}

            <div>
              <hr />
              <StotalAmount>
                <Stotal>총 결제금액 </Stotal>
                <Samount>{totalprice}원</Samount>
              </StotalAmount>
            </div>
          </SMenuandTotal>
        </SorderDetail>
      </Sbodybox>
      <Copyright />
    </SwholeDiv>
  );
}
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
  margin: auto;
`;
const Sbodybox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto 70px auto;
  /* border: 1px solid black; */
  width: 50%;
`;
const SorderDoneUsername = styled.span`
  display: flex;
  flex-direction: column;
  /* display: flex; */
  /* text-align: left; */
  /* align-items: left; */
  /* justify-content: left; */
  color: rgba(250, 0, 80);
  font-weight: 700;
  font-size: 30px;
`;
const SorderDone = styled.span`
  display: flex;
  flex-direction: column;
  /* text-align: left; */
  /* align-items: left; */
  /* justify-content: left; */
  color: #414141;
  font-weight: 700;
  font-size: 30px;
`;
const SMenuh3 = styled.h3`
  color: rgba(43, 43, 43);
  border: 1px solid rgba(221, 221, 221);

  display: flex;
  margin: 24px;
  background-color: rgba(230, 230, 230);
`;
const StotalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgba(250, 0, 80);
`;
const Stotal = styled.h4`
  margin-left: 35px;
`;
const Samount = styled.h4`
  margin-right: 35px;
`;
const SorderDetail = styled.div`
  margin-top: 50px;
`;
const SimageMenu = styled.img`
  height: 200px;
  width: 200px;
`;
const SorderMenu = styled.div`
  justify-content: space-between;
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
`;
const SMenuandTotal = styled.div`
  margin-top: 20px;
  border: 1px solid rgba(221, 221, 221);
  padding: 10px;
  background-color: rgba(255, 248, 235);
`;
const Sspan = styled.span`
  margin-bottom: 20px;
  color: rgba(43, 43, 43);
`;

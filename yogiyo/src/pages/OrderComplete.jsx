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
        <SorderDoneUsename>...고객님 </SorderDoneUsename>
        <SorderDone>의 주문완료이 완료되었습니다!</SorderDone>
        <div>
          메뉴:
          {globaladdCart?.map((cartMenu) => {
            console.log(globaladdCart);
            return (
              <>
                <div>
                  {/* <img
                        src={cartMenu.imageUrl}
                        class='card-img-top'
                        alt='...'
                        width='10px'
                        height='500px'
                      ></img> */}

                  <div>
                    <div> {cartMenu.menuName}</div>
                  </div>

                  <div>
                    <div>{cartMenu.amount}</div>
                  </div>

                  <div>
                    <div>{cartMenu.price}원</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div>
          <div>합계:{totalprice}원</div>
        </div>{" "}
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
  margin: 50px auto auto auto;
  border: 1px solid black;
  width: 70%;
`;
const SorderDoneUsename = styled.span`
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
  color: rgba(51, 51, 51);
  font-weight: 700;
  font-size: 30px;
`;

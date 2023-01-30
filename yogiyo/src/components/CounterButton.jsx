import React, { useState } from "react";
import styled from "styled-components";

import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";

import { useDispatch } from "react-redux";
import {
  deleteCart,
  upCountCart,
  downCountCart,
} from "../redux/modules/menuListSlice";

export default function CounterButton(props) {
  // const globaladdCart = useSelector((state) => state.menuList.menuList);
  // console.log(globaladdCart);
  const [amount, setAmount] = useState(1);
  // console.log(item);
  const dispatch = useDispatch();
  console.log(props);

  //+버튼
  const handledup = (id) => {
    setAmount(amount + 1);

    dispatch(upCountCart(id));
    // console.log(globaladdCart);
  };

  const handledDown = (id) => {
    // setAmount(amount + 1);

    dispatch(downCountCart(id));
    // console.log(globaladdCart);
  };

  //삭제 기능
  const handledDelete = (id) => {
    dispatch(deleteCart(id));
  };

  return (
    <>
      <StCartList>
        <StCartListMenu>
          <StCartListDelete
            onClick={() => {
              handledDelete(props.item.id);
            }}
          >
            ×
          </StCartListDelete>{" "}
          <div>{props.item.menuName}</div> {/* 삭제기능~ */}
          <div>{props.item.price * props.item.amount}원</div>
        </StCartListMenu>
        <StCartListControl>
          <StCartListControlBox
            onClick={() => {
              if (props.item.amount > 1) {
                setAmount(props.item.amount - 1);
                handledDown(props.item.id);
              } else {
                handledDelete(props.item.id);
              }
            }}
          >
            <HiMinus />
          </StCartListControlBox>
          <StCartListControlBox2>{props.item.amount}</StCartListControlBox2>
          <StCartListControlBox
            onClick={() => {
              handledup(props.item.id);
            }}
          >
            <BsPlusLg />
          </StCartListControlBox>
        </StCartListControl>
      </StCartList>
    </>
  );
}

const StCartList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10pt;
  align-items: center;
  padding: 25px;
  height: 10px;
`;

const StCartListMenu = styled.div`
  flex-basis: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  background-color: transparent;
  padding: 10px;
  font-size: 11pt;
`;

const StCartListControl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-basis: 30%;
  font-weight: bold;
  /* height: 40px; */
  /* margin: 0 20px 0 20px; */
`;

const StCartListControlBox2 = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 22%;
  background-color: transparent;
`;

const StCartListControlBox = styled.div`
  border: 1px solid #fa0050;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 22%;
  background-color: white;
  color: #fa0050;
  cursor: pointer;
`;

const StCartListDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-basis: 10%; */
  border: 1px solid gray;
  height: 17px;
  width: 20px;
  padding-bottom: 3px;
  background-color: white;
  font-size: 25px;
  cursor: pointer;
  color: gray;
`;

import React, { useState } from 'react';
import styled from 'styled-components';

import { BsPlusLg } from 'react-icons/bs';
import { HiMinus } from 'react-icons/hi';

import { useDispatch } from 'react-redux';
import {
  deleteCart,
  upCountCart,
  downCountCart,
} from '../redux/modules/menuListSlice';
import { FaWonSign } from 'react-icons/fa';

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
          <div>{props.item.menuName}</div> {/* 삭제기능~ */}
          <StCartListDelete
            onClick={() => {
              handledDelete(props.item.id);
            }}
          >
            ×
          </StCartListDelete>
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
  padding: 20px;
  height: 40px;
`;

const StCartListMenu = styled.div`
  flex-basis: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  height: 40px;
  background-color: #ffffffe0;
  padding: 20px 60px 20px;
  font-family: 'NanumSquareRoundBold';
  font-size: 10pt;
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
  border-radius: 10px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 22%;
  background-color: #ffffffe0;
`;

const StCartListControlBox = styled.div`
  border: 1px solid #fa0050;
  height: 24px;
  width: 24px;
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
  flex-basis: 10%;
  border: 1px solid gray;
  height: 24px;
  width: 24px;

  background-color: white;
  font-size: 25px;
  cursor: pointer;
`;

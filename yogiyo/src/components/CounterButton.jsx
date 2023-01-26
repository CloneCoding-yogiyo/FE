import React, { useState } from 'react';
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';
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
          <div>{props.item.menuName}</div>{' '}
          <div>
            <FaWonSign />
            {props.item.price * props.item.amount}
          </div>
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
        <StCartListDelete
          onClick={() => {
            handledDelete(props.item.id);
          }}
        >
          <BsTrash />
        </StCartListDelete>
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
  font-size: 15pt;
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
  border-radius: 10px;
  border-style: solid;
  border-color: white;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 22%;
  background-color: #232323c9;
  color: white;
  cursor: pointer;
  &:hover {
    border: solid 2px #ffe600e2;
    background-color: #ffe600e2;
    transition: all 300ms ease;
    /* transform: rotate(-30deg) scale(1.2); */
  }
`;

const StCartListDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 10%;
  border-radius: 10px;
  height: 40px;
  background-color: white;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    border: solid 2px #ffe600e2;
    background-color: #ffe600e2;
    transition: all 300ms ease;
    /* transform: rotate(-30deg) scale(1.2); */
  }
`;

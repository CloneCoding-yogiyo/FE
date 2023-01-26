// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../redux/modules/menuListSlice';
import CounterButton from './CounterButton';

export default function CartList() {
  const dispatch = useDispatch();
  const globaladdCart = useSelector((state) => state.menuList.menuList);
  //plus카운트 props로 보내는작업중..
  // console.log(globaladdCart);
  // const plusAmount = (id) => {
  //   const changeTest = globaladdCart.map((x) => {
  //     if (x.id === id) {
  //       x.amount = x.amount + 1;
  //       return x;
  //     }
  //     return x;
  //   });
  //   dispatch(updateCart(changeTest));
  // };
  return (
    <div>
      {globaladdCart?.map((menu) => {
        // console.log(menu);
        return (
          <div key={menu.id}>
            {/*  */}
            <CounterButton
              item={menu} /*plusAmount={plusAmount}*/
            ></CounterButton>
          </div>
        );
      })}
    </div>
  );
}

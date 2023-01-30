// import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../redux/modules/menuListSlice";
import CounterButton from "./CounterButton";

export default function CartList() {
  const dispatch = useDispatch();
  const globaladdCart = useSelector((state) => state.menuList.menuList);

  return (
    <div>
      {/* array에 filter이용해서 storename 가져오기 */}
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

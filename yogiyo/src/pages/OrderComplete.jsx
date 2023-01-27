import React from 'react';
import { useSelector } from 'react-redux';

export default function OrderComplete() {
  const globaladdCart = useSelector((state) => state.menuList.menuList);

  return (
    <div>
      <div>주문완료</div>
    </div>
  );
}

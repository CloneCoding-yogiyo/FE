import React from 'react';
import { useSelector } from 'react-redux';

export default function OrderComplete() {
  const globaladdCart = useSelector((state) => state.menuList.menuList);

  return (
    <div>
      <div>주문완료</div>
      <div>
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
    </div>
  );
}

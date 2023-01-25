//#1.리덕스 툴킷 크리에이터슬라이스 임포트 하기
import { createSlice } from '@reduxjs/toolkit';

//#2. 초기값 설정하기
const initialState = {
  menuList: [
    // {
    //   count: 1,
    // },
  ],
};

//#3. 여기가 툴킷 - 액션벨류,함수로직(리듀서+액션크리에이터)
const menuListSlice = createSlice({
  name: 'addCart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const addedIdx = state.menuList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (addedIdx === -1) {
        state.menuList.push({ ...action.payload, amount: 1 });
      }
      // else {
      //   state.menuList[addedIdx].amount += 1;
      // }
    },
    deleteCart: (state, action) => {
      return {
        ...state,
        menuList: state.menuList.filter(
          (menuList) => menuList.id !== action.payload
        ),
      };
    },

    upCountCart: (state, action) => {
      return {
        ...state,
        menuList: state.menuList.map((menu) => {
          if (menu.id === action.payload) {
            return { ...menu, amount: menu.amount + 1 };
          }
          return menu;
        }),
      };
    },
    downCountCart: (state, action) => {
      return {
        ...state,
        menuList: state.menuList.map((menu) => {
          if (menu.id === action.payload) {
            return { ...menu, amount: menu.amount - 1 };
          }
          return menu;
        }),
      };
    },
  },
});

// #4. 익스포트하기
export const { addCart, deleteCart, upCountCart, downCountCart } =
  menuListSlice.actions;
export default menuListSlice.reducer;

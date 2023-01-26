//#1. 컨피그 스토어 임포트
import { configureStore } from '@reduxjs/toolkit';

//#2. 리덕스 툴킷 모듈 임포트 모듈 생기면 계속 추가혐됨
import menuList from '../modules/menuListSlice';
// import 모듈명2(슬라이스제외) from '../modules/모듈명2Slice';

//#3 configureStore
const store = configureStore({
  reducer: { menuList: menuList },
});
export default store;

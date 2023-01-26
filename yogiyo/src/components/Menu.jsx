// import styled from 'styled-components';
// import AddCart from '../components/AddCart';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BiWon } from 'react-icons/bi';
// import { useDispatch } from 'react-redux';
// import { addCart } from '../redux/modules/menuListSlice';
// // import menuListReducer from '../redux/modules/menuListReducer';

// export default function Menu() {
//   //조회...
//   const dispatch = useDispatch();
//   const [menuLists, setMenuLists] = useState(null);
//   const [addedIds, setAddedIds] = useState([]);

//   //FIXME:
//   // const handleAdd = (menu) => {
//   //   const addedIdx = addedIds.findIndex((id) => id === menu.id);
//   //   if (addedIdx === -1) {
//   //     dispatch(addCart({ ...menu, amount: 1 }));
//   //     setAddedIds([...addedIds, menu.id]);
//   //   } else {
//   //     dispatch(incrementAmount(menu.id));
//   //   }
//   // };
//   // const incrementAmount = (id) => {
//   //   return {
//   //     type: 'increment',
//   //     payload: id,
//   //   };
//   // };

//   const fetchTodos = async () => {
//     // const { data } = await axios.get('http://localhost:3001/MenuList');
//     const { data } = await axios.get('http://13.209.12.254/store/menus');
//     // console.log(data);
//     setMenuLists(data);
//   };

//   useEffect(() => {
//     setMenuLists();
//     fetchTodos();
//   }, []);
//   // console.log(menuLists);

//   return (
//     <div>
//       {/* <StScrollHorizontal> */}
//       <div>
//         {/* <div class="row row-cols-auto"> */}
//         {menuLists?.map((menuList) => {
//           // console.log(menuList);
//           return (
//             <div key={menuList.id}>
//               <div>
//                 <div>
//                   <img src={menuList.imageUrl} alt='...'></img>
//                   <div>
//                     <StCardTitle>
//                       <p>{menuList.menuName}</p>
//                     </StCardTitle>
//                     <StCardText>
//                       <p>
//                         <BiWon />
//                         {menuList.price}
//                       </p>
//                       <StAddCartButton
//                       // onClick={() => {
//                       //   handleAdd(menuList);
//                       // }}
//                       >
//                         {' '}
//                         <AddCart />
//                       </StAddCartButton>
//                     </StCardText>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//         <StEmptyBox>
//           <div>{/* 메뉴 스크롤을 위핸 빈 박스 생성 */}</div>
//         </StEmptyBox>
//       </div>
//       {/* </StScrollHorizontal> */}
//     </div>
//   );
// }

// const StAddCartButton = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const StCardTitle = styled.p`
//   text-align: center;
//   font-weight: bold;
//   font-size: 18pt;
// `;

// const StCardText = styled.p`
//   text-align: center;
//   font-weight: bold;
//   color: #868686;
//   font-family: 'NanumSquareRoundBold';
// `;

// const StEmptyBox = styled.div`
//   display: flex;
//   height: 400px;
// `;

// // 가로 스크롤
// // const StScrollHorizontal = styled.div`
// //   display: flex;
// //   /* width: 500px; */
// //   /* padding: 20px; */
// //   overflow: scroll;
// //   color: #112031;
// //   background: #f0d9ff;
// //   border: 1px solid #000;
// //   /* 가로 스크롤 */
// //   overflow: auto;
// //   white-space: nowrap;
// //   overflow-x:auto;
// //    font-size:0;
// // `;

import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/modules/menuListSlice';
// import { addCart } from '../redux/modules/menuListSlice';
export default function Menu() {
  const param = useParams();

  //조회...
  // const navigate = useNavigate();
  const [stores, setStores] = useState(null);
  const [StoreName, setStoreName] = useState(null);

  //추가 기능.
  const dispatch = useDispatch();

  const [addedIds, setAddedIds] = useState([]);
  //FIXME:
  const handleAdd = (menu) => {
    const addedIdx = addedIds.findIndex((id) => id === menu.id);
    if (addedIdx === -1) {
      dispatch(addCart({ ...menu, amount: 1 }));
      setAddedIds([...addedIds, menu.id]);
    } else {
      dispatch(incrementAmount(menu.id));
    }
  };
  const incrementAmount = (id) => {
    return {
      type: 'increment',
      payload: id,
    };
  };

  //FIXME:
  const fetchTodos = async () => {
    //FIXME: 서버연결시
    const { data } = await axios.get(`http://jsmtmt.shop/stores/${param.Id}`, {
      headers: { Authorization: localStorage.getItem('Authorization') },
    });

    // const { data } = await axios.get("http://localhost:3001/MenuList");
    // const { data } = await axios.get('http://3.36.130.126/stores');
    // console.log(data.storeMenu);

    // console.log(data.map((item) => item.data));
    // setStores(data.map((item) => item.data)); //로컬...
    // setStoreName(data.map((item) => item.data));
    setStoreName(data.data.storeName);

    setStores(data.data.storeMenu);
    console.log(data.data.storeName);
  };

  useEffect(() => {
    setStores();
    fetchTodos();
  }, []);
  // console.log(stores);

  return (
    <div>
      <div>{StoreName}</div>
      <StMenuBox>
        <div>메뉴</div>
        <div>리뷰 (이거 할건가요 진짜롱?)</div>
      </StMenuBox>
      <StBoxs>
        {stores?.map((store) => {
          // console.log(store);
          return (
            <StBox
              key={store.id}
              onClick={() => {
                handleAdd(store);
              }}
            >
              {/* <img
                  src={store.imageUrl}
                  alt='...'
                ></img> */}
              <div>
                <SMenuname>{store.menuName}</SMenuname>
                <p>{store.price}</p>
              </div>{' '}
              <SimageMenu src={process.env.PUBLIC_URL + '/img/example.png'} />
            </StBox>
          );
        })}
      </StBoxs>
    </div>
  );
}

const StBoxs = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  text-align: center;
  background-color: white;
`;

const StBox = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  cursor: pointer;
  margin-top: -1px;
  width: 680px;
  height: 90px;
  border: 1px solid #d9d9d9;
  justify-content: space-between;
`;

const StMenuBox = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  cursor: pointer;
  margin-top: -1px;
  width: 680px;
  height: 40px;
  border: 1px solid #d9d9d9;
  background-color: white;
`;
const SimageMenu = styled.img`
  height: 100px;
  width: 100px;
`;
const SMenuname = styled.span`
  font-weight: bold;
`;

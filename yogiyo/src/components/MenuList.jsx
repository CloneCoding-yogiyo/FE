import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/modules/menuListSlice';
// import { addCart } from '../redux/modules/menuListSlice';
export default function Menu() {
  //조회...
  // const navigate = useNavigate();
  const [stores, setStores] = useState(null);

  //추가 기능.
  const dispatch = useDispatch();
  const [menuLists, setMenuLists] = useState(null);

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
    const { data } = await axios.get('http://localhost:3001/MenuList');
    // const { data } = await axios.get('http://13.209.12.254/store/menus');
    console.log(data);
    setStores(data);
  };

  useEffect(() => {
    setStores();
    fetchTodos();
  }, []);
  // console.log(stores);

  return (
    <div>
      요기요 등록음식점
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
              <div>이미지</div>
              <div>
                <p>{store.menuName}</p>
                <p>{store.price}</p>
              </div>
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
  padding-left: 10%;
  padding-right: 10%;
`;

const StBox = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  cursor: pointer;

  margin-top: 15px;
  margin-left: 5px;
  margin-right: 5px;

  width: 488px;
  height: 106px;
  border: 1px solid #d9d9d9;
`;
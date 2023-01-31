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
  const [storeScore, setStoreScore] = useState(null);
  const [storeImg, setStoreImg] = useState(null);
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
    setStoreScore(data.data.score);
    setStores(data.data.storeMenu);
    setStoreImg(data.data.imageUrl);
    console.log(data.data);
  };

  useEffect(() => {
    setStores();
    fetchTodos();
  }, []);
  // console.log(stores);

  return (
    <div>
      <StBox1>
        <StLeftTitleBox className='text-300xl'> {StoreName}</StLeftTitleBox>
        <StLeftStoreInfoBox>
          {/* <SimageStore src={process.env.PUBLIC_URL + "/img/example.png"} /> */}
          {/* 이미지 들어갈 자리 */}
          <SimageStore src={storeImg} alt='...' />
          <div>
            <SstoreDetail>
              <span style={{ color: 'rgba(253, 147, 10)' }}>
                {'★'.repeat(storeScore)}
              </span>
              <span style={{ color: 'rgba(217, 216, 217)' }}>
                {'★'.repeat(5 - storeScore)}
              </span>
              <span
                style={{
                  color: 'black',
                  marginLeft: '5px',
                }}
              >
                {storeScore}.0
              </span>
              <div>
                <Sspan1>결제</Sspan1>
                <Sspan style={{ color: 'black' }}>
                  신용카드,현금,요기서 결제
                </Sspan>
              </div>
              <div>
                <Sspan1> 배달시간</Sspan1>
                <Sspan style={{ color: 'black' }}>35분~45분</Sspan>
              </div>
            </SstoreDetail>
          </div>
        </StLeftStoreInfoBox>
      </StBox1>
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
              <SimageMenu src={store.imageUrl} />
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
const StBox1 = styled.div`
  /* margin-right: 10px; */
  width: 680px;
  height: 100%;
  /* border: 1px solid #d9d9d9; */
`;
const StLeftTitleBox = styled.div`
  width: 670px;
  height: 43px;
  border: 1px solid #d9d9d9;
  margin-top: 10px;
  background-color: white;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 10px;
`;
const StLeftStoreInfoBox = styled.div`
  margin-top: -1px;
  padding-left: 7px;
  display: flex;
  align-items: center;
  text-align: left;
  width: 673px;
  height: 129px;
  border: 1px solid #d9d9d9;
  gap: 10px;
  font-size: 14px;
  background-color: white;
`;
const SimageStore = styled.img`
  height: 120px;
  width: 120px;
`;
const SstoreDetail = styled.div`
  color: gray;
`;
const Sspan = styled.span`
  margin-left: 5px;
`;
const Sspan1 = styled.span`
  font-weight: bold;
`;

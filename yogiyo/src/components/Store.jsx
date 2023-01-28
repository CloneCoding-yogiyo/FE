import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

export default function Store() {
  //조회...
  const navigate = useNavigate();

  const [stores, setStores] = useState([]);

  //FIXME:

  const fetchTodos = async () => {
    // const { data } = await axios.get('http://3.36.130.126/stores', {
    //   headers: { Authorization: localStorage.getItem('Authorization') },
    // });
    // setStores(data.data);//서버 연결시..

    const { data } = await axios.get('http://localhost:3001/Store'); //로컬
    setStores(data); //로컬...
    console.log(data);
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
                navigate(`/StoreList/${store.id}`);
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
  padding-left: 300px;
  padding-right: 300px;
  text-align: center;
`;

const StBox = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  cursor: pointer;

  margin-top: 15px;
  margin-left: 5px;
  margin-right: 15px;

  width: 488px;
  height: 106px;
  border: 1px solid #d9d9d9;
`;

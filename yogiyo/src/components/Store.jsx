import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";

export default function Store() {
  //조회...
  const navigate = useNavigate();

  const [stores, setStores] = useState(null);

  //FIXME:

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/Store");
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

  margin-top: 15px;
  margin-left: 5px;
  margin-right: 15px;

  width: 488px;
  height: 106px;
  border: 1px solid #d9d9d9;
`;

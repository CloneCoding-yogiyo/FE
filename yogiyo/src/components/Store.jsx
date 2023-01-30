import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";

export default function Store() {
  //조회...
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filteredStores, setFilteredStores] = useState([]);
  const [stores, setStores] = useState([]);

  const fetchTodos = async () => {
    //FIXME: 서버연결시
    // const { data } = await axios.get(' http://jsmtmt.shop/stores', {
    //   headers: { Authorization: localStorage.getItem('Authorization') },
    // });
    // setStores(data.data);

    //FIXME:로컬 연결시.. 악시오스 인스턴스 테스트
    const { data } = await axios.get("http://localhost:3001/Store"); //로컬
    setFilteredStores(data);
    setStores(data); //로컬...
    console.log(data);
  };

  //검색기능
  const handleSearch = () => {
    if (search.length === 0) {
      setFilteredStores(stores);
    } else {
      setFilteredStores(
        stores.filter((store) =>
          store.storeName.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    setStores();
    fetchTodos();
  }, []);

  return (
    <div>
      <Ssearch>
        <SsearchInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="검색어를 입력해주세요. "
        />
        <SsearchButton onClick={handleSearch}>검색</SsearchButton>
      </Ssearch>
      <StBoxs>
        {filteredStores?.map((store) => {
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
                <p>{store.storeName}</p>
                <p>{store.score}</p>
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
  background-color: rgba(255, 255, 255);
  margin-top: 15px;
  margin-left: 5px;
  margin-right: 15px;
  width: 488px;
  height: 106px;
  border: 1px solid #d9d9d9;
  font-size: 18px;
`;
const Ssearch = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(./img/chicken.jpeg);
  background-size: 100%;
  background-repeat: no-repeat;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const SsearchInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 380px;
  height: 40px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-left: 15px;
`;
const SsearchButton = styled.button`
  border: none;
  width: 60px;
  height: 42px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: rgba(255, 132, 0);
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

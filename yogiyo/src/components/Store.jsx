import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { ImStarFull } from 'react-icons/im';
export default function Store() {
  //조회...
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [filteredStores, setFilteredStores] = useState([]);
  const [stores, setStores] = useState([]);
  const fetchTodos = async () => {
    //FIXME: 서버연결시
    const { data } = await axios.get('http://jsmtmt.shop/stores', {
      headers: { Authorization: localStorage.getItem('Authorization') },
    });
    // setFilteredStores(data.map((item) => item.data));
    // setStores(data.map((item) => item.data)); //로컬...
    //FIXME:로컬 연결시.. 악시오스 인스턴스 테스트

    // const { data } = await axios.get('http://localhost:3001/Store'); //로컬
    // setFilteredStores(data.map((item) => item.data));
    // setStores(data.map((item) => item.data)); //로컬...
    // const a = data.map((item) => item.data);
    // console.log(a[0]);

    //FIXME:이게 서버찐..
    console.log(data.data);
    setFilteredStores(data.data);
    setStores(data.data); //로컬...

    // console.log(data[0].data);
    // setFilteredStores(data[0].data);
    // setStores(data[0].data); //로컬...

    // console.log(a.map((item) => item.data));
  };

  //검색기능
  const handleSearch = () => {
    if (search.length === 0) {
      setFilteredStores(stores);
      console.log(setFilteredStores(stores));
    } else {
      setFilteredStores(
        stores.filter((store) =>
          store.storeName.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    // setStores();
    fetchTodos();
    //이름바꾸기
  }, []);

  return (
    <div>
      <Ssearch>
        <img src='./img/chicken.jpeg' />
        <SsearchInput
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='검색어를 입력해주세요. '
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
              <SStoreimg src={store.imageUrl} alt='...' />
              {/* <div>{store.imageUrl}</div> */}
              <div>
                <p>{store.storeName}</p>
                <SStarRate>
                  {'★'.repeat(store.score)}
                  <Semptystar>{'★'.repeat(5 - store.score)}</Semptystar>
                </SStarRate>
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
  width: 430px;
  height: 96px;
  border: 1px solid #d9d9d9;
  font-size: 18px;
  padding: 10px;
  gap: 10px;
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
const SStarRate = styled.span`
  color: rgba(253, 147, 10);
`;
const Semptystar = styled.span`
  color: rgba(217, 216, 217);
`;
const SStoreimg = styled.img`
  height: 90px;
  width: 90px;
`;

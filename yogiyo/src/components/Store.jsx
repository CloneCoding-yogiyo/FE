import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

export default function Store() {
  //조회...
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [filteredStores, setFilteredStores] = useState([]);
  const [stores, setStores] = useState([]);

  const fetchTodos = async () => {
    //FIXME: 서버연결시
    // const { data } = await axios.get(' http://jsmtmt.shop/stores', {
    //   headers: { Authorization: localStorage.getItem('Authorization') },
    // });
    // setStores(data.data);

    //FIXME:로컬 연결시.. 악시오스 인스턴스 테스트
    const { data } = await axios.get('http://localhost:3001/Store'); //로컬
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
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

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

  margin-top: 15px;
  margin-left: 5px;
  margin-right: 15px;

  width: 488px;
  height: 106px;
  border: 1px solid #d9d9d9;
`;

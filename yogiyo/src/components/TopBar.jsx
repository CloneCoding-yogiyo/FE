import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function TopBar() {
  const navigate = useNavigate();
  return (
    <StTopBarBoxs>
      <StTopBarBox1
        onClick={() => {
          navigate(`/StoreList`);
        }}
      >
        요기요
      </StTopBarBox1>

      <StTopBarBox2> 로그인 </StTopBarBox2>
    </StTopBarBoxs>
  );
}

const StTopBarBoxs = styled.p`
  width: 100%;
  height: 79px;
  color: white;
  margin-top: 0;
  background-color: #fa0050;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StTopBarBox1 = styled.p`
  margin-left: 15%;
  cursor: pointer;
  font-size: 30px;
`;
const StTopBarBox2 = styled.p`
  margin-right: 15%;
  padding: 7px 0;
  width: 150px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #ea7266;
  border-radius: 2px;
`;

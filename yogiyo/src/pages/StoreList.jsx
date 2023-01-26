import React from 'react';
import TopBar from '../components/TopBar';
import Store from '../components/Store';
// import SearchHeader from '../components/SearchHeader';
export default function StoreList() {
  return (
    <div>
      <TopBar></TopBar>
      <div>
        {/* TODO: 쿼리의 개념이 들어감. */}
        {/* <SearchHeader></SearchHeader> */}
      </div>
      <div>
        {/* 가게 리스트 */}
        <Store></Store>
      </div>
    </div>
  );
}

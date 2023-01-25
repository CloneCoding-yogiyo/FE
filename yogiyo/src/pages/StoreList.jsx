import React from 'react';
import TopBar from '../components/TopBar';
import Store from '../components/Store';
// import SearchHeader from '../components/SearchHeader';
export default function StoreList() {
  return (
    <div>
      <TopBar></TopBar>
      <div>{/* <SearchHeader></SearchHeader> */}</div>
      <div>
        <Store></Store>
      </div>
    </div>
  );
}

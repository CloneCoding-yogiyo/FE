import React from "react";
import styled from "styled-components";

export default function Copyright() {
  function moveToYogiyo() {
    window.location.href = "https://www.yogiyo.co.kr/mobile/#/";
  }
  return (
    <div>
      <Simage
        onClick={moveToYogiyo}
        src={process.env.PUBLIC_URL + "/img/copyright.png"}
        alt="copyright"
      />
    </div>
  );
}

const Simage = styled.img`
  height: 100%;
  width: 100%;
  min-width: 1500px;
`;

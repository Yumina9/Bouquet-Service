import React from 'react';
import styled from 'styled-components';
import { MiniHeader } from '../../components/header/MiniHeader';

const SellerMyPage = () => {
  return (
    <>
      <MiniHeader />
      <Info>
        <></>
        <Img src={require('../../image/user.png')} />
        <div>가게 이름</div>
        <div>소개</div>
        <div>이름</div>
        <div>주소</div>
        <div>번호</div>
        <div>인스타그램 주소</div>
        <div>페이스북 주소</div>
        <></>
      </Info>
    </>
  );
};

export default SellerMyPage;

const Img = styled.img`
  display: flex;
  justify-content: center;
  width: 100px;
  margin: 25px;
  justify-content: right;
`;

const Info = styled.div`
  display: flex;
  & > :first-child {
    flex: 4;
  }
  & > :last-child {
    flex: 6;
  }
  padding: 50px 100px;
  div {
    margin: 25px;
    justify-content: left;
  }
`;

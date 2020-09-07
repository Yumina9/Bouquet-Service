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
        <div>정보</div>
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
    border: 1px solid blue;
  }
  & > :last-child {
    flex: 6;
    border: 1px solid lime;
  }
  padding: 50px 100px;
  div {
    margin: 25px;
    justify-content: left;
    background: #f1f2f3;
  }
`;

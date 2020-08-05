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

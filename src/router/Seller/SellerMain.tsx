import React from 'react';
import styled from 'styled-components';
import { MiniHeader } from '../../components/header/MiniHeader';
import SellerHeader from '../../components/header/SellerHeader';

const SellerMain = () => {
  return (
    <div>
      <MiniHeader />
      <Block>
        <SellerHeader />
      </Block>
    </div>
  );
};

export default SellerMain;

const Block = styled.div`
  padding: 25px 100px;
`;

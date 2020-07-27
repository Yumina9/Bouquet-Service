import React from 'react';
import styled from 'styled-components';
import { MiniHeader } from '../../components/header/MiniHeader';
import SellerHeader from '../../components/header/SellerHeader';
import FlowerList from '../../components/flowerImg/FlowerList';
import BouquetList from '../../components/flowerImg/BouquetList';
import Typography from '../../components/common/Typography';
import palette from '../../components/lib/styles/palette';

const SellerMain = () => {
  return (
    <div>
      <MiniHeader />
      <Block>
        <SellerHeader />
      </Block>
      <Block>
        <Typography type="H4" color={palette.color4} fontWeight="bold">
          꽃다발 리스트
        </Typography>
        <BouquetList />
      </Block>
      <Block>
        <Typography type="H4" color={palette.color4} fontWeight="bold">
          현재 보유 꽃 리스트
        </Typography>
        <FlowerList />
      </Block>
    </div>
  );
};

export default SellerMain;

const Block = styled.div`
  padding: 25px 100px;
`;

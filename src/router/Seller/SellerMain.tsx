import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MiniHeader } from '../../components/header/MiniHeader';
import SellerInfo from '../../components/header/SellerInfo';
import FlowerList from '../../components/flowerImg/FlowerList';
import BouquetList from '../../components/flowerImg/BouquetList';
import Typography from '../../components/common/Typography';
import palette from '../../components/lib/styles/palette';

const SellerMain = () => {
  return (
    <div>
      <MiniHeader />
      <Block>
        <SellerInfo />
      </Block>
      <Block>
        <Typography type="H4" color={palette.color4} fontWeight="bold">
          꽃다발 리스트
        </Typography>
        <Link
          to="/bouquetmore"
          style={{ color: 'inherit', textDecoration: 'none', float: 'right' }}
        >
          <Typography type="H7" color={palette.color4} fontWeight="bold">
            더보기
          </Typography>
        </Link>
        <BouquetList />
      </Block>
      <Block>
        <Typography type="H4" color={palette.color4} fontWeight="bold">
          현재 보유 꽃 리스트
        </Typography>
        <Typography type="H7" color={palette.color4} fontWeight="bold">
          <Link
            to="/flowermore"
            style={{ color: 'inherit', textDecoration: 'none', float: 'right' }}
          >
            더보기
          </Link>
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

import React from 'react';
import styled from 'styled-components';
import { FlowerGrid } from '../flowerImg/FlowerGrid';

import ShopInfo from './ShopInfo';
import { ShopType } from '../../router/Shop/ShopMainPage';

interface ShopInfoListProps {
  shop: ShopType;
}

const ShopInfoBanner = ({ shop }: ShopInfoListProps) => {
  return (
    <Box>
      <div>
        <ShopInfo shop={shop} />
      </div>
      <div>
        <FlowerGrid />
      </div>
    </Box>
  );
};

export default ShopInfoBanner;

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & > div {
    margin: 5px;
  }

  & > :first-child {
    flex: 4;
  }

  & > :last-child {
    flex: 6;
  }
`;

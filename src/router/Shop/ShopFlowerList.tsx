import FlowerList from '../../components/flowerImg/FlowerList';
import React from 'react';
import ShopListLayout from './ShopListLayout';
import styled from 'styled-components';
import { Divider, Typography } from '@material-ui/core';
import { FlowerType } from '../../components/flowerImg/Flower';
import { ShowMore } from '../../components/common/ShopMore';

export default function ShopFlowerList({
  id,
  flowers,
}: {
  id: string;
  flowers: FlowerType[];
}) {
  return (
    <ShopListLayout>
      <Typography variant="h3" color="textPrimary" align="left">
        Flower List
      </Typography>
      <DividerWrapper />
      <ShowMoreWrapper>
        <ShowMore to={`/shop/${id}/flowers`} />
      </ShowMoreWrapper>
      <FlowerList flowers={flowers} />
    </ShopListLayout>
  );
}

const ShowMoreWrapper = styled.div`
  text-align: right;
`;

const DividerWrapper = styled(Divider)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

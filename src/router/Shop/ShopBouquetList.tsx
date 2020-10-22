import BouquetList from '../../components/flowerImg/BouquetList';
import React from 'react';
import ShopListLayout from './ShopListLayout';
import styled from 'styled-components';
import { BouquetType } from '../../components/flowerImg/Bouquet';
import { Divider, Typography } from '@material-ui/core';
import { ShowMore } from '../../components/common/ShopMore';

export default function ShopBouquetList({
  id,
  bouquets,
}: {
  id: string;
  bouquets: BouquetType[];
}) {
  return (
    <>
      <ShopListLayout>
        <Typography variant="h3" color="textPrimary" align="left">
          Bouquet List
        </Typography>
        <DividerWrapper />
        <ShowMoreWrapper>
          <ShowMore to={`/shop/${id}/bouquets`} />
        </ShowMoreWrapper>
        <BouquetList bouquets={bouquets} />
      </ShopListLayout>
    </>
  );
}

const ShowMoreWrapper = styled.div`
  text-align: right;
`;

const DividerWrapper = styled(Divider)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

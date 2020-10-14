import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Bouquet, { BouquetType } from './Bouquet';

type BuquetListPropsType = {
  bouquets: BouquetType[];
};

// props -> { bouquets }
const BouquetList = ({ bouquets }: BuquetListPropsType) => {
  return (
    <List>
      {bouquets.map((bouquet: BouquetType) => {
        return <Bouquet {...bouquet} />;
      })}
    </List>
  );
};

export default BouquetList;

const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

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
      {bouquets.map(({ id, name, img, description }) => {
        return (
          <Bouquet id={id} name={name} img={img} description={description} />
        );
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

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Bouquet from './Bouquet';
import { FlowerType } from './FlowerList';

const BouquetList = () => {
  const [bouquets, setBouquets] = useState<FlowerType[]>([]);
  useEffect(() => {
    axios.get('/bouquets').then(({ data }) => setBouquets(data));
  }, []);
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

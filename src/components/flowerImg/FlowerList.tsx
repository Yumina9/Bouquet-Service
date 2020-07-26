import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Bouquet from './Bouquet';
import axios from 'axios';

export type FlowerType = {
  id: number;
  name: string;
  img: string;
  mean: string;
  color: string;
};

const FlowerList = () => {
  const [flowers, setFlowers] = useState<FlowerType[]>([]);
  useEffect(() => {
    axios.get('/flowers').then(({ data }) => setFlowers(data));
  }, []);
  return (
    <List>
      {flowers.map(({ id, name, img, mean, color }) => {
        return (
          <Bouquet id={id} name={name} img={img} mean={mean} color={color} />
        );
      })}
    </List>
  );
};

export default FlowerList;

const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

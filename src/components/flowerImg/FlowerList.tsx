import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Bouquet from './Bouquet';

export type FlowerType = {
  id: number;
  name: string;
  img: string;
  description: string;
  color?: string;
};

const FlowerList = () => {
  const [flowers, setFlowers] = useState<FlowerType[]>([]);
  useEffect(() => {
    axios.get('/flowers').then(({ data }) => setFlowers(data));
  }, []);
  return (
    <List>
      {flowers.map(({ id, name, img, description, color }) => {
        return (
          <Bouquet
            id={id}
            name={name}
            img={img}
            description={description}
            color={color}
          />
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

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Bouquet from './Bouquet';

export type FlowerType = {
  id: number;
  name: string;
  img: string;
  description: string;
  color: string;
};
export type BouquetType = FlowerType & {
  flower_name: string;
  flower_color: string;
  flower_count: number;
  ribbon_color: string;
  wrappingpaper_color: string;
};

const FlowerList = () => {
  const [flowers, setFlowers] = useState<FlowerType[]>([]);
  useEffect(() => {
    axios.get('/flowers').then(({ data }) => setFlowers(data));
  }, []);
  console.log(flowers);
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

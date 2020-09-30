import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Flower, { FlowerType } from '../../flowerImg/Flower';

export const FlowerListPanel = () => {
  const { id } = useParams();
  const [flowers, setFlowers] = useState<FlowerType[]>([]);
  useEffect(() => {
    Axios.get(`/shop/${id}/flowers`).then(({ data }) => setFlowers(data));
  }, []);
  console.log(flowers);

  return (
    <>
      <FlowerList>
        {flowers.map(({ id, name, img, description, color }) => {
          return (
            <Flower
              id={id}
              name={name}
              img={img}
              description={description}
              color={color}
            />
          );
        })}
      </FlowerList>
    </>
  );
};

const FlowerList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

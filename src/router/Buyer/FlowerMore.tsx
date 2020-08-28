import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MiniHeader } from '../../components/header/MiniHeader';
import axios from 'axios';
import Bouquet from '../../components/flowerImg/Bouquet';
import Typography from '../../components/common/Typography';
import palette from '../../components/lib/styles/palette';

const FlowerMore = () => {
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    axios.get('/flowers').then(({ data }) => setFlowers(data));
  }, []);
  return (
    <>
      <MiniHeader />
      <Typography type="H3" color={palette.color4} fontWeight="bold">
        보유 중인 꽃 리스트
      </Typography>
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
    </>
  );
};

export default FlowerMore;

const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

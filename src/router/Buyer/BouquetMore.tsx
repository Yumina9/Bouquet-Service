import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MiniHeader } from '../../components/header/MiniHeader';
import axios from 'axios';
import Bouquet from '../../components/flowerImg/Bouquet';
import Typography from '../../components/common/Typography';
import palette from '../../components/lib/styles/palette';

const BouquetMore = () => {
  const [bouquets, setBouquets] = useState([]);
  useEffect(() => {
    axios.get('/bouquets').then(({ data }) => setBouquets(data));
  }, []);
  return (
    <>
      <MiniHeader />
      <div>
        <Typography type="H3" color={palette.color4} fontWeight="bold">
          제작 가능한 꽃다발 리스트
        </Typography>

        <List>
          {bouquets.map(({ id, name, img, description, color }) => {
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
      </div>
    </>
  );
};

export default BouquetMore;
const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 20px;
  padding: 20px;
`;

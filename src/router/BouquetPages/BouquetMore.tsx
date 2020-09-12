import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MiniHeader from '../../components/header/MiniHeader';
import axios from 'axios';
import Bouquet from '../../components/flowerImg/Bouquet';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import { useParams } from 'react-router-dom';
import { Block } from '../../lib/styles/styled';

const BouquetMore = () => {
  const { id } = useParams();
  const [bouquets, setBouquets] = useState([]);
  useEffect(() => {
    axios.get(`/shop/${id}/bouquets`).then(({ data }) => setBouquets(data));
  }, []);
  return (
    <>
      <MiniHeader />
      <Block>
        <Typography type="H3" color={palette.color4} fontWeight="bold">
          제작 가능한 꽃다발 리스트
        </Typography>

        <List>
          {bouquets.map(({ id, name, img, description }) => {
            return (
              <Bouquet
                id={id}
                name={name}
                img={img}
                description={description}
              />
            );
          })}
        </List>
      </Block>
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

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MiniHeader from '../../components/header/MiniHeader';
import axios from 'axios';
import Bouquet from '../../components/flowerImg/Bouquet';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import { useParams } from 'react-router-dom';
import { Block } from '../../lib/styles/styled';

const FlowerMore = () => {
  const { id } = useParams();
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    axios.get(`/shop/${id}/flowers`).then(({ data }) => setFlowers(data));
  }, []);
  return (
    <>
      <MiniHeader />
      <Block>
      <Typography type="H3" color={palette.color4} fontWeight="bold">
        보유 중인 꽃 리스트
      </Typography>
      <List>
        {flowers.map(({ id, name, img, description }) => {
          return (
            <Bouquet id={id} name={name} img={img} description={description} />
          );
        })}
      </List>
      </Block>
    </>
  );
};

export default FlowerMore;

const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

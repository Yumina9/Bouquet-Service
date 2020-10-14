import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Flower, { FlowerType } from '../../flowerImg/Flower';
import Typography from '../../common/Typography';
import palette from '../../../lib/styles/palette';
import Button from '../../common/Button';

export const FlowerListPanel = () => {
  const { id } = useParams();
  const [flowers, setFlowers] = useState<FlowerType[]>([]);
  useEffect(() => {
    Axios.get(`/shop/${id}/flowers`).then(({ data }) => setFlowers(data));
  }, []);
  console.log(flowers);

  return (
    <>
      <Typography type="H4" color={palette.color3} fontWeight="bold">
        현재 보유 중인 꽃 리스트
      </Typography>

      <FlowerList>
        {flowers.map(({ ...flowers }) => {
          return <Flower {...flowers} />;
        })}
      </FlowerList>
    </>
  );
};

const FlowerList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

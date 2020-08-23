import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MiniHeader } from '../../components/header/MiniHeader';
import { FlowerType } from '../../components/flowerImg/FlowerList';
import Typography from '../../components/common/Typography';
import palette from '../../components/lib/styles/palette';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MakingBouquetStepper from '../../components/Making/MakingBouquetStepper';

const BouquetMaking: React.FC<FlowerType> = () => {
  const { id } = useParams();
  const [bouquet, setBouquet] = useState<FlowerType>();
  useEffect(() => {
    axios.get(`/bouquets/${id}`).then(({ data }) => setBouquet(data));
  }, []);
  console.log(bouquet);
  return (
    <>
      <MiniHeader />
      <Body>
        <Typography type="H3" color={palette.color1} fontWeight="bold">
          Bouquet Making
        </Typography>
        <MakingBouquetStepper />
      </Body>
    </>
  );
};

export default BouquetMaking;

const Body = styled.div`
  display: flex-reverse;
  text-align: center;
  margin: 20px;
`;

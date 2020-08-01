import React from 'react';
import styled from 'styled-components';
import { MiniHeader } from '../../components/header/MiniHeader';
import MakingBouquetStepper from '../../components/Making/MakingBouquetStepper';
import Typography from '../../components/common/Typography';
import palette from '../../components/lib/styles/palette';

const BouquetMaking = () => {
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

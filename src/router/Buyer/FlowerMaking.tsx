import React from 'react';
import styled from 'styled-components';
import { MiniHeader } from '../../components/header/MiniHeader';
import MakingFlowerStepper from '../../components/Making/MakingFlowerStepper';
import Typography from '../../components/common/Typography';
import palette from '../../components/lib/styles/palette';

const FlowerMaking = () => {
  return (
    <>
      <MiniHeader />
      <Body>
        <Typography type="H3" color={palette.color1} fontWeight="bold">
          Bouquet Making
        </Typography>
        <MakingFlowerStepper />
      </Body>
    </>
  );
};

export default FlowerMaking;

const Body = styled.div`
  display: flex-reverse;
  text-align: center;
  margin: 20px;
`;

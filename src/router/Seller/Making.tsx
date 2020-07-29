import React from 'react';
import styled from 'styled-components';
import { MiniHeader } from '../../components/header/MiniHeader';
import MakingStepper from '../../components/Making/MakingStepper';
import Typography from '../../components/common/Typography';
import palette from '../../components/lib/styles/palette';

const Making = () => {
  return (
    <>
      <MiniHeader />
      <Body>
        <Typography type="H3" color={palette.color1} fontWeight="bold">
          Bouquet Making
        </Typography>
        <MakingStepper />
      </Body>
    </>
  );
};

export default Making;

const Body = styled.div`
  display: flex-reverse;
  text-align: center;
  margin: 20px;
`;

import React from 'react';
import styled from 'styled-components';
import Typography from '../common/Typography';
import palette from '../lib/styles/palette';
import { FlowerGrid } from '../flowerImg/FlowerGrid';

const SellerHeader = () => {
  return (
    <Box>
      <div>
        <Typography type="H3" color={palette.color4} fontWeight="bold">
          Title
        </Typography>
        <Typography type="H7" color={palette.color4} fontWeight="light">
          <p>링크</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            possimus sed dolores voluptatibus vero fugiat, eum iure ratione
            harum maiores! Natus fugit quis blanditiis accusantium culpa quam
            voluptates dicta dignissimos.
          </p>
        </Typography>
      </div>
      <div>
        <FlowerGrid />
      </div>
    </Box>
  );
};

export default SellerHeader;

const Box = styled.div`
  display: flex;
  width: 100%;

  & > :first-child {
    flex: 4;
  }

  & > :last-child {
    flex: 6;
  }
`;

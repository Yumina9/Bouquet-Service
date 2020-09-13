import React from 'react';
import styled from 'styled-components';
import MiniHeader from '../header/MiniHeader';
import { Block } from '../../lib/styles/styled';
import palette from '../../lib/styles/palette';
import Typography from '../common/Typography';

export const ShopReview = () => {
  return (
    <>
      <Typography type="H4" color={palette.color4} fontWeight="bold">
        Shop Review
      </Typography>
      <Box></Box>
    </>
  );
};

const Box = styled.div`
  border: solid 2px ${palette.color4};
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
`;

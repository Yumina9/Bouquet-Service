import React from 'react';
import styled from 'styled-components';
import Typography from '../common/Typography';
import palette from '../../lib/styles/palette';
import { FlowerType } from '../flowerImg/Flower';

export const MakingFlowerInfo = ({
  name,
  img,
  color,
}: Pick<FlowerType, 'name' | 'img' | 'color'>) => {
  return (
    <>
      <Info>
        <img src={img} />
        <Typography type="H3" color={palette.color4} fontWeight="bold">
          {color} {name}
        </Typography>
      </Info>
    </>
  );
};

const Info = styled.div`
  display: flex;
`;

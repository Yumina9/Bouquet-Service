import React from 'react';
import styled from 'styled-components';
import { FlowerType } from '../flowerImg/FlowerList';
import Typography from '../common/Typography';
import palette from '../lib/styles/palette';

const ExplanationImage: React.FC<FlowerType> = ({
  name,
  img,
  description,
  color,
}) => {
  return (
    <Block>
      <Typography type="H4" color={palette.color4} fontWeight="bold">
        {name}
      </Typography>
    </Block>
  );
};

export default ExplanationImage;

const Block = styled.div``;

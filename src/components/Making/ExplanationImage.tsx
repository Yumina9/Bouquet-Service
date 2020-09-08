import React from 'react';
import styled from 'styled-components';
import Typography from '../common/Typography';
import palette from '../../lib/styles/palette';
import { FlowerType } from '../flowerImg/Flower';

const ExplanationImage: React.FC<FlowerType> = ({
  id,
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
      <img src={img} />
      {description}
      {color}
    </Block>
  );
};

export default ExplanationImage;

const Block = styled.div``;

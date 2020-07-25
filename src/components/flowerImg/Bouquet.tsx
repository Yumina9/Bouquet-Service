import React from 'react';
import styled from 'styled-components';
import Typography from '../common/Typography';
import palette from '../lib/styles/palette';
import { BouquetType } from '../../DummyData';

const Bouquet: React.FC<BouquetType> = ({ title, img, id }) => {
  return (
    <Card>
      <Thumbnail src={img} />
      <Typography type="H5" color={palette.color4} fontWeight="light">
        {title}
      </Typography>
    </Card>
  );
};

export default Bouquet;

const Card = styled.span`
  display: grid;
`;

const Thumbnail = styled.img``;

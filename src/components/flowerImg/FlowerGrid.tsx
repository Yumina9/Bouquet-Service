import React from 'react';
import styled from 'styled-components';
import { FlowerCard } from './FlowerCard';

export const FlowerGrid = () => {
  return (
    <GridBox>
      <FlowerCard />
      <FlowerCard />
      <FlowerCard />
      <FlowerCard />
      <FlowerCard />
      <FlowerCard />
    </GridBox>
  );
};

const GridBox = styled.span`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: '. . .' '. . .';
`;

const Box = styled.span`
  /* display: grid;
  grid-area: column; */
`;

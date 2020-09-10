import React from 'react';
import styled from 'styled-components';
import { MiniViewerCard } from './MiniViewerCard';
import { ViewerCard } from './ViewerCard';

export const FlowerGrid = () => {
  return (
    <GridBox>
      <div>
        <ViewerCard />
      </div>
      <div>
        <MiniViewerCard />
        <MiniViewerCard />
        <MiniViewerCard />
      </div>
    </GridBox>
  );
};

const GridBox = styled.span`
  width: 100%;
  display: grid;

  /* & > div {
    display: block;
    margin: auto;
  } */

  & > :first-child {
    margin-left: auto;
    flex: 4;
  }

  & > :last-child {
    flex: 1;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  gap: 1px 1px;
  grid-template-areas: '. .';
`;

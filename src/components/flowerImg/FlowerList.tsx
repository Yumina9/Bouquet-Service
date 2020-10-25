import React from 'react';
import styled from 'styled-components';
import Flower, { FlowerType } from './Flower';

interface FlowerListProps {
  flowers: FlowerType[];
}

const FlowerList: React.FC<FlowerListProps> = ({ flowers }) => {
  return (
    <List>
      {flowers.map(({ ...flowers }) => {
        return <Flower {...flowers} />;
      })}
    </List>
  );
};

export default FlowerList;

const List = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

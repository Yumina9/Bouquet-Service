import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Flower, { FlowerType } from './Flower';

interface FlowerListProps {
  flowers: FlowerType[];
}

const FlowerList: React.FC<FlowerListProps> = ({ flowers }) => {
  return (
    <List>
      {flowers.map(({ id, name, img, description, color }) => {
        return (
          <Flower
            id={id}
            name={name}
            img={img}
            description={description}
            color={color}
          />
        );
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

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export const MakingList = () => {
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    axios.get('/flowers').then(({ data }) => setFlowers(data));
  });
  console.log(flowers);
  return (
    <>
      <List>
        {flowers.map((img) => {
          return { img };
        })}
      </List>
    </>
  );
};

const List = styled.div`
  display: flex;
`;

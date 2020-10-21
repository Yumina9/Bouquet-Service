import axiosInstance from '../login/axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const MakingList = () => {
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    axiosInstance.get('/flowers').then(({ data }) => setFlowers(data));
  }, []);
  console.log(flowers);
  return (
    <>
      <List></List>
    </>
  );
};

const List = styled.div`
  display: flex;
`;

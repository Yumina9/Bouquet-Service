import React from 'react';
import styled from 'styled-components';

export const MainInfo = () => {
  return (
    <>
      <InfoBox />
    </>
  );
};

const InfoBox = styled.div`
  display: flex;
  background-color: gray;
  width: 100%;
  height: 300px;
  margin: 20px 0;
`;

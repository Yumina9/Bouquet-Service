import React from 'react';
import styled from 'styled-components';

export default function ShopListLayout({ children }) {
  return <Block>{children} </Block>;
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

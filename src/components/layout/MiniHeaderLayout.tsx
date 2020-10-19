import MiniHeader from '../header/MiniHeader';
import React from 'react';
import styled from 'styled-components';

type MiniHeaderLayoutProps = {
  children: React.ReactNode;
};

const MiniHeaderLayout: React.FC<MiniHeaderLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <MiniHeader />
      <Block>{children}</Block>
    </Layout>
  );
};

export default MiniHeaderLayout;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
`;

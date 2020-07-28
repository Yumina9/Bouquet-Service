import React from 'react';
import styled from 'styled-components';
import { MiniHeader } from '../../components/header/MiniHeader';

const Explanation = () => {
  return (
    <>
      <MiniHeader />
      <Block>
        <p>이미지가 들어갑니다</p> <p>꽃 이름과 주문버튼이 들어갑니다.</p>
      </Block>
    </>
  );
};

export default Explanation;

const Block = styled.div`
  display: flex;
  padding: 50px;
  text-align: center;
  & > :first-child {
    flex: 5;
  }

  & > :last-child {
    flex: 5;
  }
`;

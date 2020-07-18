import React from 'react';
import styled from 'styled-components';

type FormProps = {
  children: React.ReactNode;
};
export const Form = ({ children }: FormProps) => {
  return <Block>{children}</Block>;
};

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

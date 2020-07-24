import React from 'react';
import styled from 'styled-components';

type FormProps = {
  children: React.ReactNode;
};
export const Form = ({ children }: FormProps) => {
  return <Block>{children}</Block>;
};

const Block = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid grey;
  div {
    float: left;
  }
`;

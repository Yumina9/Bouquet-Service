import React from 'react';
import styled from 'styled-components';

type FormProps = {
  children: React.ReactNode;
};
export const FormButton = ({ children }: FormProps) => {
  return <Block>{children}</Block>;
};

const Block = styled.form`
  display: flex;
  justify-content: center;
  Button{
      justify-content: center;
      width: 100px;
      margin: 20px 10px;
      border: 1px solid blue;
  }
`;

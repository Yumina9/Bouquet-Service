import React from 'react';
import styled from 'styled-components';

type BlockType = {
  color: string;
  bgColor: string;
};

const Block = styled.button<BlockType>`
  display: flex;
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.bgColor || 'white'};
  border-radius: 5px;
  padding: 5px;
  border: none;
`;
type ButtonType = BlockType & {
  children: React.ReactNode;
};
const Button = ({ color, bgColor, children }: ButtonType) => {
  return (
    <Block type="button" color={color} bgColor={bgColor}>
      {children}
    </Block>
  );
};

export default Button;

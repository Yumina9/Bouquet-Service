import React from 'react';
import styled from 'styled-components';

type ButtonType = BlockType & {
  children: React.ReactNode;
  name?: string;
  value?: string;
  onClick?: () => void;
};

const Button = ({
  color,
  bgColor,
  children,
  name,
  value,
  onClick,
}: ButtonType) => {
  return (
    <Block
      type="button"
      color={color}
      bgColor={bgColor}
      value={value}
      name={name}
      onClick={onClick && onClick}
    >
      {children}
    </Block>
  );
};

export default Button;

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

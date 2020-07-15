import React from 'react';
import styled from 'styled-components';

const Block = styled.button`
  display: flex;
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.bgColor || 'white'};
  border-radius: 5px;
  padding: 5px;
`;

const Button = ({ color, bgColor, children }) => {
  return (
    <Block type="button" color={color} bgColor={bgColor}>
      {children}
    </Block>
  );
};

export default Button;

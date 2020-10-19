import React from 'react';
import styled from 'styled-components';
import Typography from '../common/Typography';
import { Panel } from './Panel';

export type PanelFormProps = {
  title: string;
  children: React.ReactNode;
};

export const PanelForm = ({ title, children }: PanelFormProps) => {
  return (
    <>
      <Typography type="H3" color="black" fontWeight="bold">
        <Title>{title}</Title>
      </Typography>
      <Body>{children}</Body>
    </>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Body = styled.div`
  display: flex-reverse;
  justify-content: center;
  margin: 20px;
`;

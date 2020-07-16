import React, { useMemo } from 'react';
import styled from 'styled-components';
import { typography } from '../lib/typographys';

type StyledType = {
  fontWeight: string;
  color: string;
};

type TypographyType = StyledType & {
  type: string;
  children: React.ReactNode;
};

const Typography = ({ type, color, fontWeight, children }: TypographyType) => {
  const Tag = useMemo(() => {
    switch (type) {
      case 'H1':
        return H1;
      case 'H2':
        return H2;
      case 'H3':
        return H3;
      case 'H4':
        return H4;
      case 'H5':
        return H5;
      case 'H6':
        return H6;
      case 'H7':
        return H7;
      default:
        return Original;
    }
  }, [type]);
  const fontWeightMap = useMemo(() => {
    switch (fontWeight) {
      case 'bold':
        return 400;
      case 'medium':
        return 500;
      case 'bold':
        return 700;
      default:
        return 400;
    }
  }, [fontWeight]);
  return (
    <Tag type={type} color={color} fontWeight={fontWeightMap}>
      {children}
    </Tag>
  );
};

export default Typography;

const H1 = styled.p<StyledType>`
  ${typography.H1};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;

const H2 = styled.p<StyledType>`
  ${typography.H2};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;

const H3 = styled.p<StyledType>`
  ${typography.H3};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;

const H4 = styled.p<StyledType>`
  ${typography.H4};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;

const H5 = styled.p<StyledType>`
  ${typography.H5};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;

const H6 = styled.p<StyledType>`
  ${typography.H6};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;

const H7 = styled.p<StyledType>`
  ${typography.H7};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;

const Original = styled.p<StyledType>`
  ${typography.Original};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
`;

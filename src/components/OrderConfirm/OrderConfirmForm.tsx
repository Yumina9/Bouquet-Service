import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Typography from '../common/Typography';
import { BouquetType } from '../flowerImg/Bouquet';

export type infoProps = {
  info: BouquetType;
};

export const OrderConfirmForm = ({ info }: infoProps) => {
  return (
    <>
      <Body>
        <Typography type="H5" color={palette.color4} fontWeight="bold">
          꽃 종류
        </Typography>
        <p />
        <Typography type="H7" color={palette.black} fontWeight="light">
          {`${info?.flower_color} ${info?.flower_name}`}
        </Typography>
        <p />
        <Typography type="H5" color={palette.color4} fontWeight="bold">
          꽃 수량
        </Typography>
        <p />
        <Typography type="H7" color={palette.black} fontWeight="light">
          {`${info?.flower_count}송이`}
        </Typography>
        <p />
        <Typography type="H5" color={palette.color4} fontWeight="bold">
          꽃다발 종류
        </Typography>
        <p />
        <Typography type="H7" color={palette.black} fontWeight="light">
          {`${info?.name}`}
        </Typography>
        <p />
        <Typography type="H5" color={palette.color4} fontWeight="bold">
          리본, 포장지
        </Typography>
        <p />
        <Typography type="H7" color={palette.black} fontWeight="light">
          리본 : {`${info?.ribbon_color}`} | 포장지 :
          {`${info?.wrappingpaper_color}`}
        </Typography>
      </Body>
    </>
  );
};

const Body = styled.div`
  display: flex-reverse;
  text-align: center;
  justify-content: center;
  margin: 20px;
  Button {
    padding: 14px 50px;
    font-size: 1.5rem;
    color: inherit;
    outline: none;
    margin: 5px;
    float: left;
  }
`;

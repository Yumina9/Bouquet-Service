import React from 'react';
import styled from 'styled-components';
import { MiniHeader } from '../../components/header/MiniHeader';
import Typography from '../../components/common/Typography';
import palette from '../../components/lib/styles/palette';
import Button from '../../components/common/Button';
import { Link } from '@material-ui/core';

const Confirmation = () => {
  return (
    <div>
      <MiniHeader />
      <Body>
        <Typography type="H3" color={palette.color1} fontWeight="bold">
          주문 확인
        </Typography>
        <Order>
          <Typography type="H5" color={palette.color4} fontWeight="bold">
            꽃 종류
          </Typography>
          <Typography type="H7" color={palette.black} fontWeight="light">
            빨간색장미
          </Typography>
          <Typography type="H5" color={palette.color4} fontWeight="bold">
            꽃 수량
          </Typography>
          <Typography type="H7" color={palette.black} fontWeight="light">
            5송이
          </Typography>
          <Typography type="H5" color={palette.color4} fontWeight="bold">
            꽃다발 종류
          </Typography>
          <Typography type="H7" color={palette.black} fontWeight="light">
            하트 꽃다발
          </Typography>
          <Typography type="H5" color={palette.color4} fontWeight="bold">
            리본, 포장지 색상
          </Typography>
          <Typography type="H7" color={palette.black} fontWeight="light">
            리본 : 검정색 | 포장지 : 하얀색
          </Typography>
        </Order>
        <Button color={palette.black} bgColor={palette.color3}>
          뒤로가기
        </Button>
        <Button color={palette.black} bgColor={palette.color3}>
          주문완료
        </Button>
      </Body>
    </div>
  );
};

export default Confirmation;

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

const Order = styled.div`
  display: flex-reverse;
  text-align: center;
`;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import Button from '../../components/common/Button';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BouquetType } from '../../components/flowerImg/Bouquet';
import MiniHeader from '../../components/header/MiniHeader';
import { Block } from '../../lib/styles/styled';
import { OrderConfirmForm } from '../../components/OrderConfirm/OrderConfirmForm';

const OrderConfirmPage = () => {
  let history = useHistory();

  // id, type
  // STEP 1. useOrder에서 axios로 bouquet 정보 패치하기
  // 여기 id가 부켓아이디인데 왜 이걸루 데이터 패치안해오귱
  const { id, type } = useParams<{
    id: string;
    type: string;
  }>();

  return (
    <div>
      <MiniHeader />
      <Block>
        <Body>
          <Typography type="H3" color={palette.color1} fontWeight="bold">
            주문 확인
          </Typography>
          <br />

          <OrderConfirmForm />
          <br />

          <Button
            color={palette.black}
            bgColor={palette.color3}
            onClick={() => history.goBack()}
          >
            뒤로가기
          </Button>

          <Button color={palette.black} bgColor={palette.color3}>
            주문완료
          </Button>
        </Body>
      </Block>
    </div>
  );
};

export default OrderConfirmPage;

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

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import Button from '../../components/common/Button';
import { useHistory } from 'react-router-dom';
import MiniHeader from '../../components/header/MiniHeader';
import { Block } from '../../lib/styles/styled';
import { OrderConfirmForm } from '../../components/OrderConfirm/OrderConfirmForm';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { OrderDataParams } from '../../modules/order';
import axiosInstance from '../../components/login/axios';
import Header from '../../components/header/Header';

const useStylesO = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      display: 'flex',
      width: 300,
      textAlign: 'center',
      backgroundColor: '#bdc3c7',
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);
const useStylesT = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      display: 'flex-reverse',
      justifyContent: 'center',
      width: 400,
      backgroundColor: '#ecf0f1',
      border: '1px solid pink',
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

const OrderConfirmPage = () => {
  let history = useHistory();
  const classesOrder = useStylesO();
  const classesTool = useStylesT();

  const OrderData = useSelector((state: RootState) => state?.order);

  const data = {
    ...OrderData,
    shop_id: 1,
    // user_id: 1,
  };

  const onDataSave = () => {
    console.log('datadata', data);
    axiosInstance
      .post(`http://localhost:8000/bouquet_order/`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('주문완료데이터:', response.data);
        alert('주문완료');
      })
      .catch((response) => {
        console.error(response);
      });
  };
  //   Axios({
  //     method: 'post',
  //     url: `http://localhost:8000/bouquet_order/`,
  //     data: data,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       console.log('호출 결과 :', response.data);
  //     })
  //     .catch((error) => {
  //       console.error('booking 오류', error);
  //     });
  // };

  return (
    <div>
      <Header />
      <Block>
        <Body>
          <Paper
            className={classesTool.paper}
            style={{ border: '1px solid blue', height: 'inherit' }}
          >
            <Typography type="H3" color={palette.color1} fontWeight="bold">
              주문 확인
            </Typography>
            <Paper className={classesOrder.paper}>
              <OrderConfirmForm />
            </Paper>
            <br />
            <Button
              color={palette.black}
              bgColor={palette.color3}
              onClick={() => history.goBack()}
            >
              뒤로가기
            </Button>
            <Button
              color={palette.black}
              bgColor={palette.color3}
              onClick={() => onDataSave()}
            >
              주문완료
            </Button>
          </Paper>
        </Body>
      </Block>
    </div>
  );
};

export default OrderConfirmPage;

const Body = styled.span`
  display: flex-reverse;
  text-align: center;
  justify-content: center;
  margin: 20px;
  Button {
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 14px 50px;
    margin: 20px;
    font-size: 1.5rem;
    color: inherit;
    outline: none;
    margin: 5px;
    float: left;
  }
`;

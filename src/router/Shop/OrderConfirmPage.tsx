import React from 'react';
import styled from 'styled-components';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import Button from '../../components/common/Button';
import { useHistory } from 'react-router-dom';
import { Block } from '../../lib/styles/styled';
import { OrderConfirmForm } from '../../components/OrderConfirm/OrderConfirmForm';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import axiosInstance from '../../components/login/axios';
import Header from '../../components/header/Header';
import { GoShopMain } from '../../components/Shop/GoShopMain';
import Footer from '../Footer';

// const useStylesO = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       display: 'flex',
//       width: 300,
//       textAlign: 'center',
//       backgroundColor: '#bdc3c7',
//     },
//     control: {
//       padding: theme.spacing(2),
//     },
//   }),
// );
// const useStylesT = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       display: 'flex-reverse',
//       justifyContent: 'center',
//       width: 400,
//       backgroundColor: '#ecf0f1',
//       border: '1px solid pink',
//     },
//     control: {
//       padding: theme.spacing(2),
//     },
//   }),
// );

const OrderConfirmPage = () => {
  let history = useHistory();
  // const classesOrder = useStylesO();
  // const classesTool = useStylesT();

  const OrderData = useSelector((state: RootState) => state?.order);

  const onOrder = () => {
    axiosInstance
      .post(`/bouquet_order/`, {
        bouquet_id: Array.isArray(OrderData.bouquet)
          ? OrderData.bouquet.map((b) => b.id)[0]
          : OrderData.bouquet?.id,
        flower_id: Array.isArray(OrderData.flower)
          ? OrderData.flower.map((f) => f.id)[0]
          : OrderData.flower?.id,
        shop_id: Array.isArray(OrderData?.bouquet)
          ? OrderData.bouquet.map((b) => b.shops)[0]
          : OrderData.bouquet?.shops,
        flower_count: OrderData.flower_count,
        resultPrice: OrderData.resultPrice,
        ribbon: Array.isArray(OrderData.ribbon)
          ? OrderData.ribbon.map((r) => r.name)[0]
          : OrderData.ribbon,
        wrappingPaper: Array.isArray(OrderData.wrappingPaper)
          ? OrderData.wrappingPaper.map((wp) => wp.name)[0]
          : OrderData.wrappingPaper,
      })
      .then((response) => {
        alert('주문완료');
      })
      .catch((response) => {
        console.error(response);
      });
  };

  return (
    <div>
      <Header />
      <Block>
        <GoShopMain />
        <Body>
          <Typography type="H3" color={palette.color1} fontWeight="bold">
            주문 확인
          </Typography>
          <OrderConfirmForm />
          <br />
          <span style={{ justifyContent: 'center' }}>
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
              onClick={() => onOrder()}
            >
              주문완료
            </Button>
          </span>
        </Body>
      </Block>
      <Footer />
    </div>
  );
};

export default OrderConfirmPage;

const Body = styled.span`
  display: flex-reverse;
  text-align: center;
  justify-content: center;
  margin: 20px;
  span {
    display: flex;
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
  }
`;

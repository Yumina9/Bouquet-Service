import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import palette from '../../lib/styles/palette';
import Typography from '../common/Typography';
import useMakingBouquetStepper from '../Making/hooks/useMakingFlowerStepper';
import useOrderConfirmForm from './hooks/useOrderConfirmForm';
import { OrderAction } from '../../modules/order';
import { RootState } from '../../modules';

export const OrderConfirmData = () => {
  console.log('여기는 OrderConfirmData');
  const { order } = useOrderConfirmForm();
  console.log(order);
  console.log('order.bouquet', order?.bouquet);
  const OrderData = useSelector((state: RootState) => state?.order);
  console.log('OrderData', OrderData);

  return (
    <>
      <Typography type="H5" color={palette.color4} fontWeight="bold" >
        꽃다발 종류
      </Typography>

      <p />
      <Typography type="H7" color={palette.black} fontWeight="light">
        {OrderData?.orderItems?.bouquet}
      </Typography>
      <p />
      <Typography type="H5" color={palette.color4} fontWeight="bold">
        꽃 종류
      </Typography>
      <p />
      {OrderData?.orderItems?.flower}
      <p />
      <Typography type="H5" color={palette.color4} fontWeight="bold">
        꽃 수량
      </Typography>
      <p />
      <Typography type="H7" color={palette.black} fontWeight="light">
        {OrderData?.orderItems?.flower_count}송이
      </Typography>
      <p />
      <Typography type="H5" color={palette.color4} fontWeight="bold">
        리본, 포장지
      </Typography>
      <p />
      <Typography type="H7" color={palette.black} fontWeight="light">
        리본 :{OrderData?.orderItems?.ribbon} | 포장지 :
        {OrderData?.orderItems?.wrappingPaper}
      </Typography>
      <p />
      <Typography type="H5" color={palette.color4} fontWeight="bold">
        금액
      </Typography>
      <p />
      <Typography type="H7" color={palette.black} fontWeight="light">
        {OrderData?.orderItems?.resultPrice}원
      </Typography>
    </>
  );
};

// const Body = styled.div`
//   display: flex-reverse;
//   text-align: center;
//   justify-content: center;
//   margin: 20px;
//   Button {
//     padding: 14px 50px;
//     font-size: 1.5rem;
//     color: inherit;
//     outline: none;
//     margin: 5px;
//     float: left;
//   }
// `;

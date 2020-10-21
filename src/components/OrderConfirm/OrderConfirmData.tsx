import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import palette from '../../lib/styles/palette';
import Typography from '../common/Typography';
import useMakingBouquetStepper from '../Making/hooks/useMakingFlowerStepper';
import useOrderConfirmForm from './hooks/useOrderConfirmForm';
// import { OrderAction } from '../../modules/order';
import { RootState } from '../../modules';

export const OrderConfirmData = () => {
  const { order } = useOrderConfirmForm();
  const OrderData = useSelector((state: RootState) => state?.order);

  return (
    <>
      {OrderData ? (
        <>
          <Typography type="H5" color={palette.color4} fontWeight="bold">
            꽃다발 종류
          </Typography>

          <p />
          <Typography type="H7" color={palette.black} fontWeight="light">
            {OrderData?.bouquet.name}
          </Typography>
          <p />
          <Typography type="H5" color={palette.color4} fontWeight="bold">
            꽃 종류
          </Typography>
          <p />
          {OrderData?.flower}
          <p />
          <Typography type="H5" color={palette.color4} fontWeight="bold">
            꽃 수량
          </Typography>
          <p />
          <Typography type="H7" color={palette.black} fontWeight="light">
            {OrderData?.flower_count}송이
          </Typography>
          <p />
          <Typography type="H5" color={palette.color4} fontWeight="bold">
            리본, 포장지
          </Typography>
          <p />
          <Typography type="H7" color={palette.black} fontWeight="light">
            리본 :{OrderData?.ribbon} | 포장지 :{OrderData?.wrappingPaper}
          </Typography>
          <p />
          <Typography type="H5" color={palette.color4} fontWeight="bold">
            금액
          </Typography>
          <p />
          <Typography type="H7" color={palette.black} fontWeight="light">
            {OrderData?.resultPrice}원
          </Typography>
        </>
      ) : null}
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

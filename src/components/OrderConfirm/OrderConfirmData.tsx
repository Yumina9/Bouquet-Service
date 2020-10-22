import React from 'react';
import { useSelector } from 'react-redux';
import palette from '../../lib/styles/palette';
import Typography from '../common/Typography';
// import useOrderConfirmForm from './hooks/useOrderConfirmForm';
import { RootState } from '../../modules';

export const OrderConfirmData = () => {
  // const { order } = useOrderConfirmForm();

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
            {Array.isArray(OrderData.bouquet)
              ? OrderData.bouquet.map((bouquet) => bouquet.name)
              : OrderData.bouquet?.name}
          </Typography>
          <p />
          <Typography type="H5" color={palette.color4} fontWeight="bold">
            꽃 종류
          </Typography>
          <p />
          {Array.isArray(OrderData.flower)
            ? OrderData.flower.map((flower) => flower.name)
            : OrderData.flower?.name}

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
            {/* 리본 :{OrderData?.ribbon.name} | 포장지 : */}
            {/* {OrderData?.wrappingPaper.name} */}
            {Array.isArray(OrderData.ribbon)
              ? OrderData.ribbon.map((r) => r.name)
              : OrderData.ribbon}
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

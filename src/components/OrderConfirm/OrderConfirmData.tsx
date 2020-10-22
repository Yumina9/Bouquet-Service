import React from 'react';
import { useSelector } from 'react-redux';
import palette from '../../lib/styles/palette';
import Typography from '../common/Typography';
import useOrderConfirmForm from './hooks/useOrderConfirmForm';
import { RootState } from '../../modules';

export const OrderConfirmData = () => {
  const { order } = useOrderConfirmForm();
  const OrderData = useSelector((state: RootState) => state?.order);
  console.log('orderdt', OrderData);

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
          {OrderData?.flower.name}
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
            리본 :{OrderData?.ribbon.name} | 포장지 :
            {OrderData?.wrappingPaper.name}
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
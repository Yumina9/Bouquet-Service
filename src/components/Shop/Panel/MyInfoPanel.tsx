import axiosInstance from '../../login/axios';
import palette from '../../../lib/styles/palette';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typography from '../../common/Typography';
import { CurrentOrderPanel } from './CurrentOrderPanel';
import { PanelBlock } from '../../../lib/styles/styled';
import { PanelForm } from '../PanelForm';
import { ShopType } from '../../../router/Shop/ShopMainPage';

export const MyInfoPanel = () => {
  const [shop, setShop] = useState<ShopType>();

  useEffect(() => {
    axiosInstance.get(`/shop/my`).then(function (response) {
      // Redux에 user -> shop
      setShop(response.data);
    });
  }, []);

  return (
    <>
      <PanelBlock>
        {shop ? (
          <>
            <PanelForm title="내 Shop 정보">
              <MyInfo>
                <div>
                  <Typography
                    type="H4"
                    color={palette.black}
                    fontWeight="medium"
                  >
                    🌷{shop?.name}
                  </Typography>
                  <Typography
                    type="H7"
                    color={palette.black}
                    fontWeight="light"
                  >
                    📖 {shop?.description}
                  </Typography>
                </div>
                <div>
                  <Typography type="H7" color={palette.gray} fontWeight="light">
                    👤 {shop?.florist}
                  </Typography>
                  <Typography
                    type="H7"
                    color={palette.black}
                    fontWeight="light"
                  >
                    🧭 {shop?.location}
                  </Typography>
                  <Typography
                    type="H7"
                    color={palette.black}
                    fontWeight="light"
                  >
                    📞 {shop?.phone}
                  </Typography>
                </div>
              </MyInfo>
            </PanelForm>
            <PanelForm title="주문 목록">
              <CurrentOrderPanel orders={shop.bouquet_order} />
            </PanelForm>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </PanelBlock>
    </>
  );
};

const MyInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 20px;
  & > :first-child {
    flex: 5;
  }

  & > :last-child {
    flex: 5;
  }

  & > div {
    float: left;
  }
`;

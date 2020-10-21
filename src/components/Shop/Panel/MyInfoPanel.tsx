import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { ShopType } from '../../../router/Shop/ShopMainPage';
import Typography from '../../common/Typography';
import palette from '../../../lib/styles/palette';
import { PanelForm } from '../PanelForm';
import { PanelBlock } from '../../../lib/styles/styled';
import axiosInstance from '../../login/axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import { CurrentOrderPanel } from './CurrentOrderPanel';
import { Link } from 'react-router-dom';

export const MyInfoPanel = () => {
  const user = useSelector((state: RootState) => state?.user.user);
  const shopinfo = useSelector((state: RootState) => state?.shop.shop);
  const [shop, setShop] = useState<ShopType>();
  useEffect(() => {
    axiosInstance.get(`/shop/my`).then(function (response) {
      // Redux에 user -> shop

      setShop(response.data);
      console.log('shopinfo', shop);
    });
    console.log('user.shop', user?.shop);
  }, [user]);
  console.log('shopinfo', shopinfo);
  console.log('user', user);

  return (
    <>
      <PanelBlock>
        <PanelForm title="내 Shop 정보">
          <MyInfo>
            <div>
              <Typography type="H4" color={palette.black} fontWeight="medium">
                🌷{user?.shop?.name}
              </Typography>
              <Typography type="H7" color={palette.black} fontWeight="light">
                📖 {user?.shop?.description}
              </Typography>
            </div>
            <div>
              <Typography type="H7" color={palette.gray} fontWeight="light">
                👤 {user?.shop?.florist}
              </Typography>
              <Typography type="H7" color={palette.black} fontWeight="light">
                🧭 {user?.shop?.location}
              </Typography>
              <Typography type="H7" color={palette.black} fontWeight="light">
                📞 {user?.shop?.phone}
              </Typography>
            </div>
          </MyInfo>
          {/* <button>
            <Link to="/shop/:id/shopdetail">수정</Link>
          </button> */}
          
        </PanelForm>
        <PanelForm title="주문 목록">
          <CurrentOrderPanel />
        </PanelForm>
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

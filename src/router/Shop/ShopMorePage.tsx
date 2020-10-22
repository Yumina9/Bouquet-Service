import Header from '../../components/header/Header';
import palette from '../../lib/styles/palette';
import React, { useEffect, useState } from 'react';
import ShopForm from '../../components/Shop/ShopForm';
import styled from 'styled-components';
import Typography from '../../components/common/Typography';
import { Block } from '../../lib/styles/styled';
import { ShopType } from '../Shop/ShopMainPage';
import axiosInstance from '../../components/login/axios';
import Footer from '../../router/Footer';

const ShopMorePage = () => {
  const [shops, setShop] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/shop/list`).then(({ data }) => setShop(data));
  }, []);

  return (
    <>
      <Header />
        <Block>
          <Typography type="H3" color={palette.color4} fontWeight="bold">
            EXPLORE FLOWER SHOP
          </Typography>
          <List>
            {shops.map((shops: ShopType) => {
              return <ShopForm {...shops} />;
            })}
          </List>
        </Block>
      <Footer />
    </>
  );
};

export default ShopMorePage;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  padding: 20px;
  min-height: 500px;
`;

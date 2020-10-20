import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MiniHeader from '../../components/header/MiniHeader';
import axios from 'axios';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import { useParams, Link } from 'react-router-dom';
import { Block } from '../../lib/styles/styled';
import { ShopType } from '../Shop/ShopMainPage';
import Flower, { FlowerType } from '../../components/flowerImg/Flower';
import Header from '../../components/header/Header';
import ShopForm from '../../components/Shop/ShopForm';

const ShopMorePage = () => {
  const [shops, setShop] = useState([]);
  useEffect(() => {
    axios.get(`/shops/`).then(({ data }) => setShop(data));
  }, []);
  console.log(shops);
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
    </>
  );
};

export default ShopMorePage;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  padding: 20px;
`;

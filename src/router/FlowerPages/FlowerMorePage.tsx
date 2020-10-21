import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/header/Header';
import axios from 'axios';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import { useParams, Link } from 'react-router-dom';
import { Block } from '../../lib/styles/styled';
import { ShopType } from '../Shop/ShopMainPage';
import Flower, { FlowerType } from '../../components/flowerImg/Flower';

const FlowerMorePage = () => {
  const { shop_id } = useParams<{ shop_id: string }>();
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    axios.get(`/shop/${shop_id}/flowers`).then(({ data }) => setFlowers(data));
  }, []);
  const [shop, setShop] = useState<ShopType>();
  useEffect(() => {
    axios.get(`/shop/${shop_id}/`).then(({ data }) => setShop(data));
  }, []);
  return (
    <>
      <Header />
      <Block>
        <Link
          to={`/shop/${shop_id}`}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <Typography type="H4" color={palette.color3} fontWeight="medium">
            {shop?.name}
          </Typography>
        </Link>
        <Typography type="H3" color={palette.color4} fontWeight="bold">
          보유 중인 꽃 리스트
        </Typography>
        <List>
          {flowers.map((flower: FlowerType) => {
            return (
              <Link to={`/shop/${shop_id}/flower/${flower.id}`}>
                <Flower {...flower} />
              </Link>
            );
          })}
        </List>
      </Block>
    </>
  );
};

export default FlowerMorePage;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  padding: 20px;
`;

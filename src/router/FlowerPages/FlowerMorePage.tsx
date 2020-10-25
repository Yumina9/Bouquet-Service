import axiosInstance from '../../components/login/axios';
import Flower, { FlowerType } from '../../components/flowerImg/Flower';
import Header from '../../components/header/Header';
import palette from '../../lib/styles/palette';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Typography from '../../components/common/Typography';
import { Block } from '../../lib/styles/styled';
import { Link, useParams } from 'react-router-dom';
import { ShopType } from '../Shop/ShopMainPage';

const FlowerMorePage = () => {
  const { id } = useParams<{ id: string }>();

  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/shop/${id}/flowers`)
      .then(({ data }) => setFlowers(data));
  }, [id]);

  const [shop, setShop] = useState<ShopType>();
  useEffect(() => {
    axiosInstance.get(`/shop/${id}/`).then(({ data }) => setShop(data));
  }, [id]);

  return (
    <>
      <Header />
      <Block>
        <Link
          to={`/shop/${id}`}
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
              <Link to={`/shop/${id}/flower/${flower.id}`}>
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

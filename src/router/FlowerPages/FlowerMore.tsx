import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MiniHeader from '../../components/header/MiniHeader';
import axios from 'axios';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import { useParams, Link } from 'react-router-dom';
import { Block } from '../../lib/styles/styled';
import { ShopType } from '../Shop/ShopMainPage';
import Flower from '../../components/flowerImg/Flower';

const FlowerMore = () => {
  const { id } = useParams();
  const [flowers, setFlowers] = useState([]);
  useEffect(() => {
    axios.get(`/shop/${id}/flowers`).then(({ data }) => setFlowers(data));
  }, []);
  const [shop, setShop] = useState<ShopType>();
  useEffect(() => {
    axios.get(`/shop/${id}/`).then(({ data }) => setShop(data));
  }, []);
  return (
    <>
      <MiniHeader />
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
          {flowers.map(({ id, name, img, description, color }) => {
            return (
              <Flower
                id={id}
                name={name}
                img={img}
                description={description}
                color={color}
              />
            );
          })}
        </List>
      </Block>
    </>
  );
};

export default FlowerMore;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  padding: 20px;
`;

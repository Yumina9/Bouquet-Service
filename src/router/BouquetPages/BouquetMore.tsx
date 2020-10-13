import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MiniHeader from '../../components/header/MiniHeader';
import axios from 'axios';
import Bouquet from '../../components/flowerImg/Bouquet';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import { useParams, Link } from 'react-router-dom';
import { Block } from '../../lib/styles/styled';
import { ShopType } from '../Shop/ShopMainPage';

const BouquetMore = () => {
  const { id } = useParams();
  const [bouquets, setBouquets] = useState([]);
  useEffect(() => {
    axios.get(`/shop/${id}/bouquets`).then(({ data }) => setBouquets(data));
  }, []);

  const [shop, setShop] = useState<ShopType>();
  useEffect(() => {
    axios.get(`/shop/${id}/`).then(({ data }) => setShop(data));
  }, []);
  console.log(shop?.name);

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
          제작 가능한 꽃다발 리스트
        </Typography>

        <List>
          {bouquets.map(({ id, name, img, description }) => {
            return (
              <Bouquet
                id={id}
                name={name}
                img={img}
                description={description}
                shopId={id}
              />
            );
          })}
        </List>
      </Block>
    </>
  );
};

export default BouquetMore;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  padding: 20px;
`;

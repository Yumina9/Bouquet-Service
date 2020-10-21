import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/header/Header';
import axios from 'axios';
import Bouquet, { BouquetType } from '../../components/flowerImg/Bouquet';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import { useParams, Link } from 'react-router-dom';
import { Block } from '../../lib/styles/styled';
import { ShopType } from '../Shop/ShopMainPage';
import Axios from 'axios';

const BouquetMorePage = () => {
  const { shop_id } = useParams<{ shop_id: string }>();
  const [bouquets, setBouquets] = useState([]);
  useEffect(() => {
    Axios.get(`/shop/${shop_id}/bouquets`).then(({ data }) =>
      setBouquets(data),
    );
  }, []);
  console.log('bouquets', bouquets);

  const [shop, setShop] = useState<ShopType>();
  useEffect(() => {
    Axios.get(`/shop/${shop_id}/`).then(({ data }) => setShop(data));
  }, []);
  console.log(shop?.name);

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
          제작 가능한 꽃다발 리스트
        </Typography>

        <List>
          {bouquets.map((bouquet: BouquetType) => {
            return (
              <Link
                to={`/shop/${shop_id}/bouquet/${bouquet.id}`}
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                <Bouquet {...bouquet} />
              </Link>
            );
          })}
        </List>
      </Block>
    </>
  );
};

export default BouquetMorePage;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  padding: 20px;
`;

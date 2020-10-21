import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { ShopType } from '../../router/Shop/ShopMainPage';
import Typography from '../common/Typography';

export const GoShopMain = () => {
  const { shop_id } = useParams<{
    shop_id: string;
  }>();
  const [shop, setShop] = useState<ShopType>();
  useEffect(() => {
    Axios.get(`/shop/${shop_id}/`).then(({ data }) => setShop(data));
  }, []);
  return (
    <Link
      to={`/shop/${shop_id}`}
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      <Typography type="H4" color={palette.color3} fontWeight="medium">
        {shop?.name}
      </Typography>
    </Link>
  );
};

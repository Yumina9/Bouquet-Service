import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

import BouquetList from '../../components/flowerImg/BouquetList';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import Axios from 'axios';
import { BouquetType } from '../../components/flowerImg/Bouquet';
import { FlowerType } from '../../components/flowerImg/Flower';
import FlowerList from '../../components/flowerImg/FlowerList';
import ShopInfoBanner from '../../components/Shop/ShopInfoBanner';
import Header from '../../components/header/Header';
import { Block } from '../../lib/styles/styled';
import { ShopReview } from '../../components/Shop/ShopReview';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import axiosInstance from '../../components/login/axios';

export type ShopType = {
  id: number;
  img: string;
  bouquets: BouquetType[];
  flowers: FlowerType[];
  name: string;
  location: string;
  florist: string;
  description: string;
  phone: string;
  instagram: string;
  facebook: string;
};

const ShopMainPage = () => {
  const user = useSelector((state: RootState) => state?.user.user);
  const { shop_id } = useParams<{ shop_id: string }>();
  const [shop, setShop] = useState<ShopType>();
  useEffect(() => {
    Axios.get(`/shop/${shop_id}/`).then(function (response) {
      setShop(response.data);
    });
    console.log('user.shop', user?.shop);
  }, [user]);

  console.log('shop', shop);
  console.log('shop_id', shop_id);
  return (
    <div>
      <Header />
      {shop && (
        <>
          <Block>
            <ShopInfoBanner shop={shop} />
          </Block>
          <Block>
            <Typography type="H4" color={palette.color4} fontWeight="bold">
              꽃다발 리스트
            </Typography>
            <Link
              to={`/shop/${shop_id}/bouquets`}
              style={{
                color: 'inherit',
                textDecoration: 'none',
                float: 'right',
              }}
            >
              <Typography type="H7" color={palette.color4} fontWeight="bold">
                더보기
              </Typography>
            </Link>
            <BouquetList bouquets={shop.bouquets} />
          </Block>
          <Block>
            <Typography type="H4" color={palette.color4} fontWeight="bold">
              현재 보유 꽃 리스트
            </Typography>
            <Typography type="H7" color={palette.color4} fontWeight="bold">
              <Link
                to={`/shop/${shop_id}/flowers`}
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  float: 'right',
                }}
              >
                더보기
              </Link>
            </Typography>
            <FlowerList flowers={shop.flowers} />
          </Block>
          {/* <Block>
            <ShopReview />
          </Block> */}
        </>
      )}
    </div>
  );
};

export default ShopMainPage;

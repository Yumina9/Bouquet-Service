import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { MiniHeader } from '../../../components/header/MiniHeader';
import SellerInfo from '../../../components/header/SellerInfo';
import BouquetList from '../../../components/flowerImg/BouquetList';
import Typography from '../../../components/common/Typography';
import palette from '../../../lib/styles/palette';
import Axios from 'axios';
import { BouquetType } from '../../../components/flowerImg/Bouquet';
import { FlowerType } from '../../../components/flowerImg/Flower';
import FlowerList from '../../../components/flowerImg/FlowerList';

export type ShopType = {
  id: number;
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
  const { id } = useParams();
  const [shop, setShop] = useState<ShopType>();
  useEffect(() => {
    Axios.get(`/shop/${id}/`).then(({ data }) => setShop(data));
  }, []);
  console.log('shop', shop);

  return (
    <div>
      <MiniHeader />
      {shop && (
        <>
          <Block>
            <SellerInfo />
          </Block>
          <Block>
            <Typography type="H4" color={palette.color4} fontWeight="bold">
              꽃다발 리스트
            </Typography>
            <Link
              to={`/shop/${id}/bouquets`}
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
                to={`/shop/${id}/flowers`}
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
        </>
      )}
    </div>
  );
};

export default ShopMainPage;

const Block = styled.div`
  padding: 25px 100px;
`;

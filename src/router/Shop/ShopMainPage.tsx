import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { BouquetType } from '../../components/flowerImg/Bouquet';
import { FlowerType } from '../../components/flowerImg/Flower';
import ShopInfoBanner from '../../components/Shop/ShopInfoBanner';
import Header from '../../components/header/Header';
import useShopMainPage from './hooks/useShopMainPage';
import { Container } from '@material-ui/core';
import ShopFlowerList from './ShopFlowerList';
import ShopBouquetList from './ShopBouquetList';
import { BouquetOrderType } from '../../components/Shop/Panel/CurrentOrderPanel';
import Footer from '../Footer';
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
  bouquet_order: BouquetOrderType[];
};

const ShopMainPage = () => {
  const { id } = useParams<{ id: string }>();
  const { shop } = useShopMainPage({ id });

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        {shop ? (
          <Block>
            <ShopInfoBanner shop={shop} />
            <ShopBouquetList id={id} bouquets={shop.bouquets} />
            <ShopFlowerList id={id} flowers={shop.flowers} />
            
          </Block>
        ) : (
          <h1>Loading...</h1>
        )}
        
      </Container>
      <Footer />
    </>
  );
};

export default ShopMainPage;

const Block = styled.div`
  margin-top: 20px;
`;

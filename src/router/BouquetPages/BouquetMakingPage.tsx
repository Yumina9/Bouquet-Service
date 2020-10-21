import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/header/Header';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import MakingBouquetStepper from '../../components/Making/MakingBouquetStepper';
import Button from '../../components/common/Button';
import { Block } from '../../lib/styles/styled';
import useBouquetMakingPage from './hooks/useBouquetMakingPage';
import { GoShopMain } from '../../components/Shop/GoShopMain';

const BouquetMakingPage = () => {
  const { bouquet, shop_id } = useBouquetMakingPage();

  if (!bouquet) {
    return <h1>Loading..</h1>;
  }

  return (
    <>
      <Header />
      <Block>
        <GoShopMain />
        <Body>
          <Typography type="H3" color={palette.color1} fontWeight="bold">
            Bouquet Making
          </Typography>
          {/* 여기 MakingBouquetSteepr 호출  */}
          {bouquet && (
            <MakingBouquetStepper bouquet={bouquet} shop_id={shop_id} />
          )}
        </Body>
      </Block>
    </>
  );
};

export default BouquetMakingPage;

const Body = styled.div`
  display: flex-reverse;
  text-align: center;
  margin: 20px;
`;

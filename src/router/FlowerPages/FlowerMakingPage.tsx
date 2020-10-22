import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import MakingFlowerStepper from '../../components/Making/MakingFlowerStepper';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import { Block } from '../../lib/styles/styled';
import useFlowerMakingPage from './hooks/useFlowerMakingPage';
import { GoShopMain } from '../../components/Shop/GoShopMain';

const FlowerMakingPage = () => {
  const { shop_id, flower_id } = useParams<{
    shop_id: string;
    flower_id: string;
  }>();

  const { flower } = useFlowerMakingPage(shop_id);

  if (!flower) {
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
          {flower && <MakingFlowerStepper flower={flower} shop_id={shop_id} />}
        </Body>
      </Block>
    </>
  );
};

export default FlowerMakingPage;

const Body = styled.div`
  display: flex-reverse;
  text-align: center;
  margin: 20px;
`;

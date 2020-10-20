import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Button from '../../components/common/Button';
import palette from '../../lib/styles/palette';
import ExplanationImage from '../../components/Making/ExplanationImage';
import Typography from '../../components/common/Typography';
import { BouquetType } from '../../components/flowerImg/Bouquet';
import { Block } from '../../lib/styles/styled';
import useOrderConfirmForm from '../../components/OrderConfirm/hooks/useOrderConfirmForm';
import { FlowerType } from '../../components/flowerImg/Flower';
import useBouquetExplanation from './hooks/useBouquetExplanation';
import { useDispatch } from 'react-redux';
import { insertOrderData } from '../../modules/order';

const BouquetExplanationPage: React.FC<BouquetType> = () => {
  const { setOrder } = useOrderConfirmForm();
  const {
    bouquet,
    bouquet_id,
    shop_id,
    flowerName,
    wrappingPaperName,
    ribbonName,
  } = useBouquetExplanation();
  useEffect(() => {
    setOrder({
      bouquet: bouquet?.name,
      flower: flowerName,
      flower_count: bouquet?.flower_count,
      wrappingPaper: wrappingPaperName,
      ribbon: ribbonName,
    });
  }, [bouquet]);

  const dispatch = useDispatch();

  dispatch(
    insertOrderData({
      bouquet: bouquet?.name,
      flower: flowerName,
      flower_count: bouquet?.flower_count,
      wrappingPaper: wrappingPaperName,
      ribbon: ribbonName,
      resultPrice: bouquet?.resultPrice,
    }),
  );

  if (!bouquet) {
    return <h1>Loading..</h1>;
  }

  return (
    <>
      <Header />
      <Block>
        <Box>
          <Detail>
            <Img src={`${bouquet?.img}`} />
            <Description>
              <Typography type="H4" color={palette.color4} fontWeight="bold">
                {`${bouquet?.name}`}
              </Typography>
              <Typography type="H7" color={palette.color4} fontWeight="light">
                {`${bouquet?.description}`}
              </Typography>
            </Description>
          </Detail>
          <span>
            <Link
              to={`making`}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <Button color={palette.white} bgColor={palette.color3}>
                만들기
              </Button>
            </Link>
            <Link
              to={`/shop/${shop_id}/orderConfirm/${bouquet_id}`}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <Button color={palette.white} bgColor={palette.color3}>
                주문하기
              </Button>
            </Link>
          </span>
        </Box>
      </Block>
    </>
  );
};

export default BouquetExplanationPage;

const Box = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  text-align: center;
  & > :first-child {
    flex: 8;
  }

  & > :last-child {
    flex: 2;
  }
  Button {
    padding: 14px 50px;
    font-size: 1.5rem;
    color: inherit;
    outline: none;
    justify-content: right;
    float: left;
    margin: 5px;
  }
  span {
    float: left;
  }
`;

const Detail = styled.div`
  display: flex;
  padding: 30px;
  text-align: center;
  & > :first-child {
    flex: 5;
  }

  & > :last-child {
    flex: 5;
  }
`;

const Img = styled.img`
  margin: 50px;
  border-radius: 5px;
  width: 410px;
  height: auto;
`;

const Description = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  text-align: center;
  & > :first-child {
    flex: 2;
  }

  & > :last-child {
    flex: 8;
  }
`;

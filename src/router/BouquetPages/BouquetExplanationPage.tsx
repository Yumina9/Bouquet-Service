import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import MiniHeader from '../../components/header/MiniHeader';
import Button from '../../components/common/Button';
import palette from '../../lib/styles/palette';
import ExplanationImage from '../../components/Making/ExplanationImage';
import Typography from '../../components/common/Typography';
import { BouquetType } from '../../components/flowerImg/Bouquet';
import { Block } from '../../lib/styles/styled';

const BouquetExplanationPage: React.FC<BouquetType> = () => {
  const { shop_id, bouquet_id } = useParams<{
    shop_id: string;
    bouquet_id: string;
  }>();

  const [bouquet, setBouquet] = useState<BouquetType>();

  useEffect(() => {
    axios.get(`/bouquets/${bouquet_id}`).then(({ data }) => setBouquet(data));
  }, []);

  return (
    <>
      <MiniHeader />
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
              to={`/shop/${shop_id}/orderConfirm/${bouquet_id}/finished`}
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

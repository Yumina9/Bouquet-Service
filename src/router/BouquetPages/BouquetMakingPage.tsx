import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MiniHeader from '../../components/header/MiniHeader';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MakingBouquetStepper from '../../components/Making/MakingBouquetStepper';
import Button from '../../components/common/Button';
import { Block } from '../../lib/styles/styled';
import { BouquetType } from '../../components/flowerImg/Bouquet';
import { RouteComponentProps } from 'react-router-dom';

const BouquetMakingPage = ({ history }: RouteComponentProps) => {
  const { shop_id: shopId, bouquet_id: bouquetId } = useParams<{
    shop_id: string;
    bouquet_id: string;
  }>();

  const [bouquet, setBouquet] = useState<BouquetType>();

  useEffect(() => {
    axios.get(`/bouquets/${bouquetId}`).then(({ data }) => setBouquet(data));
  }, []);

  if (!bouquet) {
    return <h1>Loading..</h1>;
  }

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <MiniHeader />
      <Block>
        <Body>
          <Typography type="H3" color={palette.color1} fontWeight="bold">
            Bouquet Making
          </Typography>
          {/* 여기 MakingBouquetSteepr 호출  */}
          <MakingBouquetStepper {...bouquet} />

          <Button
            color={palette.white}
            bgColor={palette.color3}
            onClick={goBack}
          >
            뒤로가기
          </Button>

          <Link
            to={`/shop/${shopId}/bouquet/${bouquetId}/confirmation`}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Button color={palette.white} bgColor={palette.color3}>
              주문하기
            </Button>
          </Link>
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

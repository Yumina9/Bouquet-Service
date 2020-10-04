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

const BouquetMaking: React.FC<{}> = () => {
  const { id } = useParams();

  // 여기는 bouquet인데 왜 FlowerType?
  const [bouquet, setBouquet] = useState<BouquetType>();

  useEffect(() => {
    axios.get(`/bouquets/${id}`).then(({ data }) => setBouquet(data));
  }, []);

  if (!bouquet) {
    return <h1>Loading..</h1>;
  }

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
          <Link
            to={`/bouquet/${id}`}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Button color={palette.white} bgColor={palette.color3}>
              뒤로가기
            </Button>
          </Link>
          <Link
            to={`/confirmation/${id}`}
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

export default BouquetMaking;

const Body = styled.div`
  display: flex-reverse;
  text-align: center;
  margin: 20px;
`;

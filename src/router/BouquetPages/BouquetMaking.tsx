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
import { FlowerType } from '../../components/flowerImg/Flower';
import { Block } from '../../lib/styles/styled';

const BouquetMaking: React.FC<FlowerType> = () => {
  const { id } = useParams();
  const [bouquet, setBouquet] = useState<FlowerType>();
  useEffect(() => {
    axios.get(`/bouquets/${id}`).then(({ data }) => setBouquet(data));
  }, []);
  console.log(bouquet);
  return (
    <>
      <MiniHeader />
      <Block>
        <Body>
          <Typography type="H3" color={palette.color1} fontWeight="bold">
            Bouquet Making
          </Typography>
          <MakingBouquetStepper />
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

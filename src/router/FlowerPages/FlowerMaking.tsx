import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import MiniHeader from '../../components/header/MiniHeader';
import MakingFlowerStepper from '../../components/Making/MakingFlowerStepper';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import Button from '../../components/common/Button';
import Axios from 'axios';
import { FlowerType } from '../../components/flowerImg/Flower';
import { Block } from '../../lib/styles/styled';

const FlowerMaking = () => {
  const { id } = useParams();

  const [flower, setFlower] = useState<FlowerType>();
  useEffect(() => {
    Axios.get(`/flowers/${id}`).then(({ data }) => setFlower(data)); // setState -> state 변경 -> rerender -> 데이터가 반영된 새로운 화면이 그려진다.
  }, []);
  return (
    <>
      <MiniHeader />
      <Block>
      <Body>
        <Typography type="H3" color={palette.color1} fontWeight="bold">
          Bouquet Making
        </Typography>
        <MakingFlowerStepper />
        <Link to={`/flower/${id}`}>
          <Button color={palette.white} bgColor={palette.color3}>
            뒤로가기
          </Button>
        </Link>
        <Link to="">
          <Button color={palette.white} bgColor={palette.color3}>
            주문하기
          </Button>
        </Link>
      </Body>
      </Block>
    </>
  );
};

export default FlowerMaking;

const Body = styled.div`
  display: flex-reverse;
  text-align: center;
  margin: 20px;
`;

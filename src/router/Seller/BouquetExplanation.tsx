import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { FlowerType } from '../../components/flowerImg/FlowerList';
import { MiniHeader } from '../../components/header/MiniHeader';
import Button from '../../components/common/Button';
import palette from '../../components/lib/styles/palette';
import ExplanationImage from '../../components/Making/ExplanationImage';
import Typography from '../../components/common/Typography';

const BouquetExplanation: React.FC<FlowerType> = () => {
  const { id } = useParams();
  const [bouquet, setBouquet] = useState<FlowerType>();

  useEffect(() => {
    axios.get(`/bouquets/${id}`).then(({ data }) => setBouquet(data));
  }, []);

  return (
    <>
      <MiniHeader />
      <Block>
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
            to={`/making/bouquet/${id}`}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Button color={palette.white} bgColor={palette.color3}>
              만들기
            </Button>
          </Link>
          <Link
            to="/confirmation"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Button color={palette.white} bgColor={palette.color3}>
              주문하기
            </Button>
          </Link>
        </span>
      </Block>
    </>
  );
};

export default BouquetExplanation;

const Block = styled.div`
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
  width: 100%;
  margin: 50px;
  border-radius: 5px;
  width: 410px;
  height: 410px;
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

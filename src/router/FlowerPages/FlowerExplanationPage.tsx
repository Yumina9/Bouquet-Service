import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import MiniHeader from '../../components/header/MiniHeader';
import Button from '../../components/common/Button';
import palette from '../../lib/styles/palette';
import ExplanationImage from '../../components/Making/ExplanationImage';
import Typography from '../../components/common/Typography';
import { FlowerType } from '../../components/flowerImg/Flower';
import { Block } from '../../lib/styles/styled';

const FlowerExplanationPage: React.FC<FlowerType> = () => {
  const { id } = useParams();

  const [flower, setFlower] = useState<FlowerType>();
  useEffect(() => {
    axios.get(`/flowers/${id}`).then(({ data }) => setFlower(data)); // setState -> state 변경 -> rerender -> 데이터가 반영된 새로운 화면이 그려진다.
  }, []);

  console.log(flower);

  return (
    <>
      <MiniHeader />
      <Block>
        <Box>
          <Detail>
            <Img src={`${flower?.img}`} />
            <Description>
              <Typography type="H4" color={palette.color4} fontWeight="bold">
                {`${flower?.color} ${flower?.name}`}
              </Typography>
              <Typography type="H7" color={palette.color4} fontWeight="light">
                {`${flower?.description}`}
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
          </span>
        </Box>
      </Block>
    </>
  );
};

export default FlowerExplanationPage;

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
  }
  span {
    float: left;
  }
`;

const Detail = styled.div`
  display: flex;
  padding: 50px;
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
  height: 500px;
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

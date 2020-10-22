import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Button from '../../components/common/Button';
import palette from '../../lib/styles/palette';
import Typography from '../../components/common/Typography';
import { FlowerType } from '../../components/flowerImg/Flower';
import { Block } from '../../lib/styles/styled';
import useFlowerMakingPage from './hooks/useFlowerMakingPage';
import { GoShopMain } from '../../components/Shop/GoShopMain';

const FlowerExplanationPage: React.FC<FlowerType> = () => {
  const { flower_id: flowerId } = useParams<{
    shop_id: string;
    flower_id: string;
  }>();

  const { flower } = useFlowerMakingPage(flowerId);
  console.log(flower);

  return (
    <>
      <Header />
      <Block>
        <GoShopMain />
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

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
  const { flower_id } = useParams<{
    shop_id: string;
    flower_id: string;
  }>();

  const { flower } = useFlowerMakingPage(flower_id);

  return (
    <>
      <Header />
      <Block>
        <GoShopMain />
        <Box>
          <Detail>
            <Img src={`${flower?.img}`} />
            <Description>
              <p> </p>
              <div>
                <p style={{ margin: '10px' }}>
                  <Typography
                    type="H4"
                    color={palette.color4}
                    fontWeight="bold"
                  >
                    {`${flower?.color} ${flower?.name}`}
                  </Typography>
                  <Typography
                    type="H7"
                    color={palette.color4}
                    fontWeight="light"
                  >
                    <p>{`${flower?.description}`}</p>
                    <p>{`${flower?.season}`}</p>
                  </Typography>
                </p>
              </div>
              <p>
                <h2>상품 금액 : {flower?.price} 원</h2>
              </p>
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
            </Description>
          </Detail>
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
    margin: auto;
  }
  span {
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
  justify-content: center;
  & > :first-child {
    flex: 1;
  }

  & > :last-child {
    flex: 2;
    span {
      justify-content: center;
    }
  }
`;

import React from 'react';
import styled from 'styled-components';
import { Link, useHistory, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import MakingFlowerStepper from '../../components/Making/MakingFlowerStepper';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import Button from '../../components/common/Button';
import { Block } from '../../lib/styles/styled';
import useFlowerMakingPage from './hooks/useFlowerMakingPage';
import { GoShopMain } from '../../components/Shop/GoShopMain';

const FlowerMakingPage = () => {
  const { flower_id } = useParams<{
    shop_id: string;
    flower_id: string;
  }>();

  const { flower } = useFlowerMakingPage(flower_id);

  let history = useHistory();

  if (!flower) {
    return <h1>Loading..</h1>;
  }

  return (
    <>
      <Header />
      <Block>
        <GoShopMain />
        <Body>
          <Typography type="H3" color={palette.color1} fontWeight="bold">
            Bouquet Making
          </Typography>
          {flower && <MakingFlowerStepper {...flower} />}
          {/* MakingFlowerStepper에 flower가 처음에 빈 객체이기 때문에 있을 경우에만 렌더링 */}

          <Button
            color={palette.white}
            bgColor={palette.color3}
            onClick={() => history.goBack()}
          >
            뒤로가기
          </Button>

          <Link
            to={`/orderConfirm`}
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

export default FlowerMakingPage;

const Body = styled.div`
  display: flex-reverse;
  text-align: center;
  margin: 20px;
`;

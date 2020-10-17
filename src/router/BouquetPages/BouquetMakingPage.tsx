import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import MiniHeader from '../../components/header/MiniHeader';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import MakingBouquetStepper from '../../components/Making/MakingBouquetStepper';
import Button from '../../components/common/Button';
import { Block } from '../../lib/styles/styled';
import useBouquetMakingPage from './hooks/useBouquetMakingPage';

const BouquetMakingPage = () => {
  const { bouquet, bouquetId, shopId } = useBouquetMakingPage();
  let history = useHistory();

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
          {bouquet && <MakingBouquetStepper {...bouquet} />}

          <Button
            color={palette.white}
            bgColor={palette.color3}
            onClick={() => history.goBack()}
          >
            뒤로가기
          </Button>

          <Link
            to={`/shop/${shopId}/orderConfirm/${bouquetId}`}
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

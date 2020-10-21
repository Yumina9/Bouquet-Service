import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import Button from '../../components/common/Button';
import palette from '../../lib/styles/palette';
import Typography from '../../components/common/Typography';
import { BouquetType } from '../../components/flowerImg/Bouquet';
import { Block } from '../../lib/styles/styled';
import useBouquetExplanation from './hooks/useBouquetExplanation';
import { useDispatch } from 'react-redux';
import { insertOrderData } from '../../modules/order';

import { GoShopMain } from '../../components/Shop/GoShopMain';

const BouquetExplanationPage: React.FC<BouquetType> = () => {
  // shop/:shop_id/bouquet/:bouquet_id
  const { shop_id, bouquet_id } = useParams<{
    shop_id: string;
    bouquet_id: string;
  }>();

  const dispatch = useDispatch();
  const { bouquet } = useBouquetExplanation(bouquet_id);

  // 해당 페이지에 들어오면 주문 데이터에 해당 부켓 정보를 넣어준다.
  useEffect(() => {
    // 부케 데이터 패치에 성공해서 부케 데이터가 존재한다면 리덕스에 부케 기본정보를 넣어준다.
    if (bouquet) {
      dispatch(
        insertOrderData({
          bouquet,
          flower: null,
          flower_count: bouquet?.flower_count,
          resultPrice: bouquet?.resultPrice,
          shop_id: bouquet.shops,
          ribbon: '',
          wrappingPaper: '',
        }),
      );
    }
  }, [bouquet]);

  if (!bouquet) {
    return <h1>Loading..</h1>;
  }
  return (
    <>
      <Header />
      <Block>
        {bouquet && (
          <>
            <GoShopMain />
            <Box style={{ background: '#f1f2f3' }}>
              <Detail>
                <Img src={`${bouquet?.img}`} />
                <Description>
                  <div>
                    <p style={{ margin: '10px' }}>
                      <Typography
                        type="H4"
                        color={palette.color4}
                        fontWeight="bold"
                      >
                        {`${bouquet?.name}`}
                      </Typography>
                      <Typography
                        type="H7"
                        color={palette.color4}
                        fontWeight="light"
                      >
                        {`${bouquet?.description}`}
                      </Typography>
                      <h4>
                        {bouquet.flower.map((f) => (
                          <>#{f.name} </>
                        ))}
                        {bouquet.wrappingpaper.map((w) => (
                          <>#{w.name}</>
                        ))}
                      </h4>
                    </p>
                  </div>
                  <p>
                    <h2>상품 금액 : {bouquet.resultPrice} 원</h2>
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
                    <Link
                      to={`/shop/${shop_id}/orderConfirm`}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      <Button color={palette.white} bgColor={palette.color3}>
                        주문하기
                      </Button>
                    </Link>
                  </span>
                </Description>
              </Detail>
            </Box>
          </>
        )}
      </Block>
    </>
  );
};

export default BouquetExplanationPage;

const Box = styled.div`
  display: flex;
  padding: 0, 20px;
  flex-direction: column;
  text-align: center;
  Button {
    padding: 14px 50px;
    font-size: 1.5rem;
    color: inherit;
    outline: none;
    float: left;
    margin: 5px;
  }
  span {
    display: flex;
    flex-direction: row;
    /* float: left; */
    justify-content: center;
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
  margin: 50px;
  border-radius: 5px;
  width: 410px;
  height: auto;
`;

const Description = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  & > :first-child {
    flex: 8;
  }

  & > :last-child {
    flex: 1;
    span {
      justify-content: center;
    }
  }
  h4 {
    color: ${palette.color3};
  }
`;

const Icon = styled.img`
  width: 25px;
`;

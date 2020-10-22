import Bouquet, { BouquetType } from '../../components/flowerImg/Bouquet';
import Header from '../../components/header/Header';
import palette from '../../lib/styles/palette';
import React from 'react';
import styled from 'styled-components';
import Typography from '../../components/common/Typography';
import useBouquetMorePage from './hooks/useBouquetMorePage';
// import { Block } from '../../lib/styles/styled';
import { Link, useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';

const BouquetMorePage = () => {
  const { id } = useParams<{ id: string }>();

  const { shop } = useBouquetMorePage({ shopId: id });
  return (
    <>
      <Header />
      {shop ? (
        <Container maxWidth="lg">
          <Link
            to={`/shop/${id}`}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Typography type="H4" color={palette.color3} fontWeight="medium">
              {shop?.name}
            </Typography>
          </Link>
          <Typography type="H3" color={palette.color4} fontWeight="bold">
            제작 가능한 꽃다발 리스트
          </Typography>

          <List>
            {shop.bouquets.map((bouquet: BouquetType) => {
              return (
                <Link
                  to={`/shop/${id}/bouquet/${bouquet.id}`}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <Bouquet {...bouquet} />
                </Link>
              );
            })}
          </List>
        </Container>
      ) : null}
    </>
  );
};

export default BouquetMorePage;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin: 20px; */
  /* padding: 20px; */
`;

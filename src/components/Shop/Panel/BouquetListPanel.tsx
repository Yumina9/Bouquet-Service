import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Bouquet, { BouquetType } from '../../flowerImg/Bouquet';
import Typography from '../../common/Typography';
import palette from '../../../lib/styles/palette';
import Button from '../../common/Button';

export const BouquetListPanel = () => {
  const { id } = useParams();
  const [bouquets, setBouquets] = useState<BouquetType[]>([]);
  useEffect(() => {
    Axios.get(`/shop/${id}/bouquets`).then(({ data }) => setBouquets(data));
  }, []);

  return (
    <>
      <Typography type="H4" color={palette.color3} fontWeight="bold">
        현재 보유 중인 꽃다발 리스트
      </Typography>
      <Button color={palette.white} bgColor={palette.color3}>
        추가하기
      </Button>

      <BouquetList>
        {bouquets.map(({ id, name, img, description }) => {
          return (
            <Bouquet id={id} name={name} img={img} description={description} />
          );
        })}
      </BouquetList>
    </>
  );
};

const BouquetList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

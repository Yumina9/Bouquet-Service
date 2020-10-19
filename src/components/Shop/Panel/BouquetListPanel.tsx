import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Bouquet, { BouquetType } from '../../flowerImg/Bouquet';
import Typography from '../../common/Typography';
import palette from '../../../lib/styles/palette';
import Button from '../../common/Button';
import { PanelForm } from '../PanelForm';
import { PanelBlock } from '../../../lib/styles/styled';

export const BouquetListPanel = () => {
  const { id } = useParams<{ id: string }>();
  const [bouquets, setBouquets] = useState<BouquetType[]>([]);
  useEffect(() => {
    Axios.get(`/shop/${id}/bouquets`).then(({ data }) => setBouquets(data));
  }, []);

  return (
    <>
      <PanelBlock>
        <PanelForm title="현재 보유 중인 꽃다발 리스트">
          <BouquetList>
            {bouquets.map((bouquet: BouquetType) => {
              return <Bouquet {...bouquet} />;
            })}
          </BouquetList>
        </PanelForm>
      </PanelBlock>
    </>
  );
};

const BouquetList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

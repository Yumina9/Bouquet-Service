import Bouquet, { BouquetType } from '../../flowerImg/Bouquet';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PanelBlock } from '../../../lib/styles/styled';
import { PanelForm } from '../PanelForm';
import { RootState } from '../../../modules';
import { useSelector } from 'react-redux';
import axiosInstance from '../../login/axios';

export const BouquetListPanel = () => {
  const [bouquets, setBouquets] = useState<BouquetType[]>([]);
  const user = useSelector((state: RootState) => state?.user.user);

  useEffect(() => {
    if (user) {
      axiosInstance
        .get(`/shop/${user.shop}/bouquets`)
        .then(function (response) {
          setBouquets(response.data);
        });
    }
  }, [user]);

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

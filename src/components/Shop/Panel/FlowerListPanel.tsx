import axiosInstance from '../../login/axios';
import Flower, { FlowerType } from '../../flowerImg/Flower';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PanelBlock } from '../../../lib/styles/styled';
import { PanelForm } from '../PanelForm';
import { RootState } from '../../../modules';
import { useSelector } from 'react-redux';

export const FlowerListPanel = () => {
  const [flowers, setFlowers] = useState<FlowerType[]>([]);

  const user = useSelector((state: RootState) => state?.user.user);

  useEffect(() => {
    axiosInstance.get(`/shop/${user.shop}/flowers`).then(function (response) {
      setFlowers(response.data);
    });
  }, [user]);

  return (
    <>
      <PanelBlock>
        <PanelForm title="현재 보유 중인 꽃 리스트">
          <FlowerList>
            {flowers.map(({ ...flowers }) => {
              return <Flower {...flowers} />;
            })}
          </FlowerList>
        </PanelForm>
      </PanelBlock>
    </>
  );
};

const FlowerList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

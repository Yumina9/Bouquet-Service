import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Flower, { FlowerType } from '../../flowerImg/Flower';
import Typography from '../../common/Typography';
import palette from '../../../lib/styles/palette';
import Button from '../../common/Button';
import { PanelForm } from '../PanelForm';
import { PanelBlock } from '../../../lib/styles/styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import axiosInstance from '../../login/axios';

export const FlowerListPanel = () => {
  const [flowers, setFlowers] = useState<FlowerType[]>([]);

  const user = useSelector((state: RootState) => state?.user.user);

  useEffect(() => {
    Axios.get(`/shop/${user.shop}/flowers`).then(function (response) {
      setFlowers(response.data);
      console.log('flowersinfo', flowers);
    });
    console.log('user.shop', user?.shop);
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

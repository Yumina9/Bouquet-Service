import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { ShopType } from '../../../router/Shop/ShopMainPage';
import Typography from '../../common/Typography';
import palette from '../../../lib/styles/palette';
import { PanelForm } from '../PanelForm';
import { PanelBlock } from '../../../lib/styles/styled';

export const MyInfoPanel = () => {
  const { id } = useParams();
  const [shop, setShop] = useState<ShopType>();
  useEffect(() => {
    Axios.get(`/shop/${id}`).then(({ data }) => setShop(data));
  }, []);

  return (
    <>
      <PanelBlock>
        <PanelForm title="내 Shop 정보">
          <MyInfo>
            <Typography type="H3" color={palette.gray} fontWeight="bold">
              {shop?.name}
            </Typography>
            <Typography type="H5" color={palette.lightgray} fontWeight="medium">
              {shop?.florist}
            </Typography>
            <Typography type="H5" color={palette.lightgray} fontWeight="medium">
              {shop?.description}
            </Typography>
            <Typography type="H5" color={palette.lightgray} fontWeight="medium">
              {shop?.location}
            </Typography>
            <Typography type="H5" color={palette.lightgray} fontWeight="medium">
              {shop?.phone}
            </Typography>
          </MyInfo>
        </PanelForm>
      </PanelBlock>
    </>
  );
};

const MyInfo = styled.div`
  margin: 30px;
`;

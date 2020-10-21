import React from 'react';
import styled from 'styled-components';
import Typography from '../common/Typography';
import palette from '../../lib/styles/palette';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import FacebookIcon from '@material-ui/icons/Facebook';
import { ShopType } from '../../router/Shop/ShopMainPage';

interface ShopInfoListProps {
  shop: ShopType;
}
const ShopInfo = ({ shop }: ShopInfoListProps) => {
  return (
    <Box>
      <ShopTitle> {shop.name} </ShopTitle>

      <Typography type="H7" color={palette.color4} fontWeight="light">
        <p>{shop.description}</p>
        <p>플로리스트 : {shop.florist}</p>
        <p>주소 : {shop.location}</p>
        <p>
          <PhoneIphoneIcon fontSize="large" /> {shop.phone}
        </p>
        <p>
          {shop.instagram && (
            <a href={shop.instagram}>
              <InstagramIcon fontSize="large" />
            </a>
          )}
          {shop.facebook && (
            <a href={shop.facebook}>
              <FacebookIcon fontSize="large" />
            </a>
          )}
        </p>
      </Typography>
    </Box>
  );
};

export default ShopInfo;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  width: 100%;

  & > div {
    margin: 5px;
  }
`;

const ShopTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;

  &:hover {
    color: ${palette.color3};
  }
`;

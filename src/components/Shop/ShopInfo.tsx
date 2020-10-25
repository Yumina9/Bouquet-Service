import React from 'react';
import styled from 'styled-components';
import Typography from '../common/Typography';
import palette from '../../lib/styles/palette';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import FacebookIcon from '@material-ui/icons/Facebook';
import { ShopType } from '../../router/Shop/ShopMainPage';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import BusinessIcon from '@material-ui/icons/Business';

interface ShopInfoListProps {
  shop: ShopType;
}
const ShopInfo = ({ shop }: ShopInfoListProps) => {
  return (
    <Box>
      <ShopTitle> {shop.name} </ShopTitle>

      <Typography type="H7" color={palette.color4} fontWeight="light">
        <p>{shop.description}</p>
        <p><LocalFloristIcon fontSize="large" /> {shop.florist}</p>
        <p><BusinessIcon fontSize="large" /> {shop.location}</p>
        <p>
          <PhoneIphoneIcon fontSize="large" /> {shop.phone}
        </p>
        <p>
          {shop.instagram && (
            <a href={shop.instagram}>
              <InstagramIcon fontSize="large" style={{ color: 'black' }} />
            </a>
          )}
          <br />
          {shop.facebook && (
            <a href={shop.facebook} >
              <FacebookIcon fontSize="large" style={{ color: 'black' }} />
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
  height: 350px;
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

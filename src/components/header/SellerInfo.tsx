import React from 'react';
import styled from 'styled-components';
import Typography from '../common/Typography';
import palette from '../../lib/styles/palette';
import { FlowerGrid } from '../flowerImg/FlowerGrid';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import FacebookIcon from '@material-ui/icons/Facebook';

const SellerInfo = () => {
  return (
    <Box>
      <div>
        <Typography type="H3" color={palette.color4} fontWeight="bold">
          엘리제플라워
        </Typography>
        <Typography type="H7" color={palette.color4} fontWeight="light">
          <p>Elysee flower boutique in korea since 2011</p>
          <p>플로리스트 : 유진 . 유주희</p>
          <p>주소 : 청담동 19-36 ,1층</p>
          <p>
            <PhoneIphoneIcon fontSize="large" /> 02-545-5501
          </p>
          <p>
            <a href="https://www.instagram.com/elyseeflower_official/?hl=ko">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="">
              <FacebookIcon fontSize="large" />
            </a>
          </p>
        </Typography>
      </div>
      <div>
        <FlowerGrid />
      </div>
    </Box>
  );
};

export default SellerInfo;

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & > div {
    margin: 5px;
  }

  & > :first-child {
    flex: 4;
  }

  & > :last-child {
    flex: 6;
  }
`;

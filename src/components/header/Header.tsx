import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import Typography from '../common/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = ({title = 'Flamingo'}) => {

  const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  background-color : #FFA7B3;
`;
  const HeaderFont = styled.div`
    border: 1px solid red;
    display: absolute;
    text-align: center;
  `;

  return (
    <HeaderBox>
        <HeaderFont>
        <Typography type="H4" color={palette.color2} fontWeight="bold">
          {title}
        </Typography>
        </HeaderFont>
        <AccountCircleIcon />
    </HeaderBox>
  )
};

export default Header;

import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import Typography from '../common/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../../index.css';
const Header = ({title = 'Flamingo'}) => {

  const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  background-color : #E596A1;
`;
  const HeaderFont = styled.div`
    display: absolute;
    font-family: Lobster;
    margin-left: 24px;
  `;

  const fontIconLocation = styled.button`
    font-size: 3rem;
    border: 1px solid red;
  `;
  const IconButton = styled.div`
    border: 1px solid gray;
    width: 20px;
    height: 20px;
    top: 20px;
  `;
  return (
    <HeaderBox>
        <HeaderFont>
          <Typography type="H3" color="white" fontWeight="light">
            {title}
          </Typography>
        </HeaderFont>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
        
    </HeaderBox>
  )
};

export default Header;

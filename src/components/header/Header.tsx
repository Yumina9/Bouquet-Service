import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import Typography from '../common/Typography';

const Header = () => {

  const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
  border: 1px solid;
  background-color: gray;
`

  return (
    <HeaderBox>
      <Typography type="H3" color={palette.color5} fontWeight="bold">
          Flamingo
        </Typography>
    </HeaderBox>
  )
};

export default Header;

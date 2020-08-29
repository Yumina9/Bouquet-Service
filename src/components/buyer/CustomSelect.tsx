import React from 'react';
import Button from '../common/Button';
import Typography from '../common/Typography';
import palette from '../lib/styles/palette';
import styled from 'styled-components';
import GoogleApiMap from './GoogleApiMap';
import { Link } from 'react-router-dom';

import SellerCard from './SellerCard';

const CustomSelect = () => {
  const CustomSelect = {
    width: '100%',
    paddign: ' 0 10px',
    height: '500px',
  };
  return (
    <div style={CustomSelect}>
      <div style={{ float: 'left', width: '50%', textAlign: 'center' }}>
        <Typography type="H5" color={palette.color2} fontWeight="bold">
          직접 꽃다발은 선택하시겠습니까?
        </Typography>
        <div
          style={{
            margin: '0 auto',
            display: 'block',
            width: '100%',
          }}
        >
          {/* <Button color={palette.color4} bgColor={palette.color3}>
            직접 선택하기
          </Button> */}
          {/* Todo 버튼 중앙정렬이 되지 않아 임의로 변경 */}
          <Link to="/">
            <button
              style={{
                padding: '5px',
                borderRadius: '5px',
                backgroundColor: '#FFA7B3',
                border: 'none',
                marginTop: '40px',
              }}
            >
              직접 선택하기
            </button>
          </Link>
        </div>
        <div
          style={{
            marginTop: '40px',
          }}
        >
          <SellerCard />
          <SellerCard />
          <SellerCard />
          <SellerCard />
        </div>
      </div>

      <GoogleApiMap />
    </div>
  );
};

export default CustomSelect;

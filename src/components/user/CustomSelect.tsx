import React from 'react';
import Typography from '../common/Typography';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

import SellerCard from './SellerCard';

const CustomSelect = () => {
  const CustomSelect = {
    height: '500px',
  };
  return (
    <div style={CustomSelect}>
      <div style={{ textAlign: 'center' }}>
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
    </div>
  );
};

export default CustomSelect;

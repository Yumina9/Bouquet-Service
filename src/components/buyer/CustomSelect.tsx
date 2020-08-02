import React from 'react';
import Button from '../common/Button';
import Typography from '../common/Typography';
import palette from '../lib/styles/palette';
import styled from 'styled-components';
import { CustomSelectForm } from './CustomSelectForm';
import NaverMapAPI from './NaverMapAPI';

const CustomSelect = () => {
  const CustomSelect = styled.div`
    margin: 0 10px;
    height: 500px;
  `;

  return (
    <div>
      <CustomSelect>
        <CustomSelectForm>
          <div>
            <Typography type="H5" color={palette.color2} fontWeight="bold">
              직접 꽃다발은 선택하시겠습니까?
            </Typography>
          </div>
          <div>
            <Button color={palette.color4} bgColor={palette.color3}>
              직접 선택하기
            </Button>{' '}
          </div>
        </CustomSelectForm>
        <CustomSelectForm>
          <NaverMapAPI />
        </CustomSelectForm>
      </CustomSelect>
    </div>
  );
};

export default CustomSelect;

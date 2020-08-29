import React from 'react';
import styled from 'styled-components';
import Typography from '../../components/common/Typography';
import palette from '../../components/lib/styles/palette';

const ListAdd = () => {
  return (
    <>
      <div>
        <Typography type="H3" color={palette.color4} fontWeight="bold">
          추가하기
        </Typography>
      </div>
      <div>
        <Typography type="H5" color={palette.color4} fontWeight="middle">
          추가하려는 것
        </Typography>
      </div>
    </>
  );
};

export default ListAdd;

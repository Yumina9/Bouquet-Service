import React from 'react';
import styled from 'styled-components';

export const FlowerCard = () => {
  return (
    <CardBox>
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/om-public-static/media/images/products/2018/01/06_00_thumnail_180111_w_PwlSNwq.jpg"
        width="100%"
      />
    </CardBox>
  );
};

const CardBox = styled.div`
  margin: 7px;
`;

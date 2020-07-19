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
  /* width: 100%; */
  /* width: 33.33.%;
  height: 100%;
  margin: 10px; */
  /* max-width: 150px;
  max-height: 150px; */
`;

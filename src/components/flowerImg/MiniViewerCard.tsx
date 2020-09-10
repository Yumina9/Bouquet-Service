import React from 'react';
import styled from 'styled-components';

export const MiniViewerCard = () => {
  return (
    <CardBox>
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/om-public-static/media/images/products/2018/01/06_00_thumnail_180111_w_PwlSNwq.jpg"
        width="110px"
      />
    </CardBox>
  );
};

const CardBox = styled.div`
  width: 100%;
  margin: 5px;
`;

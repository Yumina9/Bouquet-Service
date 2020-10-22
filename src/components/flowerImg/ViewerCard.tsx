import React from 'react';
import styled from 'styled-components';

export const ViewerCard = () => {
  return (
    <>
      <Card>
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/om-public-static/media/images/products/2018/01/06_00_thumnail_180111_w_PwlSNwq.jpg"
          width="340px"
          alt=""
        />
      </Card>
    </>
  );
};

const Card = styled.span`
  width: 100%;
  margin: 7px;
`;

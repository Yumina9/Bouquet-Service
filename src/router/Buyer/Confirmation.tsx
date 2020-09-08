import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MiniHeader } from '../../components/header/MiniHeader';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import Button from '../../components/common/Button';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BouquetType } from '../../components/flowerImg/Bouquet';

const Confirmation: React.FC<BouquetType> = () => {
  const { id } = useParams();
  const [info, setInfo] = useState<BouquetType>();
  useEffect(() => {
    axios.get(`/bouquets/${id}`).then(({ data }) => setInfo(data));
  }, []);
  console.log(info);
  return (
    <div>
      <MiniHeader />
      <Body>
        <Typography type="H3" color={palette.color1} fontWeight="bold">
          주문 확인
        </Typography>
        <br />
        <Order>
          <Typography type="H5" color={palette.color4} fontWeight="bold">
            꽃 종류
          </Typography>
          <p />
          <Typography type="H7" color={palette.black} fontWeight="light">
            {`${info?.flower_color} ${info?.flower_name}`}
          </Typography>
          <p />
          <Typography type="H5" color={palette.color4} fontWeight="bold">
            꽃 수량
          </Typography>
          <p />
          <Typography type="H7" color={palette.black} fontWeight="light">
            {`${info?.flower_count}송이`}
          </Typography>
          <p />
          <Typography type="H5" color={palette.color4} fontWeight="bold">
            꽃다발 종류
          </Typography>
          <p />
          <Typography type="H7" color={palette.black} fontWeight="light">
            {`${info?.name}`}
          </Typography>
          <p />
          <Typography type="H5" color={palette.color4} fontWeight="bold">
            리본, 포장지 색상
          </Typography>
          <p />
          <Typography type="H7" color={palette.black} fontWeight="light">
            리본 : {`${info?.ribbon_color}`} | 포장지 :
            {`${info?.wrappingpaper_color}`}
          </Typography>
        </Order>
        <Link
          to={`/bouquet/${id}`}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <Button color={palette.black} bgColor={palette.color3}>
            뒤로가기
          </Button>
        </Link>
        <Button color={palette.black} bgColor={palette.color3}>
          주문완료
        </Button>
      </Body>
    </div>
  );
};

export default Confirmation;

const Body = styled.div`
  display: flex-reverse;
  text-align: center;
  justify-content: center;
  margin: 20px;
  Button {
    padding: 14px 50px;
    font-size: 1.5rem;
    color: inherit;
    outline: none;
    margin: 5px;
    float: left;
  }
`;

const Order = styled.div`
  display: flex-reverse;
  text-align: center;
`;

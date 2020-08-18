import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import palette from '../lib/styles/palette';
import Button from '../common/Button';
import axios from 'axios';
import { BouquetType } from '../flowerImg/FlowerList';

const MakingBouquetStepper = ({}) => {
  const { id } = useParams();
  const [bouquet, setBouquet] = useState<BouquetType>();
  useEffect(() => {
    axios.get(`/bouquets/${id}`).then(({ data }) => setBouquet(data));
  }, []);
  console.log(bouquet);

  return (
    <>
      <div>
        <p>꽃다발을 선택하셧습니다.</p>
        <img src={`${bouquet?.img}`} />
      </div>
      <div>
        <p>꽃 선택</p>
        <p>꽃을 선택하세요</p>
      </div>
      <div>
        <p>꽃 수량 입력</p>
        <input type="text" />
      </div>
      <div>
        <p>포장지 색상, 리본 색상 선택</p>
        <p>포장지 색상과 리본 색상을 선택하세요</p>
      </div>
      <Link to="" style={{ color: 'inherit', textDecoration: 'none' }}>
        <Button color={palette.white} bgColor={palette.color3}>
          뒤로가기
        </Button>
      </Link>
      <Link
        to={`/confirmation/${id}`}
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        <Button color={palette.white} bgColor={palette.color3}>
          주문하기
        </Button>
      </Link>
    </>
  );
};

export default MakingBouquetStepper;

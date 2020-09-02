import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import palette from '../lib/styles/palette';
import Button from '../common/Button';
import { BouquetType } from '../flowerImg/FlowerList';
import Axios from 'axios';
import Typography from '../common/Typography';

export default function MakingFlowerStepper() {
  const { id } = useParams();
  const [flowers, setFlowers] = useState<BouquetType[]>([]);
  useEffect(() => {
    Axios.get('/flowers/').then(({ data }) => setFlowers(data));
  }, []);
  return (
    <>
      <span>
        <img src={`${flowers?.img}`} style={{ width: '400px' }} />
        <Typography type="H5" color={palette.color4} fontWeight="middle">
          {`${flowers?.name}`}
        </Typography>
      </span>
      <div>
        <p>꽃을 선택하셧습니다.</p>
      </div>
      <div>
        <p>꽃다발 선택</p>
        <p>꽃다발을 선택하세요</p>
      </div>
      <div>
        <p>꽃 수량 입력</p>
        <input type="text" />
      </div>
      <div>
        <p>포장지 색상, 리본 색상 선택</p>
        <p>포장지 색상과 리본 색상을 선택하세요</p>
      </div>
    </>
  );
}

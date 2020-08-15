import React from 'react';
import { Link, useParams } from 'react-router-dom';
import palette from '../lib/styles/palette';
import Button from '../common/Button';

export default function MakingBouquetStepper({}) {
  return (
    <>
      <div>
        <p>꽃다발을 선택하셧습니다.</p>
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
      <Link to="">
        <Button color={palette.white} bgColor={palette.color3}>
          뒤로가기
        </Button>
      </Link>
      <Link to="">
        <Button color={palette.white} bgColor={palette.color3}>
          주문하기
        </Button>
      </Link>
    </>
  );
}

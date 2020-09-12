import React from 'react';
import styled from 'styled-components';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import MiniHeader from '../../components/header/MiniHeader';
import { Block } from '../../lib/styles/styled';

const InputMenus = [
  {
    title: '꽃다발 이름',
    type: 'text',
  },
  {
    title: '꽃다발 상세 설명',
    type: 'textarea',
  },
  {
    title: '꽃다발 사진 첨부',
    type: 'file',
  },
  {
    title: '꽃 이름',
    type: 'text',
  },
  {
    title: '꽃 색상',
    type: 'text',
  },
  {
    title: '꽃 개수',
    type: 'text',
  },
  {
    title: '포장지 색상',
    type: 'text',
  },
  {
    title: '리본 색상',
    type: 'text',
  },
];

const BouquetAdd = () => {
  var count = InputMenus.length;
  console.log(count);
  const Menus = InputMenus.map(
    ({ title, type }: { title: string; type: string }) => (
      <tr>
        <td>
          <Typography type="H6" color={palette.color4} fontWeight="middle">
            {title}
          </Typography>
        </td>
        <td>
          <input type={type} />
        </td>
      </tr>
    )
  );

  return (
    <>
      <MiniHeader />
      <Block>
        <div>
          <Typography type="H3" color={palette.color4} fontWeight="bold">
            꽃다발 추가하기
          </Typography>
        </div>
        <div>
          <tbody>{Menus}</tbody>
        </div>
      </Block>
    </>
  );
};

export default BouquetAdd;

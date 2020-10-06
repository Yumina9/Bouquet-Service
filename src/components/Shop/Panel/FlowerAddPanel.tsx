import React from 'react';
import styled from 'styled-components';
import Typography from '../../common/Typography';
import palette from '../../../lib/styles/palette';
import MiniHeader from '../../header/MiniHeader';
import { Block } from '../../../lib/styles/styled';

const InputMenus = [
  {
    title: '꽃 이름',
    type: 'text',
  },
  {
    title: '꽃말',
    type: 'textarea',
  },
  {
    title: '꽃 피는 달',
    type: 'text',
  },
  {
    title: '꽃 색상',
    type: 'text',
  },
  {
    title: '꽃 사진 첨부',
    type: 'file',
  },
];

export const FlowerAddPanel = () => {
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
    ),
  );

  return (
    <>
      <Block>
        <div>
          <Typography type="H3" color={palette.color4} fontWeight="bold">
            꽃 추가하기
          </Typography>
        </div>
        <div>
          <tbody>{Menus}</tbody>
        </div>
      </Block>
    </>
  );
};

import React from 'react';
import styled from 'styled-components';
import Typography from '../../common/Typography';
import palette from '../../../lib/styles/palette';
import { PanelBlock } from '../../../lib/styles/styled';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '../../common/Button';
import { FlowerDropdown } from '../../Dropdown/FlowerDropdown';
import { FlowerType } from '../../flowerImg/Flower';
import useMakingBouquetStepper from '../../Making/hooks/useMakingBouquetStepper';
import { WrappingPaperDropdown } from '../../Dropdown/WrappingPaperDropdown';
import { RibbonDropdown } from '../../Dropdown/RibbonDropdown';
import { WrappingPaperType } from '../../flowerImg/WrappingPaper';
import { RibbonType } from '../../flowerImg/Ribbon';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import { useBorderedInputBaseStyles } from '@mui-treasury/styles/inputBase/bordered';
import { PanelForm } from '../PanelForm';
import useMakingFlowerStepper from '../../Making/hooks/useMakingFlowerStepper';
import { BouquetType } from '../../flowerImg/Bouquet';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

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
  const {
    flower_count,
    setFlowerCount,
    setReserve,
    resultPrice,
    reserve,
  } = useMakingFlowerStepper();
  const styles = useBorderedInputBaseStyles();

  console.log(count);

  return (
    <>
      <PanelBlock>
        {/* <Box width={'80%'} borderRadius={24} height={160} classes={styles} > */}
        <PanelForm title="꽃 추가하기">
          <>
            <p />
            <Typography type="H5" color={palette.color4} fontWeight="bold">
              꽃 이름
            </Typography>
            <Typography type="H6" color={palette.black} fontWeight="light">
              <InputBase
                classes={styles}
                placeholder={'꽃 이름을 입력하세요'}
              />
              {/* <Input
          placeholder="꽃 이름을 입력하세요"
          inputProps={{ 'aria-label': 'description' }}
        /> */}
            </Typography>
            <p />
            <Typography type="H5" color={palette.color4} fontWeight="bold">
              꽃말
            </Typography>
            <p />
            <Typography type="H6" color={palette.black} fontWeight="light">
              <Input
                placeholder="꽃다발에 대한 설명을 입력하세요"
                inputProps={{ 'aria-label': 'description' }}
              />
            </Typography>
            <p />
            <Typography type="H5" color={palette.color4} fontWeight="bold">
              꽃 피는 달
            </Typography>
            <p />
            <Typography type="H6" color={palette.black} fontWeight="light">
              <Input
                placeholder="꽃의 개수를 입력하세요"
                inputProps={{ 'aria-label': 'description' }}
              />
            </Typography>
            <Typography type="H5" color={palette.color4} fontWeight="bold">
              꽃 색상
            </Typography>
            <p />
            <Typography type="H6" color={palette.black} fontWeight="light">
              <Input
                placeholder="꽃의 개수를 입력하세요"
                inputProps={{ 'aria-label': 'description' }}
              />
            </Typography>
            <p />
            <Typography type="H5" color={palette.color4} fontWeight="bold">
              꽃 사진 첨부
            </Typography>
            <Typography type="H5" color={palette.color4} fontWeight="bold">
              금액
            </Typography>
            <p />
            <Typography type="H6" color={palette.black} fontWeight="light">
              <Input
                placeholder="꽃 한송이의 금액을 입력하세요"
                inputProps={{ 'aria-label': 'description' }}
              />
            </Typography>
            <Button color={palette.black} bgColor={palette.color3}>
              추가하기
            </Button>
          </>
          {/* </Box> */}
        </PanelForm>
      </PanelBlock>
    </>
  );
};

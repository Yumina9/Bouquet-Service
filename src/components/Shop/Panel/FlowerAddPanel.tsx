import React, { useState } from 'react';
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
import Axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export const FlowerAddPanel = () => {
  const {
    flower_count,
    setFlowerCount,
    setReserve,
    resultPrice,
    reserve,
  } = useMakingFlowerStepper();
  const styles = useBorderedInputBaseStyles();

  const [flower, setFlower] = useState<{
    name?: string;
    description: string;
    color: string;
    img: string;
    price: 0;
  } | null>(null);

  const onFlowerChange = (e: FlowerType) => {
    // setFlower({ ...flower, [e.target.name] : e.target.value});
    console.log('e', e);
  };

  const onDataSave = () => {
    Axios.post(`/flowers/flower`, flower)
      .then((response) => {
        console.log('등록완료데이터 : ', response.data);
        alert('등록완료');
      })
      .catch((response) => {
        console.error(response);
      });
  };

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
                name="name"
                value={flower?.name}
                // onChange={(e) => onFlowerChange(e)}
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
            <Button
              color={palette.black}
              bgColor={palette.color3}
              onClick={() => onDataSave()}
            >
              추가하기
            </Button>
          </>
          {/* </Box> */}
        </PanelForm>
      </PanelBlock>
    </>
  );
};

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      display: 'flex-reverse',
      width: 300,
      textAlign: 'center',
      backgroundColor: '#ecf0f1',
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);
export const BouquetAddPanel = () => {
  // const styles = useFadedShadowStyles();
  const classes = useStyles();
  const styles = useBorderedInputBaseStyles();
  const {
    flower_count,
    setFlowerCount,
    setReserve,
    resultPrice,
    reserve,
  } = useMakingBouquetStepper();

  const onFlowerDropdownChange = (flower: FlowerType) => {
    setReserve({ ...reserve, flower });
  };

  const onWrappingPaperDropdownChange = (wrappingPaper: WrappingPaperType) => {
    setReserve({ ...reserve, wrappingPaper });
  };

  const onRibbonDropdownChange = (ribbon: RibbonType) => {
    setReserve({ ...reserve, ribbon });
  };

  return (
    <>
      <PanelBlock>
        {/* <Box width={'80%'} borderRadius={24} height={160} classes={styles} > */}
        <PanelForm title="꽃다발 추가하기">
          <>
            <Typography type="H6" color={palette.color4} fontWeight="bold">
              꽃다발 이름
            </Typography>
            <p />
            <Typography type="H7" color={palette.black} fontWeight="light">
              <InputBase
                classes={styles}
                placeholder={'꽃다발 이름을 입력하세요'}
              />
              {/* <Input
            placeholder="꽃다발 이름을 입력하세요"
            inputProps={{ 'aria-label': 'description' }}
          /> */}
            </Typography>
            <p />
            <Typography type="H6" color={palette.color4} fontWeight="bold">
              꽃다발 상세 설명
            </Typography>
            <p />
            <Input
              placeholder="꽃다발에 대한 설명을 입력하세요"
              inputProps={{ 'aria-label': 'description' }}
            />
            <p />
            <Typography type="H6" color={palette.color4} fontWeight="bold">
              꽃 선택
            </Typography>
            <p />
            <FlowerDropdown onFlowerDropdownChange={onFlowerDropdownChange} />
            <p />
            <Typography type="H6" color={palette.color4} fontWeight="bold">
              꽃 개수
            </Typography>
            <p />
            <Typography type="H7" color={palette.black} fontWeight="light">
              <Input
                placeholder="꽃의 개수를 입력하세요"
                inputProps={{ 'aria-label': 'description' }}
              />
            </Typography>
            <p />
            <Typography type="H6" color={palette.color4} fontWeight="bold">
              포장지 선택
            </Typography>
            <p />
            <WrappingPaperDropdown
              onWrappingPaperDropdownChange={onWrappingPaperDropdownChange}
            />
            <p />
            <Typography type="H6" color={palette.color4} fontWeight="bold">
              리본 선택
            </Typography>
            <p />
            <RibbonDropdown onRibbonDropdownChange={onRibbonDropdownChange} />
            <p />
            <Typography type="H6" color={palette.color4} fontWeight="bold">
              금액
            </Typography>
            <p />
            <Typography type="H7" color={palette.black} fontWeight="light">
              <Input
                placeholder="금액을 입력하세요"
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

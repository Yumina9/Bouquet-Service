import React, { useState } from 'react';
import Typography from '../../common/Typography';
import palette from '../../../lib/styles/palette';
import { PanelBlock } from '../../../lib/styles/styled';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../../common/Button';
// import { useBorderedInputBaseStyles } from '@mui-treasury/styles/inputBase/bordered';
import { PanelForm } from '../PanelForm';
// import useMakingFlowerStepper from '../../Making/hooks/useMakingFlowerStepper';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
export const FlowerAddPanel = () => {
  const classes = useStyles();
  let history = useHistory();
  // const {} = useMakingFlowerStepper();
  // const styles = useBorderedInputBaseStyles();

  const [reserve, setReserve] = useState({
    name: '',
    description: '',
    season: '',
    color: '',
    price: '',
    shops_id: '',
  });

  const onReserveChange = (e) => {
    setReserve({ ...reserve, [e.target.name]: e.target.value });
  };

  const onDataSave = () => {
    if (reserve.name === '') {
      alert('꽃이름을 입력하세요');
    }
    if (reserve.season === '') {
      alert('계절을 입력하세요.');
    }
    if (reserve.color === '') {
      alert('색상을 입력하세요.');
    }
    if (reserve.price === '') {
      alert('가격을 입력하세요.');
    }

    const apiUrl = `http://localhost:8000/flowers/flower/`;

    axios
      .post(apiUrl, reserve)
      .then((response) => {
        console.log('등록완료데이터: ', response.data);
        alert('등록완료');
        history.push('mypage');
      })
      .catch((response) => {
        console.error(response);
      });
  };
  return (
    <>
      <PanelBlock>
        <PanelForm title="꽃 추가하기">
          <>
            <form className={classes.root} noValidate autoComplete="off">
              <Typography type="H5" color={palette.color4} fontWeight="bold">
                꽃 이름
              </Typography>
              <TextField
                id="outlined-basic"
                label="꽃 이름 입력"
                variant="outlined"
                name="name"
                value={reserve.name}
                onChange={(e) => onReserveChange(e)}
              />

              <Typography type="H5" color={palette.color4} fontWeight="bold">
                꽃말
              </Typography>
              <TextField
                id="outlined-basic"
                label="꽃말"
                variant="outlined"
                name="description"
                value={reserve.description}
                onChange={(e) => onReserveChange(e)}
              />
              <Typography type="H5" color={palette.color4} fontWeight="bold">
                꽃 피는 시기
              </Typography>
              <TextField
                id="outlined-basic"
                label="꽃 피는시기 입력"
                variant="outlined"
                name="season"
                value={reserve.season}
                onChange={(e) => onReserveChange(e)}
              />

              <Typography type="H5" color={palette.color4} fontWeight="bold">
                꽃 색상
              </Typography>
              <TextField
                id="outlined-basic"
                label="꽃말"
                variant="outlined"
                name="color"
                value={reserve.color}
                onChange={(e) => onReserveChange(e)}
              />
              <Typography type="H5" color={palette.color4} fontWeight="bold">
                금액
              </Typography>
              <TextField
                id="outlined-basic"
                label="금액"
                variant="outlined"
                name="price"
                value={reserve.price}
                onChange={(e) => onReserveChange(e)}
              />

              <Typography type="H5" color={palette.color4} fontWeight="bold">
                매장선택
              </Typography>
              <TextField
                id="outlined-basic"
                label="매장선택"
                variant="outlined"
                name="shops_id"
                value={reserve.shops_id}
                onChange={(e) => onReserveChange(e)}
              />
            </form>
            <Button
              color={palette.black}
              bgColor={palette.color3}
              onClick={() => onDataSave()}
            >
              추가하기
            </Button>
          </>
        </PanelForm>
      </PanelBlock>
    </>
  );
};

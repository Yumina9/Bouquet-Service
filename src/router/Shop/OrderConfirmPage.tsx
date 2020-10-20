import React from 'react';
import styled from 'styled-components';
import Typography from '../../components/common/Typography';
import palette from '../../lib/styles/palette';
import Button from '../../components/common/Button';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import { Block } from '../../lib/styles/styled';
import { OrderConfirmForm } from '../../components/OrderConfirm/OrderConfirmForm';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStylesO = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      
    },
    paper: {
      display: 'flex',
      width: 300,
      textAlign: 'center',
      backgroundColor: '#bdc3c7',
      
      
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);
const useStylesT = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      display: 'flex-reverse',
      justifyContent: 'center',
      width: 400,
      backgroundColor: '#ecf0f1',
      border: '1px solid pink',
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

const OrderConfirmPage = () => {
  let history = useHistory();
  const classesOrder = useStylesO();
  const classesTool = useStylesT();

  // id, type
  // STEP 1. useOrder에서 axios로 bouquet 정보 패치하기
  // 여기 id가 부켓아이디인데 왜 이걸루 데이터 패치안해오귱
  const { id } = useParams<{
    id: string;
  }>();

  return (
    <div>
      <Header />
      <Block>
        <Body>
          <Paper className={classesTool.paper} style={{border: '1px solid blue', height: 'inherit'}}>
            <Typography type="H3" color={palette.color1} fontWeight="bold">
              주문 확인
            </Typography>
            <Paper className={classesOrder.paper} >
              <OrderConfirmForm />
            </Paper>
            <br />
            <Button
              color={palette.black}
              bgColor={palette.color3}
              onClick={() => history.goBack()}
            >
              뒤로가기
            </Button>
            <div>
              <Button color={palette.black} bgColor={palette.color3}>
                주문완료
              </Button>
            </div>
          </Paper>
        </Body>
      </Block>
    </div>
  );
};

export default OrderConfirmPage;

const Body = styled.span`
  display: flex-reverse;
  text-align: center;
  justify-content: center;
  margin: 20px;
  Button {
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 14px 50px;
    margin: 20px;
    font-size: 1.5rem;
    color: inherit;
    outline: none;
    margin: 5px;
    float: left;
  }
  div {
    
  }
`;

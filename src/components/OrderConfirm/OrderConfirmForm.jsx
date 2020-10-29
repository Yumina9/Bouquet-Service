import React from 'react';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';
// import palette from '../../lib/styles/palette';
// import useMakingBouquetStepper from '../Making/hooks/useMakingFlowerStepper';
// import useOrderConfirmForm from './hooks/useOrderConfirmForm';
// import { OrderAction } from '../../modules/order';
// import { RootState } from '../../modules';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import { Divider, makeStyles } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import { OrderConfirmData } from './OrderConfirmData';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    spacing: 10,
  },
  list: {
    display: 'flex-reverse',
    padding: '10px',
    width: '100%',
  },
  button: {
    margin: theme.spacing(1),
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

export const OrderConfirmForm = () => {
  const classes = useStyles();

  return (
    <>
      <Body>
        <Card className={classes.root}>
          <CardHeader title="주문 목록" className={classes.header} />
          <Divider variant="middle" />
          <Divider variant="middle" />

          <CardContent>
            <div className={classes.list}>
              <OrderConfirmData />
            </div>
          </CardContent>
          <Divider variant="middle" />
        </Card>
      </Body>
    </>
  );
};

const Body = styled.div`
  display: flex-reverse;
  text-align: center;
  justify-content: center;
  margin: 20px;
  Button {
    padding: 14px 50px;
    font-size: 1.5rem;
    color: inherit;
    outline: none;
    margin: 5px;
    float: left;
  }
`;

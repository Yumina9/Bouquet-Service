import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/header/Header';
import './buyerCss.css';
import axiosInstance from '../../components/login/axios';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Footer from '../Footer';
import { BouquetOrderType } from '../../components/Shop/Panel/CurrentOrderPanel';
import Divider from '@material-ui/core/Divider';

type userInfoType = {
  id: number;
  username: string;
  firstname: string;
  email: string;
  user_phone: string;
  user_address: string;
  bouquet_order: BouquetOrderType[];
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: '1200px',
      margin: '0 auto',
      marginTop: '100px',
      textAlign: 'center',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      fontSize: '20px',
      justifyContent: 'center',
      boxShadow: 'none',
    },
    userImg: {
      margin: '0 auto',
    },
  }),
);

const UserMyPage = () => {
  const [userInfo, setUserInfo] = useState<userInfoType>();
  const [order] = useState<BouquetOrderType | undefined>();
  const [userOrder] = useState<BouquetOrderType | undefined>();

  useEffect(() => {
    axiosInstance.get(`/user/me`).then(({ data }) => {
      setUserInfo(data);
    });
  }, []);
  console.log(userInfo);
  // useEffect(() => {
  //   axiosInstance.get(`/bouquet_order`).then(({ data }) => {
  //     setOrder(
  //       order?.users === userInfo?.id
  //         ? setUserOrder(data)
  //         : console.log('null'),
  //     );
  //   });
  // }, []);

  console.log(order);
  console.log(userOrder);
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* <Paper className={classes.paper} style={{ background: '#f1f2f3' }}> */}
            <UserInfo>
              <p>
                <UserImage src={require('../../image/user.png')} />
              </p>
              <p className={classes.paper}>성명 : {userInfo?.username}</p>
              <p className={classes.paper}>전화 : {userInfo?.user_phone}</p>
              <p className={classes.paper}>이메일 : {userInfo?.email}</p>
            </UserInfo>
            {/* </Paper> */}
          </Grid>
        </Grid>
        <Divider />

        <Typography
          variant="h3"
          gutterBottom
          style={{ marginTop: '50px', marginBottom: '50px' }}
        >
          주문 내역
        </Typography>

        <div style={{ height: 400, width: '100%', marginBottom: '50px' }}>
          {/* <CurrentOrderPanel orders={userInfo}/> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserMyPage;

const UserImage = styled.img`
  width: 4.5rem;
  height: 4.5rem;
`;

const UserInfo = styled.div`
  p {
    float: left;
  }
`;

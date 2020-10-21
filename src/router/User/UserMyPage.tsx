import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from '../../components/header/Header';
import './buyerCss.css';
import axios from '../../components/login/axios';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Footer from '../Footer';
type userInfoType ={
  id : number;
  username: string;
  firstname: string;
  email: string;
  user_phone: string;
  user_address: string;
}

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
    }
  }),
);

const UserMyPage = () => {

  const [userInfo, setUserInfo] = useState<userInfoType>();

  useEffect(()=>{
    console.log(userInfo?.id);
    axios.get(`/user/me`).then(({data})=>{setUserInfo(data);
       console.log("유저초이스 마이페이지", userInfo?.username);
      //  console.log(id);
      });
    
  },[])

  const classes = useStyles();
  

  return (
    <div>
      <Header />
      <div className={classes.root}>
        
        
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <Paper className={classes.paper} style={{background: '#f1f2f3', paddingTop: '50px'}}>
              <p><UserImage src={require('../../image/user.png')} /></p>
              <p className={classes.paper}>성명 : {userInfo?.username}</p>
              <p className={classes.paper}>전화 : {userInfo?.user_phone}</p>
              <p className={classes.paper}>이메일 : {userInfo?.email}</p>
            </Paper>
            
          </Grid>
        </Grid>
        
        <Typography variant="h3" gutterBottom style={{marginTop: '50px'}}>
          주문 내역
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs>
            <Paper className={classes.paper}>Number</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Content</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>Date</Paper>
          </Grid>
        </Grid>
        <hr style={{border: '2px solid #555'}} />
        <Grid container spacing={1}>
          <Grid item xs>
            <Paper className={classes.paper}>1</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>벌룬꽃다발 외</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>2020. 10. 20</Paper>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

const BuyerInfo = styled.div`
  background: #f1f2f3;
  max-width: 1080px;
  display: flex;
  margin: 100px auto;
  padding: 50px;
`;
const UserImage = styled.img`
  width: 200px;
  height: 200px;
  margin: auto 0;
`;
const UserInfomation = styled.div`
  padding: 30px 0;
`;
const DeliveryList = styled.div`
  background-color: #f1f2f3;
  max-width: 1080px;
  display: flex;
  margin: 100px auto;
  padding: 50px;
`;
export default UserMyPage;

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from '../../components/header/Header';
import './buyerCss.css';
import axiosInstance from '../../components/login/axios';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Footer from '../Footer';

import { DataGrid } from '@material-ui/data-grid';

type userInfoType = {
  id: number;
  username: string;
  firstname: string;
  email: string;
  user_phone: string;
  user_address: string;
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

  const columns = [
    { field: 'id', headerName: '숫자', width: 70 },
    { field: 'shopName', headerName: '매장명', width: 130 },
    { field: 'Flowlist', headerName: '플로리스트', width: 130 },
    {
      field: 'price',
      headerName: '주문금액',
      type: 'number',
      width: 130,
    },
    {
      field: 'content',
      headerName: '주문내역',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];




  const [userInfo, setUserInfo] = useState<userInfoType>();

  useEffect(() => {
    axiosInstance.get(`/user/me`).then(({ data }) => {
      setUserInfo(data);
    });
  }, []);

  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              className={classes.paper}
              style={{ background: '#f1f2f3', paddingTop: '50px' }}
            >
              <p>
                <UserImage src={require('../../image/user.png')} />
              </p>
              <p className={classes.paper}>성명 : {userInfo?.username}</p>
              <p className={classes.paper}>전화 : {userInfo?.user_phone}</p>
              <p className={classes.paper}>이메일 : {userInfo?.email}</p>
            </Paper>
          </Grid>
        </Grid>
        <Typography variant="h3" gutterBottom style={{ marginTop: '50px', marginBottom: '50px' }}>
          주문 내역
        </Typography>
        
        <div style={{ height: 400, width: '100%', marginBottom: '50px' }}>

          <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const UserImage = styled.img`
  width: 200px;
  height: 200px;
  margin: auto 0;
`;

export default UserMyPage;

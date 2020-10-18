import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ViewerCard } from '../flowerImg/ViewerCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: '100px',
  },
  mainTitle: {
    textAlign: 'center',
    marginTop: '80px',
    boxShadow: 'none',
    marginBottom: '100px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: '0',
    boxShadow: 'none',

  },
  title: {
    flexGrow: 1,
    fontFamily: "'Lobster'",
  },
  float: {
    float: 'left',
    width: '25%',
  },
  alignCard: {
    padding: theme.spacing(2),
    width: '100%',
    textAlign: 'center',
    boxShadow: 'none',
  }
}));

const BestItemList = () => {
  const classes = useStyles();
  const[bestShopList, setBestShopList] = useState([]);
  useEffect(() => {
    const apiUrl = `http://localhost:8000/shops/`;
    Axios
      .get(apiUrl)
      .then((res) => {
        setBestShopList(res.data);
        console.log("조회목록데이터:", res.data);      
      })
      .catch((res) => {
        console.error(res);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.mainTitle}>
            <Typography className={classes.title} variant="h3">
              Best Item   
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {bestShopList.map((list, i) => {
            console.log(list.img);
            if(list.id < 5){
              return (
                <Link to={`shop/${list.id}/`} className={classes.float}>
                  <Paper className={classes.paper}>
                    <ViewerCard image={list.img} />
                    <div className={classes.alignCard} >가게명 : {list.name}</div>
                    <div className={classes.alignCard} >플로리스트 : {list.florist}</div>
                  </Paper>
                </Link>
              )
            }
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default BestItemList;



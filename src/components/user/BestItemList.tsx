// import React from 'react';
// import { ViewerCard } from '../flowerImg/ViewerCard';
// import Typography from '@material-ui/core/Typography';
// import palette from '../../lib/styles/palette';
// import styled from 'styled-components';
// import Grid from '@material-ui/core/Grid';
// import { createStyles, makeStyles, Theme } from '@material-ui/core';

// const useBestStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       height: 140,
//       width: 100,
//     },
//     control: {
//       padding: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//       fontFamily: "'Lobster'",
//       margin: '70px 0 30px 50px',
//     },
//   }),
// );

// const BestItemList = () => {
//   const classes = useBestStyles();
//   return (
//     <>
//     <div style={{ margin: '30px 0 0 0', width: '100%' }}>
//       <Typography className={classes.title} variant="h3">
//         Best Item   
//       </Typography>
//     </div>
//     <Grid container className={classes.control}>
//       <Grid item xs={3}>
//         <ViewerCard />
//       </Grid>
//       <Grid item xs={3}>
//         <ViewerCard />
//       </Grid>
//       <Grid item xs={3}>
//         <ViewerCard />
//       </Grid>
//       <Grid item xs={3}>
//         <ViewerCard />
//       </Grid>
//     </Grid>
//     </>
//   );
// };

// export default BestItemList;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ViewerCard } from '../flowerImg/ViewerCard';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '80px',
    boxShadow: 'none',
  },
  title: {
          flexGrow: 1,
          fontFamily: "'Lobster'",
  },
  alignCard: {
    padding: theme.spacing(2),
    textAlign: 'center',
    boxShadow: 'none',
    marginBottom: '100px',
  }
}));
const BestItemList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h3">
              Best Item   
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.alignCard}>
            <ViewerCard />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.alignCard}>
            <ViewerCard />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.alignCard}>
            <ViewerCard />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.alignCard}>
            <ViewerCard />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default BestItemList;

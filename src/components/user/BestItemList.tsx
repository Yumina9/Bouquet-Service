import React from 'react';
import { MiniViewerCard } from '../flowerImg/MiniViewerCard';
import Typography from '../common/Typography';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const BestItemList = () => {
  return (
    <div style={{ margin: '30px 0 0 0', width: '100%' }}>
      <Typography type="H4" color={palette.color2} fontWeight="bold">
        Best Item
      </Typography>
      <Grid container style={{ padding: '10px', width: '100%' }}>
        <Grid item xs={3}>
          <MiniViewerCard />
        </Grid>
        <Grid item xs={3}>
          <MiniViewerCard />
        </Grid>
        <Grid item xs={3}>
          <MiniViewerCard />
        </Grid>
        <Grid item xs={3}>
          <MiniViewerCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default BestItemList;

import React from 'react';
import Grid from '@material-ui/core/Grid';
import CustomSelect from './CustomSelect';
import GoogleApiMap from './GoogleApiMap';

const Container = () => {
  return (
    <div style={{ width: '100%', display: 'fixed' }}>
      <Grid container style={{ padding: '10px' }}>
        <Grid item xs={12} sm={6}>
          <CustomSelect />
        </Grid>
        <Grid item xs={12} sm={6}>
          <GoogleApiMap />
        </Grid>
      </Grid>
    </div>
  );
};

export default Container;

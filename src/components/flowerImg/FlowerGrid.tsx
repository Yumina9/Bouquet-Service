import {
  createStyles,
  GridList,
  GridListTile,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';
import { FlowerType } from './Flower';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 160,
      overflow: 'hidden',
    },
  }),
);

export const FlowerGrid = ({ flowers }: { flowers: FlowerType[] }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={2}>
        {flowers.map((f: any) => (
          <GridListTile key={f.img} cols={f.cols || 1}>
            <img src={f.img} alt={f.name} />
          </GridListTile>
        ))}
      </GridList>
      <GridList cellHeight={160} className={classes.gridList} cols={2}>
        {flowers.map((f: any) => (
          <GridListTile key={f.img} cols={f.cols || 1}>
            <img src={f.img} alt={f.name} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

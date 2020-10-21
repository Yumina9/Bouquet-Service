import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { FlowerType } from '../flowerImg/Flower';

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
      height: 450,
    },
  }),
);

export default function ShopFlowerImageGrid({
  flowers,
}: {
  flowers: FlowerType[];
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {flowers.map((f: any) => (
          <GridListTile key={f.img} cols={f.cols || 1}>
            <img src={f.img} alt={f.name} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

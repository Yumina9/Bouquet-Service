import React from 'react';
import styled from 'styled-components';
import { FlowerGrid } from '../flowerImg/FlowerGrid';

import ShopInfo from './ShopInfo';
import { ShopType } from '../../router/Shop/ShopMainPage';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

interface ShopInfoListProps {
  shop: ShopType;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
  }),
);

const ShopInfoBanner = ({ shop }: ShopInfoListProps) => {
  const classes = useStyles();
  const flowers = shop.flowers;

  return (
    <div className={classes.root}>
      <ShopInfoPanel>
        <ShopInfo shop={shop} />
        <FlowerGrid flowers={flowers} />
      </ShopInfoPanel>
    </div>
  );
};

export default ShopInfoBanner;

const ShopInfoPanel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }

  width: 100%;
  margin-top: 10px;
  padding: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 6px 4px 13px 5px rgba(148, 148, 148, 1);
  -moz-box-shadow: 6px 4px 13px 5px rgba(148, 148, 148, 1);
  box-shadow: 6px 4px 13px 5px rgba(148, 148, 148, 1);
`;

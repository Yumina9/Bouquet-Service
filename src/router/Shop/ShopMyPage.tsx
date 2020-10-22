import React, { useState } from 'react';
import styled from 'styled-components';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import { Panel, PanelType } from '../../components/Shop/Panel';
import Header from '../../components/header/Header';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      top: 'auto',
    },
    title: {
      flexGrow: 1,
      fontFamily: "'Lobster'",
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export default function ShopMyPage() {
  const classes = useStyles();
  const [type, setType] = useState<PanelType>(PanelType.PROFILE);

  const user = useSelector((state: RootState) => state?.user.user);

  console.log(user);

  return (
    <>
      <Header />
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {/* <Toolbar /> */}
          <div className={classes.drawerContainer}>
            <>
              <Divider />
              <Item>
                <ButtonItem onClick={() => setType(PanelType.PROFILE)}>
                  <Icon src={require('../../image/shop.png')} />
                  Shop 정보
                </ButtonItem>
              </Item>
              <Divider />
              <ButtonItem onClick={() => setType(PanelType.BOUQUET)}>
                <Icon src={require('../../image/flowers.png')} />
                보유 꽃다발
              </ButtonItem>
              <ButtonItem onClick={() => setType(PanelType.FLOWER)}>
                <Icon src={require('../../image/flower.png')} />
                보유 꽃
              </ButtonItem>
              <Divider />
            </>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Panel type={type} />
        </main>
      </div>
    </>
  );
}

const ButtonItem = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  color: black;
  background-color: white;
  padding: 10px;
  border: none;
  outline: none !important;
  /* a :hover {
    background-color: pink;
  } */
`;

const Item = styled.a`
  .hover {
    background-color: pink;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 5px;
`;

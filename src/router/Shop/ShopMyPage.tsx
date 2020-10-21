import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Link, useParams } from 'react-router-dom';
import palette from '../../lib/styles/palette';
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
    // appBar: {
    //   backgroundColor: palette.color5,
    //   zIndex: theme.zIndex.drawer + 1,
    // },
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
                <a>
                  <Icon src={require('../../image/flowers.png')} />
                  보유 꽃다발
                </a>
              </ButtonItem>
              <ButtonItem onClick={() => setType(PanelType.FLOWER)}>
                <a>
                  <Icon src={require('../../image/flower.png')} />
                  보유 꽃
                </a>
              </ButtonItem>
              {/* <Divider />
              <ButtonItem onClick={() => setType(PanelType.ADDBOUQUET)}>
                <a>
                  <Icon src={require('../../image/flowers.png')} />
                  꽃다발 추가
                </a>
              </ButtonItem>
              <ButtonItem onClick={() => setType(PanelType.ADDFLOWER)}>
                <a>
                  <Icon src={require('../../image/flower.png')} />꽃 추가
                </a>
              </ButtonItem>
              <Divider />
              <ButtonItem onClick={() => setType(PanelType.CURRENT_ORDER)}>
                <Icon src={require('../../image/menu.png')} />
                현재 주문 목록
              </ButtonItem>
              <ButtonItem onClick={() => setType(PanelType.FINISHED_ORDER)}>
                <Icon src={require('../../image/menu.png')} />
                주문 완료 목록
              </ButtonItem> */}
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

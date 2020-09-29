import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link, useParams } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../../components/common/Button';
import { Panel, PanelType } from '../../components/Shop/Panel';
import Axios from 'axios';
import { ShopType } from './ShopMainPage';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      backgroundColor: palette.color5,
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
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
  // type Information = { e: string };
  const classes = useStyles();
  const [type, setType] = useState<PanelType>(PanelType.PROFILE);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Flamingo
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <>
            <Divider />
            <ButtonItem onClick={() => setType(PanelType.PROFILE)}>
              내 정보
            </ButtonItem>
            <Divider />
            <ButtonItem onClick={() => setType(PanelType.BOUQUET)}>
              보유 꽃다발
            </ButtonItem>
            <ButtonItem onClick={() => setType(PanelType.FLOWER)}>
              보유 꽃
            </ButtonItem>
            <Divider />
            <ButtonItem onClick={() => setType(PanelType.CURRENT_ORDER)}>
              현재 주문 목록
            </ButtonItem>
            <ButtonItem onClick={() => setType(PanelType.FINISHED_ORDER)}>
              주문 완료 목록
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
`;

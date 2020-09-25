import React from 'react';
import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
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
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../../components/common/Button';

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

export default function ClippedDrawer() {
  const classes = useStyles();

  const Panel = ({ e }: number) => {
    switch (e) {
      case 1:
        return <>내정보</>;
        break;
      case 2:
        break;
      case 3:
        break;
    }
  };

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
            <ButtonItem
              value="1"
              onClick={() => {
                Panel(1);
              }}
            >
              내 정보
            </ButtonItem>
            <Divider />
            <ButtonItem value={2}>보유 꽃다발</ButtonItem>
            <ButtonItem value={3}>보유 꽃</ButtonItem>
            <Divider />
            <ButtonItem value={4}>현재 주문 목록</ButtonItem>
            <ButtonItem value={5}>주문 완료 목록</ButtonItem>
            <Divider />
          </>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
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

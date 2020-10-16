import React, {useState, useEffect} from 'react';

import { Link, useParams } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '../common/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import palette from '../../lib/styles/palette';
import {getUserToken, isUserAuthenticated} from "../login/authUtils";

import axiosInstance from '../login/axios';

// 가져올 데이터 타입 정의
type choiceUserType = {
  id: number;
  user_choice: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    header: {
      backgroundColor: palette.color5,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontFamily: "'Lobster'",
    },
    icon: {
      fontSize: '3rem',
    },
    menu: {
      fontSize: '1.5rem',
    },
  }),
);

const MiniHeader = () => {
  const { id } = useParams();
  const classes = useStyles();
  const auth = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const[userChoice, setUserChoice] = useState<choiceUserType>();
  useEffect(() => {
    axiosInstance.get('/user/users/5/').then(({data}) => setUserChoice(data));
  },[]);
  console.log("유저 초이스", userChoice?.user_choice);
  
  
  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Flamingo
            </Link>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle className={classes.icon} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                {/* <Link
                  to={`/shop/${id}/mypage`}
                  
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <MenuItem className={classes.menu} onClick={handleClose}>
                    MyPage
                  </MenuItem>
                </Link> */}
                {isUserAuthenticated() == false ? (
                  <div>
                    <Link to={"/login"} style={{ color: 'inherit', textDecoration: 'none' }}>
                      <MenuItem className={classes.menu} onClick={handleClose}>로그인</MenuItem>
                    </Link>
                    <Link to={"/signup"} style={{ color: 'inherit', textDecoration: 'none' }}>
                      <MenuItem className={classes.menu} onClick={handleClose}>회원가입</MenuItem>
                    </Link>
                  </div>
                // ) : (
                  //  <div>
                  //     <Link to={"/usermypage"} style={{ color: 'inherit', textDecoration: 'none' }}>
                  //       <MenuItem className={classes.menu} onClick={handleClose}>마이페이지</MenuItem>
                  //     </Link>
                  //     <Link to={"/logout"} style={{ color: 'inherit', textDecoration: 'none' }}>
                  //       <MenuItem className={classes.menu} onClick={handleClose}>로그아웃</MenuItem>
                  //     </Link>
                      
                  //   </div>
                ) : ( userChoice?.user_choice == 'U'
                  ? <div>
                      <Link to={"/usermypage"} style={{ color: 'inherit', textDecoration: 'none' }}>
                        <MenuItem className={classes.menu} onClick={handleClose}>마이페이지</MenuItem>
                      </Link>
                      <Link to={"/logout"} style={{ color: 'inherit', textDecoration: 'none' }}>
                        <MenuItem className={classes.menu} onClick={handleClose}>로그아웃</MenuItem>
                      </Link>
                      
                    </div>
                  : <div>
                      <Link to={`/shop/${id}/mypage`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        <MenuItem className={classes.menu} onClick={handleClose}>마이페이지</MenuItem>
                      </Link>
                      <Link to={"/logout"} style={{ color: 'inherit', textDecoration: 'none' }}>
                        <MenuItem className={classes.menu} onClick={handleClose}>로그아웃</MenuItem>
                      </Link>
                      
                    </div>
                )}
              </Menu>
              
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MiniHeader;

import palette from '../../lib/styles/palette';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { Link } from 'react-router-dom';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#d46676', // palette.color3,
  },
  title: {
    fontFamily: "'Lobster'",
    flexGrow: 1,
  },
  menu: {
    fontSize: '1.5rem',
  },
  icon: {
    fontSize: '3rem',
  },
}));

export default function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const user = useSelector((state: RootState) => state?.user.user);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar className={classes.header} position="relative">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h3"
            color="inherit"
            noWrap
          >
            Flamingo 🌹
          </Typography>

          <Typography variant="h4" color="inherit" noWrap align={'right'}>
            {user ? (
              <>
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
                  <Link
                    to={'/usermypage'}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <MenuItem className={classes.menu} onClick={handleClose}>
                      마이페이지
                    </MenuItem>
                  </Link>
                  <Link
                    to={'/logout'}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <MenuItem className={classes.menu} onClick={handleClose}>
                      로그아웃
                    </MenuItem>
                  </Link>
                </Menu>
              </>
            ) : (
              <>
                <Link
                  to={'/signup'}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <Button color="inherit">
                    <Typography variant="h4" color="inherit">
                      회원가입
                    </Typography>
                  </Button>
                </Link>
                <Link
                  to={'/login'}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <Button color="inherit">
                    <Typography variant="h4" color="inherit">
                      로그인
                    </Typography>
                  </Button>
                </Link>
              </>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

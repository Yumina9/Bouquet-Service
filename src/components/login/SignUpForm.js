import React, { useState } from 'react';
import axiosInstance from './axios';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  inputStyle: {
    width: '40%',
    float: 'rigth',
    display: 'inline-block',
    textAlign: 'center',
    fontSize: '15px',
    boxShadow: 'none',
  },
}));

export default function SignUp() {
  const history = useHistory();
  const initialFormData = Object.freeze({
    email: '',
    username: '',
    password: '',
    user_choice: '',
    user_phone: '',
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post(`user/create/`, {
        email: formData.email,
        username: formData.username,
        password: formData.password,
        user_choice: formData.user_choice,
        user_phone: formData.user_phone,
      })
      .then((_) => {
        history.push('/login');
        alert('회원가입이 완료되었습니다.');
      });
  };

  const classes = useStyles();

  // 체크박스
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const checkChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [event.target.name]: event.target.value.trim(),
    });
  };

  // const [password, setPassword] = useState('');
  const [confirmPassword] = useState('');

  // const hasError = (passwordEntered) =>
  //   passwordEntered.length < 5 ? true : false;

  const hasNotSameError = (passwordEntered) =>
    passwordEntered !== confirmPassword ? true : false;

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const theme = createMuiTheme({
    palette: {
      primary: { main: '#FFA7B3' },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}></Avatar>
          <Typography component="h1" variant="h3">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmitHandler}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <input
                  type="radio"
                  onChange={checkChange}
                  name="user_choice"
                  value="U"
                />
                <Paper className={classes.inputStyle}>고객</Paper>
              </Grid>
              <Grid item xs={6}>
                <input
                  type="radio"
                  onChange={checkChange}
                  name="user_choice"
                  value="S"
                />
                <Paper className={classes.inputStyle}>판매</Paper>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="이메일을 입력하세요."
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="성함"
                  name="username"
                  autoComplete="username"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="user_phone"
                  label="전화번호"
                  name="user_phone"
                  autoComplete="user_phone"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onSubmitHandler={onSubmitHandler}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="비밀번호 확인"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                  // error={hasError('password')}
                  error={hasNotSameError('confirmPassword')}
                  onChange={handleChange}
                  // helperText={
                  //   hasNotSameError('confirmPassword')
                  //     ? '입력한 비밀번호와 일치하지 않습니다.'
                  //     : null
                  // }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
              onSubmit={onSubmitHandler}
              style={{ color: 'white' }}
            >
              회원가입
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  로그인
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
}

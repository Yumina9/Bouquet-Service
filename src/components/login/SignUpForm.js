import React, { useState } from 'react';
import axiosInstance from './axios';
import { useHistory } from 'react-router-dom';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux'
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
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignUp(props) {
	const history = useHistory();
	const initialFormData = Object.freeze({
		email: '',
		username: '',
		password: '',
		user_choice: '',
		user_phone: '',
		// zip_code: '',
		// user_address: '', // 시연을 위해 감춤
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
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
				// zip_code: formData.zip_code,
				// user_address: formData.user_address,
			})
			.then((res) => {
        history.push('/login');
        alert("회원가입이 완료되었습니다.");
			});
      
      
}







  
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
  const { gilad, jason, antoine } = state;
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
}

const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
}

const onNameHandler = (event) => {
  setUserName(event.currentTarget.value)
}

const onconfirmPasswordHandler = (event) => {
    setconfirmPassword(event.currentTarget.value)
}

const hasError = passwordEntered =>
    password.length < 5 ? true : false;

const hasNotSameError = passwordEntered =>
    password != confirmPassword ? true : false;    

const onSubmitHandler = (event) => {
  event.preventDefault(); // 아무 동작 안하고 버튼만 눌러도 리프레쉬 되는 것을 막는다
  // if(user_phone.length != 13) {
  //   alert("번호를 다시 입력해주세요.");
  // }
  if(password !== confirmPassword){
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
  }

    // let body = {
    //     email: email,
    //     password: password,
    //     username: username,
    // }
    // dispatch(registerUser(body))
    //     .then(response =>{
    //         if(response.payload.success){
    //             alert('회원가입이 완료되었습니다!');
    //             props.history.push('/login') // react 에서의 페이지 이동 코드
    //         } else{
    //             alert('Error!!');
    //         }
    //     })
    // // 완료가 잘 되었을 경우 이동
}  




	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate onSubmit={onSubmitHandler}>

					{/* 유저 타입 선택 */}
					
					<input type="radio" onChange={checkChange} name="user_choice" value="U" />고객
					<input type="radio" onChange={checkChange} name="user_choice" value="S" />판매
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="ex) example@example.com"
								name="email"
								autoComplete="email"
								onChange={handleChange}
                // onChange={onEmailHandler}
                
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
								// onChange={onNameHandler}
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
						{/* <Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="zip_code"
								label="우편번호"
								name="zip_code"
								autoComplete="zip_code"
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="user_address"
								label="주소"
								name="user_address"
								autoComplete="user_address"
								onChange={handleChange}
							/>
						</Grid> */}
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="비밀번호(다섯글자이상 필수)"
								type="password"
								id="password"
								autoComplete="current-password"
								error={hasError('password')}
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
								error={hasNotSameError('confirmPassword')}
								onChange={handleChange}
								helperText={
									hasNotSameError('confirmPassword') ? "입력한 비밀번호와 일치하지 않습니다." : null
								}
							/>
						</Grid>
						{/* 이메일 프로모션, 업데이트 정보받는 체크박스
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="primary" />}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						</Grid> */}
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
            onClick={handleSubmit}
            onSubmit={onSubmitHandler}
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
	);
}

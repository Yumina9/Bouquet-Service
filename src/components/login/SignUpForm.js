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
import palette from '../../lib/styles/palette';

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

export default function SignUp() {
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
			.post(`users/create/`, {
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
	const { gilad, jason, antoine } = state;
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate>

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
								label="비밀번호"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={handleChange}
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

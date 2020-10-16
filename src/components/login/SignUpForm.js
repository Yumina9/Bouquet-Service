import React, { useState } from 'react';
import axiosInstance from './axios';
import { useHistory } from 'react-router-dom';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import FormHelperText from '@material-ui/core/FormHelperText';


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
			})
			.then((res) => {
				history.push('/login');
				console.log("로그인", res);
				console.log("로그인 데이터",res.data);
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
						로그인
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

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../modules/member';
import { Link } from 'react-router-dom';
import { Form } from './Form';
import { FormButton } from './FormButton';
import Button from '../common/Button';

const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [userPwd, setuserPwd] = useState('');

  const dispatch = useDispatch();

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };
  const onChangeUserPwd = (e) => {
    setuserPwd(e.target.value);
  };

  // const onKEyPressEnter = (e) => {
  //   if (e.key === 'Enter') {
  //     onClickLoginButton();
  //   }
  // };

  const onLogin = () => {
    dispatch(login(userId, userPwd));
  };

  return (
    <>
      <Form>
        <p>로그인</p>
        아이디 :
        <input
          type="text"
          name="userId"
          value={userId}
          onChange={onChangeUserId}
          placeholder="아이디를 입력하세요"
        />
        <input type="text" name="userId" placeholder="아이디를 입력하세요" />
        비밀번호 :
        <input
          type="password"
          name="userPwd"
          value={userPwd}
          onChange={onChangeUserPwd}
          // onKeyPress={onKEyPressEnter}
          placeholder="비밀번호를 입력하세요"
        />
        <FormButton>
          <Button
            color="pink"
            bgColor="black"
            onClick={onLogin}
            placeholder="비밀번호를 입력하세요"
          />
          <Button color="pink" bgColor="black">
            로그인
          </Button>

          <Link to={'/'} style={{ color: 'inherit', textDecoration: 'none' }}>
            <Button color="pink" bgColor="black">
              취소
            </Button>
          </Link>
        </FormButton>
      </Form>
    </>
  );
};

export default LoginForm;

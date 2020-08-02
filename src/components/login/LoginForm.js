import React, { useState } from 'react';
import { Form } from './Form';
import { FormButton } from './FormButton';
import Button from '../common/Button';
import PropsTypes from 'prop-types';

const LoginForm = () => {
  LoginForm.PropsTypes = {
    userId: PropsTypes.string,
    password: PropsTypes.string,
  };
  const [user, setUser] = useState({
    userId: '',
    password: '',
  });

  const { userId, password } = user;
  const onChangeUserId = (e) => {
    const changeUser = { ...user, [e.target.name]: e.target.value };
    setUser(changeUser);
  };

  const onKEyPressEnter = (e) => {
    if (e.key === 'Enter') {
      onClickLoginButton();
    }
  };

  const onClickLoginButton = (e) => {
    setUser({
      username: '',
      password: '',
    });
  };

  return (
    <>
      <Form>
        <p>로그인</p>
        아이디 :
        <input
          type="text"
          name="userId"
          value={user.userId}
          onChange={onChangeUserId}
          placeholder="아이디를 입력하세요"
        />
        비밀번호 :
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={onChangeUserId}
          onKeyPress={onKEyPressEnter}
          placeholder="비밀번호를 입력하세요"
        />
        <FormButton>
          <Button color="pink" bgColor="black" onClick={onClickLoginButton}>
            로그인
          </Button>
          <Button color="pink" bgColor="black">
            취소
          </Button>
        </FormButton>
      </Form>
    </>
  );
};

export default LoginForm;

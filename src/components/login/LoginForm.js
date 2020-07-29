import React, { useState } from 'react';
import { Form } from './Form';
import { FormButton } from './FormButton';
import Button from '../common/Button';

const LoginForm = () => {

  const [user, setUser] = useState({
    userId: "",
    password: ""
  });

  const { userId, password } = user;
  const onChangeUserId = (e) => {
    const changeUser = {...user, [e.target.name]: e.target.value };
    setUser(changeUser);
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
          placeholder="비밀번호를 입력하세요"
        />
        <FormButton>
          <Button color="pink" bgColor="black">
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

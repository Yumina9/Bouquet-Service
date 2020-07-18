import React from 'react';
import { Form } from './Form';

const LoginForm = () => {
  return (
    <>
      <Form>
        <p>로그인</p>
        아이디 :
        <input type="text" placeholder="아이디를 입력하세요" />
        비밀번호 :
        <input type="password" placeholder="비밀번호를 입력하세요" />
      </Form>
    </>
  );
};

export default LoginForm;

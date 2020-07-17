import React from 'react';
import styled from 'styled-components';

const LoginForm = () => {
  return (
    <>
      <Form>
        <p>아이디 :</p>
        <input type="text" placeholder="아이디를 입력하세요" />
        <p>비밀번호 :</p>
        <input type="password" placeholder="비밀번호를 입력하세요" />
      </Form>
    </>
  );
};

export default LoginForm;

const Form = styled.div`
  display: flex;
  justify-content: center;
`;

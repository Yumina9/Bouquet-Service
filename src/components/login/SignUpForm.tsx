import React from 'react';
import styled from 'styled-components';

const SignUpForm = () => {
  return (
    <Form>
      <p>아이디 :</p>
      <input type="text" name="username" placeholder="아이디를 입력하세요" />
      <p>비밀번호 :</p>
      <input
        type="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
      />
    </Form>
  );
};

export default SignUpForm;

const Form = styled.div`
  display: flex;
  justify-content: center;
`;

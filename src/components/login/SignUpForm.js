import React, { userState } from 'react';
import { Form } from './Form';
import { FormButton } from './FormButton';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  // const [signUpUser, setSignUpUser] = useState({
  //   signUpUserName : "",
  //   signUpUserId: "",
  //   signUpUserEmail: "",
  //   signUpUserPassword: "",
  //   signUpUserPasswordCheck: ""
  // });
  return (
    <Form>
      <p>회원가입</p>
      <label>아이디</label>
      <input type="text" name="userId" placeholder="아이디를 입력하세요" />

      <label>비밀번호</label>
      <input
        type="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
      />

      <label>새 비밀번호 확인</label>
      <input
        type="password"
        name="passwordCheck"
        placeholder="비밀번호 재입력"
      />

      <label>이메일</label>
      <input type="email" name="userEmail" placeholder="example@example.com" />
      <label>이름</label>
      <input type="text" name="userName" placeholder="이름을 입력하세요." />
      <FormButton>
        <Button color="pink" bgColor="black">
          회원가입
        </Button>
        <Link to="/" color="pink">
          <Button color="pink" bgColor="black">
            취소
          </Button>
        </Link>
      </FormButton>
    </Form>
  );
};

export default SignUpForm;

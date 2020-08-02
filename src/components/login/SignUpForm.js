import React, {userState} from 'react';
import { Form } from './Form';

const SignUpForm = () => {

  // const [signUpUser, setSignUpUser] = useState({
  //   signUpUserName : "",
  //   signUpUserId: "",
  //   signUpUserEmail: "",
  //   signUpUserPassword: "",
  //   signUpUserPasswordCheck: ""
  // });
  return (
    <Form action="/" method="POST">
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
      <input type="password" name="passwordCheck" placeholder="비밀번호 재입력" />

      <label>이메일</label>
      <input type="email" name="userEmail" placeholder="example@example.com" />
      <label>이름</label>
      <input type="text" name="userName" placeholder="이름을 입력하세요." />
      <label>주소</label>
      <input type="text" name="userAddress" placeholder="주소를 입력하세요." />
      <label>휴대폰번호</label>
      <input type="email" name="userEmail" placeholder="이메일을 입력하세요." />  
    </Form>
  );
};

export default SignUpForm;

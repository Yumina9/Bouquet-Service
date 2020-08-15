import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../modules/member';
// import { Link } from 'react-router-dom';
import { Form } from './Form';
import { FormButton } from './FormButton';
import Button from '../common/Button';
// import { useSelector } from 'react-redux';

const LoginForm = () => {
  // const isLogin = useSelector((state) => state.member.isLogin);
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');

  const dispatch = useDispatch();

  const onUserIdChange = (e) => {
    setUserId(e.target.value);
    console.log('아이디', userId);
  };
  const onUserPwdChange = (e) => {
    setUserPwd(e.target.value);
    console.log('비밀번호', userPwd);
  };

  const onLogin = () => {
    // debugger;
    console.log(userId);
    console.log(userPwd);
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
          onChange={(e) => onUserIdChange(e)}
          placeholder="아이디를 입력하세요"
        />
        비밀번호 :
        <input
          type="password"
          name="userPwd"
          value={userPwd}
          onChange={(e) => onUserPwdChange(e)}
          // onKeyPress={onKEyPressEnter}
          placeholder="비밀번호를 입력하세요"
        />
        {/* <FormButton> */}
        <button onClick={(e) => onLogin(e)}>
          로그인
          {/* <Link to={'/'}>로그인</Link> */}
        </button>
        {/* {isLogin.toString() == 'treu' ? (
            <Button
              color="pink"
              bgColor="black"
              onClick={onLogin}
              placeholder="비밀번호를 입력하세요"
            >
              <Link to={'/'}>로그인</Link>
            </Button>
          ) : (
            <p>아이디 혹은 비밀번호가 맞지 않습니다.</p>
          )} */}
        {/* <Link to={'/'}>
            <Button color="pink" bgColor="black">
              취소
            </Button>
          </Link> */}
        <Button color="pink" bgColor="black">
          취소
        </Button>
        {/* </FormButton> */}
      </Form>
    </>
  );
};

export default LoginForm;

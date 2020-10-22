//사용자 브라우저 쿠키에서 인증토큰 조회 반환 재사용 함수
const getUserToken = () => {
  const userToken = localStorage.getItem("access_token");
  return userToken;
};

//쿠키 파기하기
const setCookieExpire = () => {
  localStorage.removeItem("refresh_token");
};

//사용자 인증여부(토큰보유여부)
const isUserAuthenticated = () => {
  const userToken = getUserToken();
  

  if (userToken == null) {
    //인증이 안된 상태
    return false;
  } else {
    return true;  
    //인증 완료 상태
  }
};

const notLoginRedirect = () => {
  if (isUserAuthenticated()) {
    window.location = "/login";
  } else {
    window.location = "/";
  }
};

export { getUserToken, isUserAuthenticated, setCookieExpire, notLoginRedirect };
